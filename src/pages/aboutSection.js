import React from 'react';
import AboutUs from '../assets/welcomeimg.jpg';

const AboutSection = () => {
    return (
        <div className='container mt-5 p-5' >
      <div className='row'>
      <div className='col-md-6 '>
          <img className='img-fluid rounded-5' src={AboutUs} alt='About us' />
        </div>


        <div className='col-md-6 my-auto mx-auto'>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>
            About Us
          </h1>
          <h3 style={{ fontSize: '1.25rem', color: '#555' }}>
            We believe online courses offer incredible potential, but they often lack the crucial feedback and engagement 
            needed to truly validate your skills. That's where we come in, After each course chapter, connect with qualified 
            volunteer experts for personalized feedback on your projects. They'll provide constructive guidance to deepen your
            understanding and propel you forward. And the best part? Completing these projects strengthens your certification credibility,
            showcasing your actively-acquired skills to potential employers.
          </h3>
        </div>

        
      </div>
    </div>
    );
};

export default AboutSection;
