import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: {
    name: 'Ronald Pranata Kurniawan',
    title: 'Senior Software Engineer – Singapore PR',
    location: 'Singapore',
    phone: '86463025',
    email: 'ronald_pranata@yahoo.co.id',
    linkedin: 'https://www.linkedin.com/in/ronaldpranata',
    website: 'https://ronaldpranata.com',
    summary: 'Senior Software Engineer with 15+ years of full-stack experience architecting enterprise-scale applications and high-performance systems across Digital Media sectors. Expert in end-to-end development, bridging complex backend infrastructure with responsive frontend interfaces.'
  },
  competencies: [
    {
      title: 'Enterprise Architecture & Full-Stack Development',
      description: 'Expert in designing high-availability systems using Node.js, Java Spring Boot, and Nuxt/Vue.js for global clients.'
    },
    {
      title: 'AI & Cloud Innovation',
      description: 'Hands-on experience integrating Generative AI (Google Gemini, OpenAI) and deploying scalable containerized applications on AWS, GCP, and Docker.'
    },
    {
      title: 'Technical Leadership & Mentorship',
      description: 'Proven ability to lead development teams, conduct code reviews, and mentor junior engineers to ensure code quality and architectural integrity.'
    },
    {
      title: 'Cross-Border Project Management',
      description: '15+ years of experience collaborating with diverse international teams (e.g., China, Singapore, Indonesia) and managing outsourced resources to meet strict deadlines.'
    },
    {
      title: 'Product & Information Management',
      description: 'Specialized knowledge in Information Architecture and HCI, ensuring complex systems remain user-friendly and highly functional.'
    }
  ],
  skills: [
    { category: 'Frontend', items: ['VueJS / Nuxt', 'React / Next', 'HTML & CSS', 'JavaScript', 'TypeScript', 'Tailwind', 'Bootstrap', 'jQuery'] },
    { category: 'Backend & Database', items: ['NodeJS', 'NestJS', 'Java Springboot', 'PHP', 'MySQL', 'PostgreSQL', 'Redis', 'Prisma'] },
    { category: 'AI & ML', items: ['Google Gemini API', 'OpenAI API', 'ComfyUI', 'Stable Diffusion', 'Python'] },
    { category: 'DevOps & Cloud', items: ['Git', 'GitHub Actions', 'Docker', 'Kubernetes', 'AWS', 'GCP', 'Linux'] }
  ],
  experience: [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Dentsu',
      location: 'Singapore',
      period: 'May 2021 — Present',
      achievements: [
        'Architected an AI-powered storytelling platform using Nuxt 4, integrating Google Gemini and ComfyUI for generative content and BullMQ/Redis to automate high-throughput video rendering',
        'Streamlined deployment workflows by architecting automated CI/CD pipelines using GitHub Actions, significantly reducing deployment time and error rates for critical applications',
        'Achieved a high referral rate of 90% from the leading client in the insurance industry',
        'Successfully led and delivered a AI-generated content platform that empowered content creators to produce high-quality and engaging content in various domains using state-of-the-art tools such as Open AI API, Stable Diffusion, Python, Nuxt, and MySQL on time with a small team of 2 software engineers',
        'Crafted and deployed an award-winning digital ecosystem for a leading client that transformed their customer experience and loyalty using a robust stack of Nuxt, Java Spring Boot, Docker, NestJS, Node, MySQL, and AWS',
        'Leveraged new technologies, such as React, React Native, and VueJS, to elevate the digital customer experience for various clients',
        'Collaborated effectively with teams across client and company to accomplish projects on time and within budget using Agile and Scrum methodologies'
      ]
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'Dentsu',
      location: 'Singapore',
      period: 'June 2017 — May 2021',
      achievements: [
        'Engineered a custom resource management ecosystem by integrating the GitLab API to automate project tracking and resource allocation, significantly improving operational visibility',
        'Developed a data-driven customer intelligence portal using D3.js and Chart.js, transforming complex datasets into actionable visual trends for key clients',
        'Spearheaded R&D initiatives to evaluate and adopt emerging web technologies, directly enriching the company\'s service offerings and technology stack',
        'Optimized project delivery workflows by implementing rigorous scheduling and task tracking using Jira and GitHub Project, ensuring alignment with agile timelines'
      ]
    },
    {
      id: 3,
      title: 'Web Application Developer',
      company: 'Iclickmedia',
      location: 'Singapore',
      period: 'September 2015 — June 2017',
      achievements: [
        'Designed and implemented complex API integrations for third-party flight and hotel booking engines, ensuring real-time data synchronization and transaction reliability using JSON and PHP',
        'Architected a revamped Content Management System (CMS) using CodeIgniter and MySQL, delivering a scalable solution that resolved critical legacy performance issues',
        'Established code quality standards by conducting rigorous code reviews and providing technical mentorship to developers, ensuring maintainability across the PHP codebase',
        'Delivered full-stack web applications meeting strict client specifications by leveraging a stack of HTML5, CSS3, jQuery, and XML'
      ]
    },
    {
      id: 4,
      title: 'Senior IT Specialist',
      company: 'PT Prima Teknologi',
      location: 'Jakarta',
      period: 'December 2010 — July 2014',
      achievements: [
        'Spearheaded the digital transformation of internal workflows by developing a web-based authorization system, which eliminated paper usage and boosted employee operational efficiency by 50%',
        'Delivered high-impact web and mobile landing pages for major telecommunication clients (Indosat, XL), directly contributing to digital campaigns that generated over 70% of the company\'s annual profit',
        'Led the cross-border development of an enterprise mobile application for XL Axiata using IBM Worklight and PhoneGap, successfully coordinating with Huawei teams in China to meet strict deadlines',
        'Engineered high-traffic UMB and SMS location-based service applications, driving increased user engagement and revenue for telecom operators'
      ]
    },
    {
      id: 5,
      title: 'Web Developer',
      company: 'PT Doxadigital',
      location: 'Jakarta',
      period: 'January 2009 — August 2010',
      achievements: [
        'Create and analyze web-based data required by the client',
        'Develop web based on clients requirement'
      ]
    }
  ],
  education: [
    {
      id: 1,
      degree: 'Msc Information System',
      institution: 'Nanyang Technological University',
      location: 'Singapore',
      period: 'July 2014 — July 2015',
      details: [
        'Expand knowledge in project management, architect an information system, human computer interaction, enterprise and internet programming skill',
        'Graduated with grade: 4.0/5.0'
      ]
    },
    {
      id: 2,
      degree: 'Bachelor of Computer Science',
      institution: 'BINUS University',
      location: 'Jakarta',
      period: 'July 2005 — July 2009',
      details: [
        'Activities and societies: BNCC(Bina Nusantara Computer Club), HIMTI',
        'Graduated with high merit'
      ]
    }
  ],
  activeSection: 'about'
};

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    }
  }
});

export const { setActiveSection } = portfolioSlice.actions;

export const selectProfile = (state) => state.portfolio.profile;
export const selectCompetencies = (state) => state.portfolio.competencies;
export const selectSkills = (state) => state.portfolio.skills;
export const selectExperience = (state) => state.portfolio.experience;
export const selectEducation = (state) => state.portfolio.education;
export const selectActiveSection = (state) => state.portfolio.activeSection;

export default portfolioSlice.reducer;
