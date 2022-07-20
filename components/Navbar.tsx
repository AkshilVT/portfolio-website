import React from 'react';

function Navbar() {
  return (
    <nav className='w-full flex justify-center space-x-5'>
      <a href='#' className='nav-link'>
        Projects
      </a>
      <a href='#' className='nav-link'>
        Tech Stack
      </a>
      <a href='#' className='nav-link'>
        Education
      </a>
      <a href='#' className='nav-link'>
        Contact Me
      </a>
    </nav>
  );
}

export default Navbar;
