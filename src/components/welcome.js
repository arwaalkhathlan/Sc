import React from 'react';
import Button from 'react-bootstrap/Button';
import welcomeimg from '../assets/welcomeimg.jpg';

const Welcome = () => {
  return (
    <div className='container mt-5 p-5' >
      <div className='row'>
        <div className='col-md-6 my-auto mx-auto'>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>
            Striving to bridge the feedback gap
          </h1>
          <h3 style={{ fontSize: '1.25rem', color: '#555' }}>
            After each course chapter, seamlessly upload your project for expert review, ensuring
            constructive feedback that enhances your learning journey. Elevate your certifications.
          </h3>
          <div>
            <Button className='welcome-btn m-2 rounded-3'>Get Started now</Button>
          </div>
        </div>

        <div className='col-md-6 '>
          <img className='img-fluid rounded-5' src={welcomeimg} alt='welcomeimg' />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
