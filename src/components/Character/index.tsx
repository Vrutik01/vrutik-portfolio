import { useEffect, useRef } from "react";
import { useLoading } from "../../context/LoadingProvider";
import { setProgress } from "../Loading";
import "./orbit.css";

// Original hero visual: an abstract "systems" orbit graphic representing
// a central service with orbiting modules, connected by animated links.
// Replaces the previous 3D avatar with an independent, lightweight design.

const NODE_COUNT = 6;

const CharacterModel = () => {
  const { setLoading } = useLoading();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Drive the existing loading-bar UI without any external asset fetch.
    const progress = setProgress((value) => setLoading(value));
    const timer = setTimeout(() => {
      progress.loaded();
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      targetX = Math.max(-1, Math.min(1, x));
      targetY = Math.max(-1, Math.min(1, y));
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      el.style.setProperty("--tiltX", `${currentY * -8}deg`);
      el.style.setProperty("--tiltY", `${currentX * 8}deg`);
      raf = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMouseMove);
    tick();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const nodes = Array.from({ length: NODE_COUNT });

  return (
    <div className="character-container">
      <div className="character-model orbit-model" ref={containerRef}>
        <div className="character-hover"></div>
        <svg
          className="orbit-svg"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="orbit-ring orbit-ring-1">
            <circle cx="300" cy="300" r="230" />
          </g>
          <g className="orbit-ring orbit-ring-2">
            <circle cx="300" cy="300" r="165" />
          </g>
          <g className="orbit-ring orbit-ring-3">
            <circle cx="300" cy="300" r="100" />
          </g>
          {nodes.map((_, i) => {
            const angle = (i / NODE_COUNT) * Math.PI * 2;
            const radius = 230;
            const x = 300 + radius * Math.cos(angle);
            const y = 300 + radius * Math.sin(angle);
            return (
              <g key={i} className={`orbit-node orbit-node-${i}`}>
                <line x1="300" y1="300" x2={x} y2={y} />
                <circle cx={x} cy={y} r="8" />
              </g>
            );
          })}
          <circle className="orbit-core" cx="300" cy="300" r="34" />
        </svg>
      </div>
    </div>
  );
};

export default CharacterModel;
