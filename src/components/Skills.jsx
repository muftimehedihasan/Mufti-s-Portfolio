import React from 'react';
import SkillProgressBar from './SkillProgressBar';  // Import SkillProgressBar component
import { motion } from "framer-motion";  // Import Framer Motion for animations

const Skills = () => {
  // Define an array of Full Stack Developer skills with their respective percentage and color
  const skills = [
    { skill: "JavaScript", percentage: 90, color: "#f59e0b" },
    { skill: "React.js", percentage: 85, color: "#06b6d4" },
    { skill: "Laravel", percentage: 75, color: "#f43f5e" },
    { skill: "MySQL", percentage: 70, color: "#14b8a6" },
    { skill: "Datastructure & Algorithms", percentage: 50, color: "#3b82f6" },
    { skill: "AWS", percentage: 80, color: "#10b981" },
  ];

  return (
    <div className='border-b border-neutral-800 pb-24'>
      {/* Section Title with Animation */}
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}  // Animation when element comes into view
        initial={{ opacity: 0, y: -100 }}    // Initial state (out of view)
        transition={{ duration: 0.5 }}       // Animation duration
        className='my-20 text-center text-4xl'
      >
        Skills
      </motion.h1>

      {/* Skill Progress Bars */}
      <motion.div 
       whileInView={{ opacity: 1, x: 0 }}
       initial={{ opacity: 0, x: -100 }}
       transition={{ duration: 1.5 }}
      
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <SkillProgressBar 
            key={index}               // Unique key for each child in the list
            skill={skill.skill}        // Pass skill name
            percentage={skill.percentage}  // Pass skill percentage
            color={skill.color}        // Pass skill color
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
