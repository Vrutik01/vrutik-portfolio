import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Generic "enter/leave" transition for any element marked with
// data-reveal. Plays on the way down and reverses on the way back up,
// so scrolling in either direction feels animated rather than static.
export default function setScrollReveal() {
  const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

  elements.forEach((el) => {
    if (el.dataset.revealBound === "true") return;
    el.dataset.revealBound = "true";

    const direction = el.dataset.revealFrom;
    const distanceX = direction === "left" ? -60 : direction === "right" ? 60 : 0;
    const distanceY = direction === "left" || direction === "right" ? 0 : 60;

    gsap.fromTo(
      el,
      { opacity: 0, x: distanceX, y: distanceY },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  });
}
