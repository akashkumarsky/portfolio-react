import React from 'react'
import './Hero.css'
import profile_pic from '../../assets/profile_pic.jpg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_pic} alt='Profile' />
        <h1><span>Hi, I'm Akash kumar,</span> Java Full Stack Developer Based In Bengalore India.</h1>
        <p>I specialize in building high-quality websites and applications. Get in touch with me.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect With Me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero