import React from 'react';
import '../css/index.css';
import {Button} from 'react-bootstrap';

const HiwSection = () => {
  return (
    <div className='d-flex align-items-center justify-content-center mt-5'>
      <div className='text-center'>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333' }}>
          How it works
        </h1>

        <p style={{ fontSize: '1.2rem', color: '#555'}}>
          Experience seamless interaction, Register and select your course, then
          effortlessly submit your work for expert review. Our dedicated
          volunteers ensure high-quality feedback, earning recognition on the
          national volunteer portal.
        </p>

        <div className="container mb-5 w-50">
          <div className="row">
            <div className="col-md-6 my-1  text-md-end " >  <Button className='hiw-btn' >Register</Button> </div>
            <div className="col-md-6 my-1 text-md-start ">  <Button className='hiw-btn' >Submit</Button></div>
            <div className="col-md-6 my-1 text-md-end ">  <Button className='hiw-btn' >Review</Button></div>
            <div className="col-md-6 my-1 text-md-start ">  <Button className='hiw-btn'>Volunteer Recognition</Button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiwSection;
