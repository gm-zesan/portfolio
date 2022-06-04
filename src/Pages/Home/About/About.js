import React from "react";
import "./About.css";
import avt from "../../../images/avatar-2.svg";
const About = () => {
    return (
        <section id="about">
            <div class="container">
                <h2 class="section-title">About Me</h2>
                <div class="spacer"></div>
                <div class="row align-items-center">
                    <div class="col-md-8">
                        <div class="black-box padding-30">
                            <p>
                                I am G.M. Zesan, web developer from Dhaka,
                                Bangladesh. I have rich experience in web site
                                design and building and customization, also I am
                                good at React. Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Rem fugit
                                excepturi quae animi neque commodi. Officia,
                                voluptatem? Magni, totam voluptas.
                            </p>
                            <div class="mt-3">
                                <a href="/" class="btn btn-default">
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="text-center text-md-right">
                            <img src={avt} alt="omor" className="me"/>
                        </div>
                        <div
                            class="spacer d-md-none d-lg-none"
                            data-height="30"
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
