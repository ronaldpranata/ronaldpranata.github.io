# Ronald Pranata Kurniawan - Portfolio Website

A professional portfolio website built with React.js and Redux, showcasing 15+ years of full-stack software engineering experience.

## Features

- **React.js** - Modern component-based UI
- **Redux Toolkit** - State management for portfolio data
- **Responsive Design** - Mobile-friendly layout
- **Interactive Navigation** - Smooth section transitions
- **Professional Sections**:
  - About & Core Competencies
  - Employment History with Timeline
  - Technical Skills by Category
  - Education Background
  - Contact Information

## Technologies Used

- React 19
- Redux Toolkit
- CSS3 with modern animations
- Create React App

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000)

### Building for Production

Create an optimized production build:
```bash
npm run build
```

The build folder will contain the production-ready files.

## Project Structure

```
portfolio-website/
├── public/
│   └── index.html
├── src/
│   ├── app/
│   │   └── store.js          # Redux store configuration
│   ├── components/
│   │   ├── Header.js         # Navigation header
│   │   ├── About.js          # About section
│   │   ├── Experience.js     # Work experience timeline
│   │   ├── Skills.js         # Technical skills
│   │   ├── Education.js      # Education background
│   │   └── Contact.js        # Contact information
│   ├── features/
│   │   └── portfolio/
│   │       └── portfolioSlice.js  # Redux slice for portfolio data
│   ├── App.js                # Main application component
│   ├── App.css               # Global styles
│   └── index.js              # Application entry point
└── package.json
```

## Redux State Management

The portfolio data is managed through Redux Toolkit with the following structure:

- **Profile**: Personal information and summary
- **Competencies**: Core competencies and expertise areas
- **Skills**: Technical skills organized by category
- **Experience**: Employment history with achievements
- **Education**: Academic background
- **Active Section**: Current navigation state

## Customization

To customize the portfolio content, edit the `initialState` in:
```
src/features/portfolio/portfolioSlice.js
```

## License

This project is created for Ronald Pranata Kurniawan's professional portfolio.

## Contact

- Email: ronald_pranata@yahoo.co.id
- Location: Singapore
- Phone: 86463025
