import React from 'react'
import './Hero.css'
import profile_pic from '../../assets/profile_pic.jpg'
import resume from '../../assets/akash_resume_sept'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_pic} alt='Profile portrait of Akash Kumar' className="hero-profile-img" />
      <h1><span>Hi, I'm Akash Kumar,</span> a Java Full Stack Developer based in Bengaluru.</h1>
      <p>I specialize in building scalable, high-performance web applications with a passion for elegant design and seamless user experiences.</p>
      <div className="hero-action">
        {/* Using an AnchorLink for smooth scrolling */}
        <AnchorLink className='hero-connect' href='#contact'>Connect With Me</AnchorLink>

        {/* This is now a proper link, which is better for a resume download */}
        <a className="hero-resume" href={akash_resume_sept} download="akash_resume_sept.pdf">My Resume</a>
      </div>
    </div>
  )
}

export default Hero