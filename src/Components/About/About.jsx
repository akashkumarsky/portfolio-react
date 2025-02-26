import React from 'react'
import './About.css'
import demo from '../../assets/demo.gif'
import profile_pic from '../../assets/profile_pic.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={demo} alt="" /> 
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_pic} alt="" />
            </div>
        
        <div className="about-right">
            <div className="about-para">
                <p>Hi, I'm Akash Kumar, a passionate Java Full Stack Developer with a strong foundation in Spring Boot, Microservices, Hibernate, SQL, and React.</p>
                <p>I graduated in 2023 with a degree in Computer Science Engineering (CSE) and have been dedicated to building scalable, high-performance web applications ever since.
                </p>
                <p>With hands-on experience in Spring Boot and Microservices architecture, I have developed and deployed projects that integrate various technologies, including MongoDB, MySQL, PostgreSQL, and Docker. I also enjoy working with frontend technologies like React, ensuring seamless user experiences.</p>
            </div>
            <div className="about-sklls">
                <div className="about-skill"><p>SpringBoot 3 </p> <hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>Spring </p> <hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Hibernate </p> <hr style={{width:"65%"}} /></div>
                <div className="about-skill"><p>Java </p> <hr style={{width:"85%"}} /></div>
                <div className="about-skill"><p>React JS </p> <hr style={{width:"40%"}} /></div>
                <div className="about-skill"><p>tilwind css </p> <hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>HTML & CSS </p> <hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Database </p> <hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Git & Github </p> <hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>PostMan </p> <hr style={{width:"80%"}} /></div>
            </div>
        </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3+</h1>
                <p>years of Hands-on experience</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>7+</h1>
                <p>Projects Completed</p>
            </div>
           
        </div>
        
       
    </div>
  )
}

export default About