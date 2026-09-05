import { useEffect, useRef } from "react";
import "./styles/HeroVisual.css";

// Lightweight, dependency-free hero visual: a subtle mouse-tilt code
// card plus a few floating stat chips. Replaces the previous 3D avatar
// with something that always renders, loads instantly, and works well
// on both desktop and mobile.
const HeroVisual = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let raf: number;

    const onMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      targetX = Math.max(-1, Math.min(1, x));
      targetY = Math.max(-1, Math.min(1, y));
    };

    const resetTarget = () => {
      targetX = 0;
      targetY = 0;
    };

    const tick = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      card.style.setProperty("--tiltX", `${currentY * -6}deg`);
      card.style.setProperty("--tiltY", `${currentX * 6}deg`);
      raf = requestAnimationFrame(tick);
    };

    card.addEventListener("mousemove", onMouseMove);
    card.addEventListener("mouseleave", resetTarget);
    tick();

    return () => {
      card.removeEventListener("mousemove", onMouseMove);
      card.removeEventListener("mouseleave", resetTarget);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hero-visual">
      <div className="hero-visual-glow" aria-hidden="true"></div>

      <div className="hero-badge-row">
        <div className="hero-badge hero-badge-1">
          <span className="hero-badge-dot" />
          Module Lead
        </div>
        <div className="hero-badge hero-badge-2">5+ Yrs Experience</div>
        <div className="hero-badge hero-badge-3">LMS &middot; CMS Platforms</div>
        <div className="hero-badge hero-badge-4">Mentors 12+ Engineers</div>
      </div>

      <div className="hero-terminal" ref={cardRef}>
        <div className="hero-terminal-bar">
          <span className="hero-dot hero-dot-red"></span>
          <span className="hero-dot hero-dot-yellow"></span>
          <span className="hero-dot hero-dot-green"></span>
          <span className="hero-terminal-title">profile.ts</span>
        </div>
        <div className="hero-terminal-body">
          <p>
            <span className="tk-kw">const</span>{" "}
            <span className="tk-var">engineer</span> = {"{"}
          </p>
          <p className="hero-indent">
            <span className="tk-key">name</span>:{" "}
            <span className="tk-str">"Vrutik Parvadiya"</span>,
          </p>
          <p className="hero-indent">
            <span className="tk-key">role</span>:{" "}
            <span className="tk-str">"Module Lead"</span>,
          </p>
          <p className="hero-indent">
            <span className="tk-key">company</span>:{" "}
            <span className="tk-str">"Zeus Learning"</span>,
          </p>
          <p className="hero-indent">
            <span className="tk-key">stack</span>: [
            <span className="tk-str">"C#"</span>,{" "}
            <span className="tk-str">".NET"</span>,{" "}
            <span className="tk-str">"Angular"</span>,{" "}
            <span className="tk-str">"Azure"</span>],
          </p>
          <p className="hero-indent">
            <span className="tk-key">focus</span>:{" "}
            <span className="tk-str">"Scalable, message-driven systems"</span>
            ,
          </p>
          <p>
            {"}"}
            <span className="hero-cursor">&nbsp;</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
