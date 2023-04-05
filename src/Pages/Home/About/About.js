import React from "react";
import "./About.css";
import avt from "../../../images/avatar-2.svg";
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
                                I am G.M. Zesan, web developer from Dhaka,
                                Bangladesh. I have rich experience in web site
                                design and building and customization, also I am
                                good at React. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Rem fugit
                                excepturi quae animi neque commodi. Officia,
                                voluptatem? Magni, totam voluptas.
                            </p>
                            <div className="mt-3">
                                <a
                                    href="https://drive.google.com/file/d/1UPCsj2LD8uN2YDg0eegKfjDWqyRNRz2c/view"
                                    className="btn btn-default"
                                >
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center text-md-right">
                            <img src={avt} alt="omor" className="me" />
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
