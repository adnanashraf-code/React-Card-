import React from "react";
import Card from "./components/card";

const App = () => {
  const jobData = [
    {
      id: 1,
      company: "Google",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      role: "Software Engineer",
      posted: "5 days ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      salary: "$150/hr",
      location: "Bangalore, India",
    },
    {
      id: 2,
      company: "Amazon",
      logo: "https://i.pinimg.com/736x/3b/70/ac/3b70ac7c3da28e47fdee4cb29dbc5c67.jpg",
      role: "Backend Developer",
      posted: "2 weeks ago",
      tag1: "Full Time",
      tag2: "Mid Level",
      salary: "$180/hr",
      location: "Hyderabad, India",
    },
    {
      id: 3,
      company: "Meta",
      logo: "https://i.pinimg.com/1200x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg",
      role: "Frontend Engineer",
      posted: "3 days ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "$220/hr",
      location: "Remote",
    },
    {
      id: 4,
      company: "Apple",
      logo: "https://i.pinimg.com/1200x/eb/f4/3a/ebf43a6043104e8c21fe7a1570530fcd.jpg",
      role: "iOS Developer",
      posted: "1 week ago",
      tag1: "Full Time",
      tag2: "Mid Level",
      salary: "$200/hr",
      location: "California, USA",
    },
    {
      id: 5,
      company: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      role: "UI Engineer",
      posted: "4 days ago",
      tag1: "Contract",
      tag2: "Senior Level",
      salary: "$300/hr",
      location: "Remote",
    },
    {
      id: 6,
      company: "Microsoft",
      logo: "https://i.pinimg.com/1200x/37/55/df/3755df15d92e7c4f68294fcb54b25599.jpg",
      role: "Full Stack Developer",
      posted: "6 days ago",
      tag1: "Full Time",
      tag2: "Junior Level",
      salary: "$160/hr",
      location: "Noida, India",
    },
    {
      id: 7,
      company: "Tesla",
      logo: "https://i.pinimg.com/1200x/df/00/b1/df00b1d8590dba5b570420e96809b5c6.jpg",
      role: "Software Engineer",
      posted: "10 days ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "$250/hr",
      location: "Texas, USA",
    },
    {
      id: 8,
      company: "Adobe",
      logo: "https://i.pinimg.com/736x/4c/da/0b/4cda0b662effeca9c714884a3bc47ce1.jpg",
      role: "Frontend Developer",
      posted: "2 days ago",
      tag1: "Part Time",
      tag2: "Junior Level",
      salary: "$130/hr",
      location: "Pune, India",
    },
    {
      id: 9,
      company: "Spotify",
      logo: "https://i.pinimg.com/736x/f5/3c/6c/f53c6ce6f793a1e5af96dddaccb5eb14.jpg",
      role: "React Developer",
      posted: "1 week ago",
      tag1: "Full Time",
      tag2: "Mid Level",
      salary: "$190/hr",
      location: "Stockholm, Sweden",
    },
    {
      id: 10,
      company: "Airbnb",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
      role: "Frontend Engineer",
      posted: "3 weeks ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "$210/hr",
      location: "Remote",
    },
    {
      id: 11,
      company: "NVIDIA",
      logo: "https://i.pinimg.com/1200x/3c/16/69/3c166947763be9a6a9e2be1416447f00.jpg",
      role: "AI Software Engineer",
      posted: "4 days ago",
      tag1: "Full Time",
      tag2: "Senior Level",
      salary: "$320",
      location: "California, USA",
    },
    {
      id: 12,
      company: "LinkedIn",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
      role: "Frontend Engineer",
      posted: "1 week ago",
      tag1: "Full Time",
      tag2: "Mid Level",
      salary: "$210",
      location: "Bangalore, India",
    },
  ];
  return (
    <div className="parent">
      {/* Render your cards here using jobData */}
      {jobData.map((elem, index) => {
        return (
          <div key={index}>
            <Card
              company={elem.company}
              logo={elem.logo}
              role={elem.role}
              posted={elem.posted}
              tag1={elem.tag1}
              tag2={elem.tag2}
              salary={elem.salary}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
