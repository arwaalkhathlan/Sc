import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const NavbarButtons = () => {


  const handleLogin = () => {
    console.log('Login button clicked');
  };

  const handleSignUp = () => {
    console.log('Sign Up button clicked');
  };

  return (
    <div>
      <Link to="/myCourses">
      <Button className='btn-login ' >
        Log In
      </Button>
      </Link>


        <Button className='btn-2 rounded-3' onClick={handleSignUp}>
          Sign Up
        </Button>

    </div>
  );
};

export default NavbarButtons;
