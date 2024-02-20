import React from 'react';
import Button from 'react-bootstrap/Button';

const NavbarButtons = () => {
  const handleLogin = () => {
    console.log('Login button clicked');
  };

  const handleSignUp = () => {
    console.log('Sign Up button clicked');
  };

  return (
    <div>
      <Button className='btn-login ' onClick={handleLogin}>
        Log In
      </Button>

      <Button className='btn-2 rounded-3' onClick={handleSignUp}>
        Sign Up
      </Button>
    </div>
  );
};

export default NavbarButtons;
