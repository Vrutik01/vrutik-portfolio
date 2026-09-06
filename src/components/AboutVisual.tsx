import Marquee from "react-fast-marquee";
import "./styles/AboutVisual.css";

const focusAreas = [
  {
    label: "System Modernization",
    detail: "Refactoring monolithic flows into async, message-driven services",
  },
  {
    label: "Cloud Native Delivery",
    detail: "Operating LMS/CMS workloads across AWS and Azure",
  },
  {
    label: "Team Leadership",
    detail: "Mentoring 12+ engineers through reviews & design discussions",
  },
  {
    label: "Performance Engineering",
    detail: "Optimizing PostgreSQL, MongoDB, and caching layers",
  },
];

const marqueeTags = [
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
  "System Design",
];

const AboutVisual = () => {
  return (
    <div className="about-visual">
      <div className="about-visual-glow" aria-hidden="true"></div>

      <div className="about-focus-grid">
        {focusAreas.map((item, index) => (
          <div className="about-focus-card" key={index}>
            <span className="about-focus-index">0{index + 1}</span>
            <h4>{item.label}</h4>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="about-marquee">
        <Marquee speed={32} gradient={false}>
          {marqueeTags.map((tag, index) => (
            <span className="about-marquee-tag" key={index}>
              {tag}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default AboutVisual;
