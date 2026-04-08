import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss";

const LanguageList = () => {
  const [languages] = useState([
    { name: "MongoDB", progress: 70, className: "mongodb-progress", months: 5 },
    { name: "Express.js", progress: 65, className: "express-progress", months: 9 },
    { name: "React", progress: 70, className: "react-progress", months: 9 },
    { name: "Node.js", progress: 65, className: "node-progress", months: 9 },
    { name: "PostgreSQL", progress: 60, className: "postgres-progress", months: 8 },
    { name: "HTML/CSS/JavaScript", progress: 75, className: "web-progress", months: 12 },
  ]);

  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <span>
              {language.name}: {language.months} months
              {/* {(language.months / 12).toFixed(1)} ) */}
            </span>
            <ProgressBar
              progress={language.progress}
              className={language.className}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageList;