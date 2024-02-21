import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mt-5 p-5">
    <div className='row'>
    
    <div className='col-md-6 my-auto mx-auto text-center'>
        <h2>Contact Us</h2>
        <p>need to get in touch fill out the form with your inquire:</p>
    </div>
    <div className='col-md-6'>
    <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name:*</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>


        <Form.Group controlId="Last Name">
          <Form.Label>Last Name:*</Form.Label>
          <Form.Control
            type="text"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email:*</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Label>What can we help you with:</Form.Label>
          <Form.Control
            as="textarea"
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>


        <Button className='second-btn mt-3' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
    
    
    
    
    </div>

      
    </div>
  );
};

export default ContactUs;
