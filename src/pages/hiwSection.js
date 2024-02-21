
import React from 'react';
import Hiw from '../assets/welcomeimg.jpg';

const HiwSection = () => {
    return (
        <div className='container mt-5 p-5' >
      <div className='row'>
      <div className='col-md-6 '>
          <img className='img-fluid rounded-5' src={Hiw} alt='Hiw' />
        </div>
        </div>
        </div>
        
    );
};

export default HiwSection;
