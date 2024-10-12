import React from 'react';
import SkillProgressBar from './SkillProgressBar';  // Import SkillProgressBar component

const Skills = () => {
  const skill = { skill: "Project Planning", percentage: 85, color: "#06b6d4" };  // Define one skill
  const skill2 = { skill: "Project Planning2", percentage: 80, color: "#06b6d4" };  // Define one skill

  return (
    <section id="skills" className="flex flex-col items-center justify-center h-screen bg-neutral-900">
      <h2 className="text-3xl font-bold text-cyan-300 mb-10">My Skills</h2>
      <SkillProgressBar 
        skill={skill.skill} 
        percentage={skill.percentage} 
        color={skill.color} 
      />
    </section>
  );
};

export default Skills;
