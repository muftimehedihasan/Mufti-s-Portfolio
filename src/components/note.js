// color normalizePath. 1

// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Contact from './components/Contact'

function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      
      <div className='container mx-auto px-8'>
      <Navbar />
      <Hero/>
      <About/>
      <Technologies/>
      <Experiences/>
      <Projects/>
      <Contact/>
      </div>
     
    </div>
  );
  
}

export default App;


2//

// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className='overflow-x-hidden text-neutral-900 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      {/* New Background Structure with Different Color */}
      <div className="relative h-full w-full bg-blue-950"> {/* Changed background color */}
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Main Content */}
      <div className='container mx-auto px-8 relative z-10'>
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experiences />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;




export const EXPERIENCES = [
  {
    year: "Jul 2022 - Present",
    role: "Mufti, Researcher",
    company: "Kahf Yazilim A.S",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  }
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];







import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React.js, as well as back-end technologies like Laravel, MySQL, AWS. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React.js, MySQL, and AWSs. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jul 2022 - Present",
    role: "Mufti, Researcher",
    company: "Kahf Yazilim A.S",
    description: `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React.js, Laravel, MySQL. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`,
    technologies: ["PHP", "VS Codes", "Google Sheets", "Adobe"],
  }
  
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Laravel", "MySql"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "React", "Laravel", "MySql"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Laravel", "MySql"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "React", "Laravel", "MySql"],
  },
];

export const CONTACT = {
  address: "Mirpur DOHS, Dhaka, Bangladesh",
  phoneNo: "+880 1730 400147 ",
  email: "muftimehedi@kahf.co",
};




import React from 'react'
import {ABOUT_TEXT} from '../constants'
import profilePic from "../assets/prof-3.png"
import { motion } from "framer-motion"


const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>

        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img src={profilePic}  alt="" />
                </div>
            </motion.div>


            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
            className='w-full lg:w-1/2'>
            <div className='flex flex-col items-center lg:items-start'>
                <h1 className='pb-6 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl'>About <span className='text-neutral-500'>Me</span> 
                </h1>
                <div>
                    <p className='my-2 max-w-xl py-6 font-normal'>{ABOUT_TEXT}</p>
                </div>
            </div>
            </motion.div>
            

        </div>
    </div>
  )
}

export default About



import React from 'react'
import profilePic from "../assets/prof-3.png"
import {ABOUT_TEXT} from '../constants'

const About = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
       <h1 className='my-20 text-center text-4xl'>
        About
        <span className='text-neutral-500'> Me</span> 
        </h1>

        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex items-center justify-center'>
            <img className='rounded-2xl' src={profilePic}  alt="" />
            </div>

        </div>   
        <div className='w-full lg:w-1/2'>
            <div className='flex justify-center lg:justify-start'>
                <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
            </div>
            </div>         
    </div>
        
    </div>
  )
}

export default About
