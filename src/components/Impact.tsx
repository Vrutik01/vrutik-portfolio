import "./styles/Impact.css";

const stats = [
  { value: "5+", label: "Years in Enterprise LMS/CMS" },
  { value: "40%", label: "Fewer Blocking Ops via Async Migration" },
  { value: "12+", label: "Engineers Mentored" },
  { value: "30%+", label: "Faster Query Execution" },
  { value: "85%+", label: "Test Coverage with XUnit" },
  { value: "10K+", label: "API Requests Handled Daily" },
];

const Impact = () => {
  return (
    <div className="impact-section section-container" id="impact">
      <div className="impact-grid">
        {stats.map((stat, index) => (
          <div className="impact-card" key={index}>
            <h3 className="title">{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Impact;
