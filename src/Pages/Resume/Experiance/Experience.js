import React from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import "./Experience.css";
import icon from "../../../images/projects/icons8-graduation-cap-50.png";
const Experience = () => {
    return (
        <section id="experience">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="spacer" data-height="60"></div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="timeline edu padding-30">
                            <h2 className="sub-title">Academic</h2>
                            <div className="timeline-container">
                                <div className="content">
                                    <img src={icon}></img>
                                    <span className="time">2021 - Running</span>
                                    <h3 className="title">Bachelor’s Degree</h3>
                                    <p>
                                        Bachelor is running(First Year) in Green
                                        University of Bangladesh. Department is
                                        CSE.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-container">
                                <div className="content">
                                    <img src={icon}></img>
                                    <span className="time">2016 - 2020</span>
                                    <h3 className="title">Diploma</h3>
                                    <p>
                                        Diploma has completed from Faridpur
                                        Polytechnic Institute. CGPA : 3.69
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-container">
                                <div className="content">
                                    <img src={icon}></img>
                                    <span className="time">2015 - 2016</span>
                                    <h3 className="title">SSC</h3>
                                    <p>
                                        I have done my SSC from Torkey Bandar
                                        Victory High School, Gouranadi, Barisal.
                                    </p>
                                </div>
                            </div>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div
                            className="spacer d-md-none d-lg-none"
                            data-height="30"
                        ></div>
                        <div className="timeline exp padding-30">
                            <h2 className="sub-title">Skill log</h2>
                            <div className="timeline-container">
                                <div className="content">
                                    <img src={icon}></img>
                                    <span className="time">2022 - Running</span>
                                    <h3 className="title">React & Express</h3>
                                    <p>
                                        I am running to MERN stack Developer. I
                                        start my learning from Complete Web
                                        Development Course With Jhankar Mahbub.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-container">
                                <div className="content">
                                    <img src={icon}></img>
                                    <span className="time">2018 - 2019</span>
                                    <h3 className="title">PHP(OOP)</h3>
                                    <p>
                                        I had taken some ideas about PHP (OOP)
                                        from a course at Doel Campus. Then I was
                                        in polytechnic.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-container">
                                <div className="content">
                                    <img src={icon}></img>
                                    <span className="time">2017-2018</span>
                                    <h3 className="title">HTML & CSS</h3>
                                    <p>
                                        I learnt HTML & CSS from different
                                        resourses.
                                    </p>
                                </div>
                            </div>
                            <span className="line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
