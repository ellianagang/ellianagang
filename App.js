import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import PortfolioItem from './PortfolioItem';
import Footer from './Footer';
import Resume from './Resume';
import '../index.css';

const App = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'Description of project one.',
      link: '#',
    },
    {
      title: 'Project Two',
      description: 'Description of project two.',
      link: '#',
    },
    {
      title: 'Project Three',
      description: 'Description of project three.',
      link: '#',
    },
  ];

  return (
    <div>
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div className="portfolio-grid" id="projects">
        {projects.map((project, index) => (
          <PortfolioItem 
            key={index} 
            title={project.title} 
            description={project.description} 
            link={project.link} 
          />
        ))}
      </div>
      <Resume /> {/* Add Resume Section here */}
      <Footer />
    </div>
  );
};

export default App;
