import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div id='main'>
      <Navbar/>
      <div className="name">
        <h1><span>Launch your app</span> With your Creativity.</h1>
        <p className="details">Lorem ipsum dolor, sit amet consectetur adipisicing elit,
         Repudiandae.</p>
         <a href='#' className='cv-btn'>Download</a>
      </div>
    </div>
  )
}

export default Header
