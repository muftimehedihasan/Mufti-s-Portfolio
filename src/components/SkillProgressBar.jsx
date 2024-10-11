import React from 'react';

const SkillProgressBar = ({ skill, percentage, color }) => {
  return (
    <div className="flex flex-col items-center m-4">
      <div className="text-white text-center mb-2">{skill}</div>
      <div className="relative w-24 h-24">
        <svg className="absolute top-0 left-0 w-full h-full">
          <circle
            cx="50%"
            cy="50%"
            r="40"
            stroke="gray"
            strokeWidth="6"
            fill="none"
          />
          <circle
            cx="50%"
            cy="50%"
            r="40"
            stroke={color}
            strokeWidth="6"
            strokeDasharray="251"
            strokeDashoffset="251"
            fill="none"
            style={{
              strokeDashoffset: `calc(251 - (251 * ${percentage}) / 100)`,
              transition: "stroke-dashoffset 1s ease-in-out",
            }}
          />
        </svg>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <span className="text-white text-xl">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default SkillProgressBar;
