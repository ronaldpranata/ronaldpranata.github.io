import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: {
    name: 'Ronald Pranata Kurniawan',
    title: 'Senior Software Engineer | Singapore PR',
    location: 'Singapore',
    phone: '86463025',
    email: 'ronald_pranata@yahoo.co.id',
    linkedin: 'https://www.linkedin.com/in/ronaldpranata',
    website: 'https://ronaldpranata.com',
    summary: '**Senior Software Engineer** with 15+ years of experience in enterprise application development. **Subject Matter Expert in Front-End Development** (Vue.js, Nuxt) and **Proficient in React Ecosystem** (React.js, Next.js, React Native), with **strong proficiency in Backend Architecture (Java Spring Boot, PHP, Node.js)**. Expert in integrating complex backend services with responsive, high-performance interfaces. Specialized in building secure, high-availability systems for the Finance and Digital Media sectors, with recent innovations in **Generative AI integration**. Proven track record in Technical Leadership, DevOps (CI/CD), and delivering large-scale digital transformation projects.'
  },
  competencies: [
    {
      title: 'Frontend Architecture (Expert)',
      description: 'Vue.js, Nuxt.js, State Management (Pinia/Redux)'
    },
    {
      title: 'Frontend Frameworks (Proficient)',
      description: 'React, Next.js, React Native, TypeScript'
    },
    {
      title: 'Backend Integration (Proficient)',
      description: 'Java Spring Boot, PHP, Node.js, RESTful API Design'
    },
    {
      title: 'AI & Innovation',
      description: 'Google Gemini API, OpenAI Integration & Generative Content Workflows'
    },
    {
      title: 'DevOps & Cloud',
      description: 'CI/CD (GitHub Actions), Docker, AWS, GCP & Scalable Deployment'
    },
    {
      title: 'Technical Leadership',
      description: 'Code Reviews, System Design, Mentorship & Quality Assurance'
    },
    {
      title: 'Agile Methodology',
      description: 'Scrum, Jira, User Story Mapping & Cross-Functional Collaboration'
    }
  ],
  skills: [
    { category: 'Frontend (Expert)', items: ['Vue.js', 'Nuxt.js (Composition API)', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Sass'] },
    { category: 'Frontend (Proficient)', items: ['React.js', 'Next.js', 'React Native', 'Material-UI', 'Tailwind CSS', 'Bootstrap', 'D3.js'] },
    { category: 'Backend & API (Proficient)', items: ['Java Spring Boot', 'PHP', 'Node.js', 'NestJS', 'RESTful API', 'GraphQL', 'MySQL'] },
    { category: 'AI & Emerging Tech', items: ['Google Gemini API', 'OpenAI API', 'ComfyUI', 'Stable Diffusion'] },
    { category: 'DevOps', items: ['Git', 'GitHub Actions', 'Docker', 'AWS', 'GCP', 'Linux'] }
  ],
  experience: [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Dentsu',
      location: 'Singapore',
      period: 'May 2021 — Present',
      achievements: [
        {
          title: 'Enterprise Platform Leadership (FWD & Prudential):',
          subItems: [
            '**FWD Insurance:** Delivered critical platform enhancements achieving a **90% referral rate** by architecting a high-performance, secure, and user-centric digital experience.',
            '**Prudential:** Engineered a specialized **internal logic engine using optimized Vanilla JavaScript**, implementing complex calculation algorithms without external dependencies for maximum performance.'
          ]
        },
        {
          text: '**Full-Stack Architecture:** Crafted an award-winning digital ecosystem using a robust stack of **Java Spring Boot** integrated with modern frontend framework such as Vue and Nuxt.'
        },
        {
          text: '**AI & Generative Content Innovation:** Architected an **AI-powered storytelling platform** using **Nuxt 4 and Google Gemini**, integrating Generative AI tools to automate high-throughput video rendering and content generation.'
        },
        {
          text: '**Modern UI Architecture:** Applied deep expertise in component-based architecture (Vue/Nuxt) to drive development standards, while leveraging **React.js and Material-UI** for specific client modules to ensure cross-platform compatibility.'
        },
        {
          text: '**DevOps & CI/CD:** Streamlined deployment workflows by architecting automated CI/CD pipelines using **GitHub Actions and Docker**, significantly reducing deployment time and error rates.'
        }
      ]
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'Dentsu (formerly Isobar)',
      location: 'Singapore',
      period: 'June 2017 — May 2021',
      achievements: [
        {
          text: '**Banking Sector Experience (OCBC Bank):** Developed a high-precision financial calculator and banking microsite, ensuring 100% accuracy in complex financial logic and compliance with strict banking security standards.'
        },
        {
          text: '**Data Visualization & Dashboarding:** Developed data-driven customer intelligence portals using JavaScript libraries (D3.js, Chart.js), transforming complex datasets into actionable visual trends.'
        },
        {
          text: '**API Integration & Automation:** Engineered custom resource management ecosystems by integrating third-party APIs to automate project tracking, aligning with RESTful API best practices.'
        },
        {
          text: '**Project Delivery:** Optimized workflows using Jira and Git for version control, ensuring alignment with agile timelines and strict code quality standards.'
        }
      ]
    },
    {
      id: 3,
      title: 'Web Application Developer',
      company: 'Iclickmedia',
      location: 'Singapore',
      period: 'September 2015 — June 2017',
      achievements: [
        {
          text: '**Third-Party API Integration:** Designed complex API integrations for booking engines, ensuring real-time data synchronization and transaction reliability—skills directly transferable to financial transaction handling.'
        },
        {
          text: '**Frontend & CMS Development:** Delivered full-stack web applications meeting strict client specifications using PHP, MySQL, CodeIgniter, HTML5, CSS3, and JavaScript, ensuring maintainability and performance.'
        }
      ]
    },
    {
      id: 4,
      title: 'Senior IT Specialist',
      company: 'PT Prima Teknologi',
      location: 'Jakarta',
      period: 'December 2010 — July 2014',
      achievements: [
        {
          text: '**Digital Transformation:** Spearheaded the development of a web-based authorization system using **HTML/CSS and JavaScript**, which improved operational efficiency by 50% and eliminated paper-based workflows.'
        },
        {
          text: '**High-Impact Web Development:** Delivered responsive web and mobile landing pages for major telecom clients (Indosat, XL), directly contributing to digital campaigns that generated **70% of the company\'s annual profit**.'
        },
        {
          text: '**Cross-Border Leadership:** Led the end-to-end development of enterprise mobile applications, successfully managing coordination between local teams and external partners (Huawei, China) to meet strict deadlines.'
        },
        {
          text: '**High-Volume System Design:** Engineered high-traffic location-based service applications, ensuring system stability and performance under heavy user loads.'
        }
      ]
    },
    {
      id: 5,
      title: 'Web Developer',
      company: 'PT Doxadigital',
      location: 'Jakarta',
      period: 'January 2009 — August 2010',
      achievements: [
        {
          text: '**Client-Centric Development:** Analyzed business requirements to design and deploy custom web solutions using **PHP and MySQL**, ensuring alignment with client goals.'
        },
        {
          text: '**Full Lifecycle Delivery:** Managed the complete software development lifecycle (SDLC) for various web portals, consistently meeting delivery timelines.'
        }
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
        'Specialized in Enterprise Architecture, Human-Computer Interaction (HCI), and Internet Programming.',
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
  projects: [
    {
      id: 1,
      name: 'FWD Insurance',
      description: 'A comprehensive digital insurance platform designed to simplify policy management and claims processing. The application features a user-friendly interface for browsing insurance products, getting quotes, and managing accounts.',
      techStack: ['Vue.js', 'Vuex', 'JavaScript','Nuxt.js', 'Material UI','SCSS','Java springboot','NestJS','Docker'],
      image: '/assets/projects/fwd.png',
      link: '#',
      category: 'Web Application',
      type: 'dentsu'
    },
    {
      id: 2,
      name: 'Stock Predictor AI',
      description: 'An intelligent stock market analysis tool leveraging AI to predict market trends. Features real-time data visualization, predictive analytics, and personalized portfolio tracking.',
      techStack: ['Next.js', 'Redux', 'TypeScript', 'Material UI', 'Recharts','Vercel CI/CD'],
      image: '/assets/projects/stock-predictor.png',
      link: '#',
      category: 'FinTech',
      type: 'personal'
    },
    {
      id: 3,
      name: 'Radha (Re-ordering System)',
      description: 'A mobile-first re-ordering system designed for efficient inventory management. Streamlines the restocking process with barcode scanning, automated order generation, and real-time stock tracking.',
      techStack: ['React Native', 'Redux', 'API Integration'],
      image: '/assets/projects/radha.png',
      link: '#',
      category: 'Mobile App',
      type: 'dentsu'
    },
    {
      id: 4,
      name: 'Zespri Kiwifruit',
      description: 'A vibrant and engaging brand website for Zespri. The site showcases the health benefits of kiwifruit through rich media, interactive animations, and a responsive design that captures the brand essence.',
      techStack: ['React', 'CSS Modules',  'Webpack'],
      image: '/assets/projects/zespri.png',
      link: '#',
      category: 'Brand Website',
      type: 'dentsu'
    },
    {
      id: 5,
      name: 'ESR',
      description: 'Official corporate website for ESR, APAC’s largest real asset manager powered by the New Economy. Built on WordPress to ensure scalability and ease of content management for a large-scale enterprise.',
      techStack: ['WordPress', 'PHP', 'jQuery', 'Bootstrap','Azure'],
      image: '/assets/projects/esr.png',
      link: 'https://www.esr.com/',
      category: 'Corporate Website',
      type: 'dentsu'
    },
    {
      id: 6,
      name: 'CemaraSoft Enterprise Website',
      description: 'Corporate website for CemaraSoft, an Odoo and SAP consulting partner. Built as a modern marketing site with clear service offerings, step-by-step implementation process, and strong calls-to-action for enterprise clients.',
      techStack: ['React', 'Next.js', 'WordPress', 'Github Actions CI/CD'],
      image: '/assets/projects/cemarasoft.png',
      link: 'https://cemarasoft.com/',
      category: 'Corporate Website',
      type: 'personal'
    },
    {
      id: 7,
      name: 'Prudential Performance Measurement',
      description: 'A specialized internal logic engine using optimized Vanilla JavaScript, implementing complex calculation algorithms without external dependencies for maximum performance in performance measurement.',
      techStack: ['Vanilla JavaScript', 'HTML5', 'CSS3'],
      image: '/assets/projects/prudential.png',
      link: '#',
      category: 'Internal Tool',
      type: 'dentsu'
    },
    {
      id: 8,
      name: 'OCBC Bank & StarHub',
      description: 'A banking microsite developed for an OCBC Bank and StarHub collaboration, extending specially curated offers to customers.',
      techStack: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery','Jenkins CI/CD'],
      image: '/assets/projects/ocbc.png',
      link: '#',
      category: 'Microsite',
      type: 'dentsu'
    },
    {
      id: 9,
      name: 'Mastercard Easy Savings Specials',
      description: 'A promotional microsite featuring an interactive quiz to test knowledge about Easy Savings Specials and stand a chance to win e-vouchers for Business Mastercard cardholders.',
      techStack: ['JavaScript', 'HTML5', 'CSS3', 'Vue.js', 'NuxtJS','Azure', 'Github Actions CI/CD'],
      image: '/assets/projects/mastercard.png',
      link: '#',
      category: 'Microsite',
      type: 'dentsu'
    },
    {
      id: 10,
      name: 'ASEAN Coca Cola Redemption Cap Code campaign',
      description: 'A web application for the Coca Cola cap code redemption campaign, allowing users to redeem codes for prizes at Coca Cola Thailand, Myanmar, Indonesia, Malaysia, Vietnam, Philiphines and Singapore.',
      techStack: ['Vue.js', 'NuxtJS', 'Java Spring Boot', 'AWS', 'Github Actions CI/CD'],
      image: '/assets/projects/coca-cola.png',
      link: '#',
      category: 'Campaign',
      type: 'dentsu'
    },
    {
      id: 11,
      name: 'Call of Duty Poster Generator',
      description: 'A campaign system using a reliable BullMQ queue for high-throughput processing and integrated AI poster generation capabilities.',
      techStack: ['NestJS', 'Node.js', 'Vue.js', 'NuxtJS', 'Azure', 'BullMQ', 'Github Actions CI/CD'],
      image: '/assets/projects/cod-poster.png',
      link: '#',
      category: 'Campaign AI',
      type: 'dentsu'
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
export const selectProjects = (state) => state.portfolio.projects;
export const selectActiveSection = (state) => state.portfolio.activeSection;

export default portfolioSlice.reducer;
