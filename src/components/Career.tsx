import { useRef } from "react";
import "./styles/Career.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const experiences = [
  {
    role: "Module Lead",
    company: "Zeus Learning",
    year: "NOW",
    desc: "Architecting and scaling enterprise LMS/CMS platforms serving thousands of concurrent users, leading modernization into message-driven architectures, and mentoring a team of 12+ developers.",
  },
  {
    role: "Senior Software Engineer",
    company: "Zeus Learning",
    year: "2023",
    desc: "Engineered scalable LMS/CMS platforms with .NET (C#), Angular, Node.js, and TypeScript, leveraging Azure services (Entra ID, Key Vault, Cosmos DB, Service Bus) and achieving 85%+ test coverage with XUnit.",
  },
  {
    role: "Software Engineer",
    company: "Zeus Learning",
    year: "2021",
    desc: "Built a serverless Space & Room Reservation platform with AWS Lambda, API Gateway, and S3, and integrated 8+ third-party services (GSuite, Outlook, ServiceNow, Zoom, Teams, Meet) to enhance platform interoperability and user engagement.",
  },
  {
    role: "Project Intern",
    company: "CDAC, Kharghar",
    year: "2020",
    desc: "Contributed to a Raspberry Pi-based self-automation robot for sewage cleaning, implementing live streaming, line-following, and obstacle detection, with a Bootstrap-based web UI for control.",
  },
  {
    role: "Campus Manager",
    company: "slice",
    year: "2019",
    desc: "Drove product marketing and customer engagement initiatives on campus, refining targeted outreach strategies based on customer preferences and gaining hands-on exposure to go-to-market execution.",
  },
];

const Career = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // The connecting line grows in sync with scroll position, and
      // reverses smoothly when scrolling back up.
      gsap.fromTo(
        ".career-timeline",
        { maxHeight: "0%", opacity: 0 },
        {
          maxHeight: "100%",
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".career-info",
            start: "top 78%",
            end: "bottom 55%",
            scrub: 0.6,
          },
        }
      );

      // Each role card cascades in as it enters the viewport, and
      // reverses out again when scrolling back up past it.
      const boxes = gsap.utils.toArray<HTMLElement>(".career-info-box");
      boxes.forEach((box, index) => {
        gsap.fromTo(
          box,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: index * 0.05,
            scrollTrigger: {
              trigger: box,
              start: "top 88%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      className="career-section section-container"
      id="career"
      ref={containerRef}
    >
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {experiences.map((exp, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{exp.role}</h4>
                  <h5>{exp.company}</h5>
                </div>
                <h3>{exp.year}</h3>
              </div>
              <p>{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
