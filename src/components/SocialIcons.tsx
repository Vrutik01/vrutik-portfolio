import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
          >
            <FaGithub aria-hidden="true" />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/vrutikparvadiya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
          >
            <FaLinkedinIn aria-hidden="true" />
          </a>
        </span>
        <span>
          <a
            href="https://leetcode.com/vrutikparvadiya01/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode profile (opens in a new tab)"
          >
            <SiLeetcode aria-hidden="true" />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href="/VrutikParvadiyaResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download resume PDF (opens in a new tab)"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes aria-hidden="true" />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
