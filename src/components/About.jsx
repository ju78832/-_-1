import React from 'react'

function About(props) {
  return (
    <div id='about'>
        <div className="about-image">
            <img src={props.image} alt="" />
        </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Molestias quibusdam ducimus odit accusantium hic voluptatum sequi labore iure id nostrum rerum modi,
         deleniti laudantium laborum blanditiis possimus dolorum, doloremque distinctio.</p>
         <button>{props.button}</button>
      </div>
    </div>
  )
}

export default About
