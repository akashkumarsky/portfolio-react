import React from 'react';
import './MyWork.css';
import { mywork_data } from '../../assets/mywork_data';
// Import both FaGithub and FaLink icons
import { FaGithub, FaLink } from "react-icons/fa";

const MyWork = () => {
    return (
        <div id='projects' className="mywork">
            <div className="mywork-title">
                <h1>My Latest Projects</h1>
            </div>
            <div className="mywork-container">
                {mywork_data.map((work) => (
                    <div key={work.w_id} className="work-card">
                        <img src={work.w_img} alt={work.w_title} className="work-card-image" />
                        <div className="work-card-overlay">
                            <h3>{work.w_title}</h3>
                            <p>{work.w_description}</p>
                            {/* Container for both links */}
                            <div className="work-card-links">
                                <a href={work.w_github} target="_blank" rel="noopener noreferrer" className="work-card-link" aria-label={`View ${work.w_title} on GitHub`}>
                                    <FaGithub size="2em" />
                                </a>
                                {/* Conditionally render this link only if work.w_url exists */}
                                {work.w_url && (
                                    <a href={work.w_url} target="_blank" rel="noopener noreferrer" className="work-card-link" aria-label={`View live preview of ${work.w_title}`}>
                                        <FaLink size="2em" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyWork;