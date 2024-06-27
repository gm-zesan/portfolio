import React from "react";
import profile from "../../../images/profile.jpg";
import "./About.css";
const About = () => {
    return (
        <section id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="spacer"></div>
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <div className="black-box padding-30">
                            <p>
                                Welcome to my portfolio! I am G.M. Zesan, full-stack developer with expertise in the MERN stack (MongoDB, Express.js, React, and Node.js) and PHP with Laravel. I specialize in creating dynamic, scalable web applications and have a passion for building seamless user experiences. With a strong foundation in both frontend and backend technologies, I thrive on solving complex problems and bringing innovative ideas to life.
                            </p>
                            <div className="mt-3">
                                <a
                                    href="https://drive.google.com/file/d/1Fk8aMyUckRzgd4NyXDPiKfXlH0KP5W4m/view"
                                    className="btn btn-default"
                                >
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center text-md-right">
                            <img src={profile} alt="omor" className="me" />
                        </div>
                        <div
                            className="spacer d-md-none d-lg-none"
                            data-height="30"
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
