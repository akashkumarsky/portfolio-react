import React from 'react'
import './Hero.css'
import profile_pic from '../../assets/profile_pic.jpg'
import resume from '../../assets/resume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_pic} alt='Profile' />
        <h1><span>Hi, I'm Akash kumar,</span> Java Full Stack Developer Based In Bengalore India.</h1>
        <p>I specialize in building high-quality websites and applications. Get in touch with me.</p>
        <div className="hero-action">
            <div className="hero-connect" onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}>Connect With Me</div>
            <button className="hero-resume" onClick={() => {
                window.open(resume, '_blank');
            }}>My Resume</button>
        </div>
    </div>
  )
}

export default Hero