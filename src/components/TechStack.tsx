import * as THREE from "three";
import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { BallCollider, Physics, RigidBody, RapierRigidBody } from "@react-three/rapier";

const textureLoader = new THREE.TextureLoader();
const imageUrls = [
  "/images/techstack/csharp.webp",
  "/images/techstack/dotnet.webp",
  "/images/techstack/angular.webp",
  "/images/techstack/typescript.webp",
  "/images/techstack/nodejs.webp",
  "/images/techstack/azure.webp",
  "/images/techstack/aws.webp",
  "/images/techstack/docker.webp",
  "/images/techstack/postgresql.webp",
  "/images/techstack/mongodb.webp",
  "/images/techstack/redis.webp",
  "/images/techstack/react.webp",
];
const textures = imageUrls.map((url) => textureLoader.load(url));
const techNames = [
  "C#",
  ".NET Core",
  "Angular",
  "TypeScript",
  "Node.js",
  "Azure",
  "AWS",
  "Docker",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "React",
];

// Flat "coin" tokens instead of fully-wrapped spheres: the logo sits on
// two camera-facing circular faces instead of being smeared around a
// globe, so each icon stays instantly recognizable.
const coinGeometry = new THREE.CylinderGeometry(1, 1, 0.34, 48);

const sideMaterial = new THREE.MeshPhysicalMaterial({
  color: "#12181c",
  metalness: 0.7,
  roughness: 0.45,
  clearcoat: 0.3,
});

const coins = [...Array(24)].map(() => ({
  scale: [0.75, 1, 0.85, 1, 1][Math.floor(Math.random() * 5)],
}));

type CoinProps = {
  vec?: THREE.Vector3;
  scale: number;
  r?: typeof THREE.MathUtils.randFloatSpread;
  material: THREE.MeshPhysicalMaterial;
  isActive: boolean;
};

function CoinGeo({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
  material,
  isActive,
}: CoinProps) {
  const api = useRef<RapierRigidBody | null>(null);

  useFrame((_state, delta) => {
    if (!isActive) return;
    delta = Math.min(0.1, delta);
    const impulse = vec
      .copy(api.current!.translation())
      .normalize()
      .multiply(
        new THREE.Vector3(
          -50 * delta * scale,
          -150 * delta * scale,
          -50 * delta * scale
        )
      );

    api.current?.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
      // Lock rotation so the coin's logo face always stays readable
      // instead of tumbling edge-on to the camera.
      enabledRotations={[false, false, false]}
    >
      <BallCollider args={[scale]} />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={coinGeometry}
        material={[sideMaterial, material, material]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </RigidBody>
  );
}

type PointerProps = {
  vec?: THREE.Vector3;
  isActive: boolean;
};

function Pointer({ vec = new THREE.Vector3(), isActive }: PointerProps) {
  const ref = useRef<RapierRigidBody>(null);

  useFrame(({ pointer, viewport }) => {
    if (!isActive) return;
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    );
    ref.current?.setNextKinematicTranslation(targetVec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

const TechStack = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const threshold = document
        .getElementById("work")!
        .getBoundingClientRect().top;
      setIsActive(scrollY > threshold);
    };
    document.querySelectorAll(".header a").forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", () => {
        const interval = setInterval(() => {
          handleScroll();
        }, 10);
        setTimeout(() => {
          clearInterval(interval);
        }, 1000);
      });
    });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const materials = useMemo(() => {
    return textures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          transparent: true,
          emissive: "#ffffff",
          emissiveMap: texture,
          emissiveIntensity: 0.35,
          metalness: 0.3,
          roughness: 0.9,
          clearcoat: 0.15,
        })
    );
  }, []);

  return (
    <div className="techstack">
      <h2> My Techstack</h2>
      <ul className="sr-only">
        {techNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <Canvas
        shadows
        gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
        className="tech-canvas"
        aria-hidden="true"
      >
        <ambientLight intensity={1.4} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight position={[0, 5, -4]} intensity={2.2} />
        <directionalLight position={[-10, -5, 8]} intensity={0.8} />
        <Physics gravity={[0, 0, 0]}>
          <Pointer isActive={isActive} />
          {coins.map((props, i) => (
            <CoinGeo
              key={i}
              {...props}
              material={materials[i % materials.length]}
              isActive={isActive}
            />
          ))}
        </Physics>
        <EffectComposer enableNormalPass={false}>
          <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default TechStack;
