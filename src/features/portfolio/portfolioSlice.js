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
    summary: '**Senior Software Engineer** with 15+ years of experience in enterprise application development. **Subject Matter Expert in Front-End Development** (Vue.js, Nuxt) with **strong proficiency in Backend Architecture (Java Spring Boot, PHP, Node.js)**. Expert in integrating complex backend services with responsive, high-performance interfaces. Specialized in building secure, high-availability systems for the Finance and Digital Media sectors, with recent innovations in **Generative AI integration**. Proven track record in Technical Leadership, DevOps (CI/CD), and delivering large-scale digital transformation projects.'
  },
  competencies: [
    {
      title: 'Frontend Architecture (Expert)',
      description: 'Vue.js, Nuxt.js, State Management (Pinia/Redux)'
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
