import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = (
  <>
I am a passionate full-stack developer with expertise in creating robust and scalable web applications. With 2 years of experience in front-end technologies such as React.js and back-end technologies like Laravel, MySQL, and AWS, I strive to leverage my skills to deliver innovative solutions that drive business growth and elevate user experiences.
  <br /> <br />
  As an Alim, I maintain a close relationship with Ilme Deen, Tasawwuf and Taqwa, which continually guides me on the right path. Moreover, I am committed to contributing to the welfare of the Muslim Ummah and actively participating in their development, as this represents one of the core objectives of my life. 
  </>);

export const ABOUT_TEXT = (
  <>
    I started education in my village school. In 2020, I completed <b>Dawra-e-Hadith (Master's degree)</b> from Bogura Jamil Madrasa, and in 2021, I completed <b>Ifta (Higher Islamic Law & Fatawa)</b> from Jamia Abu Bakr Siddiq (RA) Dhaka. After that, I began working with technology.
    <br /><br />
    The <b>Seerah of Prophet Muhammad (PBUH)</b> is my ideal, and I follow the <b>Sahaba</b> (companions), <b>Tabi'in</b> (followers), <b>Tabe-Tabi'in</b> (followers of the followers), and all those devoted to Islam and the Muslim Ummah. They are my guides, and I aspire to be one of those individuals.
  </>
);


export const EXPERIENCES = [
  {
    year: "Jul 2022 - Present",
    role: "Mufti, Researcher",
    company: "Kahf Yazilim A.S",
    description: `Led a team in filtering and maintaining content from the point of view of Islam for Kahftube and Kahfkids. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["PHP", "VS Codes", "Google Sheets", "Adobe"],
  }
  
];

export const EDUCATION = [
  {
    year: "2020 ",
    role: "Degree: Dawra Hadith (Master's degree)",
    company: "Result: Star mark",
    description: `Institution: Al-Jamiatul Islamia Quasemul Ulum (Jamil Madrasah), Bogura`, 
    technologies: ["Board: Al-Haiatul Ulya Lil Jamiatil Qawmia Bangladesh"],
    // Subject: Islamic studies and Arabic  
  },


    {
      year: "2021 ",
    role: "Degree: Higher Islamic Law & Fatawa (Ifta) ",
    company: "star mark",
    description: `Institution: Jamia Abu Bakr Siddiq (RA), Jatrabari, Dhaka`, 
    technologies: ["Result: Star mark"],
    // Subject: Islamic studies and Arabic  
    },
  
  
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
