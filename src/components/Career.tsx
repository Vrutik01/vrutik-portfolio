import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Zeus Learning</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Built a serverless Space & Room Reservation platform with AWS
              Lambda, API Gateway, and S3, and integrated 8+ third-party
              services (GSuite, Outlook, ServiceNow, Zoom, Teams, Meet) to
              enhance platform interoperability and user engagement.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer</h4>
                <h5>Zeus Learning</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Engineered scalable LMS/CMS platforms with .NET (C#), Angular,
              Node.js, and TypeScript, leveraging Azure services (Entra ID,
              Key Vault, Cosmos DB, Service Bus) and achieving 85%+ test
              coverage with XUnit.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Module Lead</h4>
                <h5>Zeus Learning</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architecting and scaling enterprise LMS/CMS platforms serving
              thousands of concurrent users, leading modernization into
              message-driven architectures, and mentoring a team of 12+
              developers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
