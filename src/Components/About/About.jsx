import React from 'react';
import './About.css';
import profile_pic from '../../assets/profile_pic.jpg';
import CountUp from 'react-countup'; // Import CountUp

const About = () => {

    // A cleaner way to manage skills data
    const skillsData = [
        { name: 'Java', level: '85%' },
        { name: 'SpringBoot 3', level: '80%' },
        { name: 'Postman', level: '80%' },
        { name: 'Spring', level: '70%' },
        { name: 'Hibernate', level: '65%' },
        { name: 'Tailwind CSS', level: '60%' },
        { name: 'HTML & CSS', level: '60%' },
        { name: 'Git & Github', level: '60%' },
        { name: 'Database (SQL)', level: '50%' },
        { name: 'React JS', level: '40%' },
    ];

    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
            </div>

            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_pic} alt="Profile" className="about-profile-img" />
                </div>

                <div className="about-right">
                    <div className="about-para">
                        <p>Hi, I'm Akash Kumar, a passionate Java Full Stack Developer with a strong foundation in Spring Boot, Microservices, Hibernate, SQL, and React.</p>
                        <p>I graduated in 2023 with a degree in Computer Science Engineering (CSE) and have been dedicated to building scalable, high-performance web applications ever since.</p>
                        <p>I thrive on turning complex problems into elegant solutions and continuously seek to expand my skill set in the ever-evolving world of technology.</p>
                    </div>

                    <div className="about-skills">
                        {skillsData.map((skill, index) => (
                            <div key={index} className="about-skill">
                                <p>{skill.name}</p>
                                <div className="skill-bar">
                                    <div className="skill-level" style={{ '--skill-level': skill.level }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="about-achievements">
                <div className="about-achievement">
                    {/* Animated counter */}
                    <h1>
                        <CountUp end={3} duration={3} enableScrollSpy scrollSpyDelay={500} />+
                    </h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <div className="about-achievement">
                    {/* Animated counter */}
                    <h1>
                        <CountUp end={7} duration={3} enableScrollSpy scrollSpyDelay={500} />+
                    </h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
            </div>
        </div>
    );
}

export default About;