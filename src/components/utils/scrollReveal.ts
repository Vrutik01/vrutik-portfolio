import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Generic "enter" transition for any element marked with data-reveal.
// Plays once as the element scrolls into view. It intentionally does
// NOT reverse/hide on the way back up — on mobile, small scroll
// bounces (address-bar resize, momentum scroll) repeatedly cross the
// trigger line and cause content to flicker in and out, which reads
// as a bug rather than a transition.
export default function setScrollReveal() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

  elements.forEach((el) => {
    if (el.dataset.revealBound === "true") return;
    el.dataset.revealBound = "true";

    if (prefersReducedMotion) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

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
          start: "top 88%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
  });
}
