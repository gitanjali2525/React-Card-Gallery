
import React from "react";
import { Bookmark } from "lucide-react";
import "./App.css";

function JobCard({ company, role, time, type, level, salary, location, logo }) {
  return (
    <div className="job-card">
      <div className="top">
        <div className="logo">{logo}</div>

        <button className="save-btn">
          Save <Bookmark size={14} />
        </button>
      </div>

      <div className="job-info">
        <p className="company">
          {company} <span>{time}</span>
        </p>

        <h2>{role}</h2>

        <div className="tags">
          <span>{type}</span>
          <span>{level}</span>
        </div>
      </div>

      <div className="bottom">
        <div className="salary">
          <h3>{salary}</h3>
          <p>{location}</p>
        </div>

        <button className="apply-btn">Apply Now</button>
      </div>
    </div>
  );
}

function App() {
  const jobs = [
    {
      company: "Netflix",
      role: "Machine Learning Engineer",
      time: "10 days ago",
      type: "Full Time",
      level: "Senior Level",
      salary: "$110/hour",
      location: "Mumbai, India",
      logo: "N"
    },
    {
      company: "Google",
      role: "Frontend Developer",
      time: "5 days ago",
      type: "Full Time",
      level: "Mid Level",
      salary: "$90/hour",
      location: "Bangalore, India",
      logo: "G"
    },
    {
      company: "Amazon",
      role: "Software Engineer",
      time: "2 days ago",
      type: "Full Time",
      level: "Junior Level",
      salary: "$80/hour",
      location: "Hyderabad, India",
      logo: "A"
    },
    {
      company: "Microsoft",
      role: "React Developer",
      time: "7 days ago",
      type: "Remote",
      level: "Mid Level",
      salary: "$95/hour",
      location: "Pune, India",
      logo: "M"
    },
    {
      company: "Meta",
      role: "UI/UX Designer",
      time: "3 days ago",
      type: "Full Time",
      level: "Senior Level",
      salary: "$100/hour",
      location: "Delhi, India",
      logo: "f"
    },
    {
      company: "Adobe",
      role: "Backend Developer",
      time: "1 day ago",
      type: "Remote",
      level: "Junior Level",
      salary: "$75/hour",
      location: "Bhopal, India",
      logo: "A"
    }
  ];

  return (
    <div className="main-container">
      {jobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
}

export default App;
