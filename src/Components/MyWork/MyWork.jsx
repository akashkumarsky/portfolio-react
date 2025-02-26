import React from 'react';
import './MyWork.css';
import { mywork_data } from '../../assets/mywork_data';

const MyWork = () => {
    return (
        <div className="mywork">
            <div className="mywork-title">
                <h1>My Latest Projects</h1>
            </div>
            <div className="mywork-container">
                {mywork_data.map((work) => (
                    <div key={work.w_id} className="work-card">
                        <img src={work.w_img} alt={work.w_title} />
                        <h3>{work.w_title.length > 35 ? work.w_title.slice(0, 15) + '...' : work.w_title}</h3>
                        <p>{work.w_description.length > 60 ? work.w_description.slice(0, 60) + '...' : work.w_description}</p>
                        <a href={work.w_github} target="_blank" rel="noopener noreferrer">
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyWork;
