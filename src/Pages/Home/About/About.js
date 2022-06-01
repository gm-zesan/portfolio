import React from "react";
import "./About.css";
import avt from "../../../images/avatar-1.svg";
import {
    faThumbsUp,
    faUsers,
    faMoneyBill,
    faComputer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const About = () => {
    return (
        <section id="about">
            <div class="container">
                <h2 class="section-title wow fadeInUp">About Me</h2>
                <div class="spacer"></div>
                <div class="row align-items-center">
                    <div class="col-md-4">
                        <div class="card profile-card p-4">
                            <div class=" image d-flex flex-column justify-content-center align-items-center">
                                <img
                                    src={avt}
                                    height="100"
                                    width="100"
                                    alt=""
                                />
                                <h4 class="mt-3">G.M. Zesan</h4>
                                <span>Full Stack Developer</span>
                                <div class="gap-3 mt-5 icons d-flex">
                                    <a className="card-icon" href="/">
                                        <FontAwesomeIcon icon={faThumbsUp} />
                                    </a>
                                    <a className="card-icon" href="/">
                                        <FontAwesomeIcon icon={faUsers} />
                                    </a>
                                    <a className="card-icon" href="/">
                                        <FontAwesomeIcon icon={faMoneyBill} />
                                    </a>
                                    <a className="card-icon" href="/">
                                        <FontAwesomeIcon icon={faComputer} />
                                    </a>
                                </div>
                                {/* <div class=" px-2 rounded mt-4 date ">
                                    <span class="join">Joined May,2021</span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 triangle-left-md triangle-top-sm">
                        <div class="black-box shadow-dark padding-30">
                            <p>
                                I am G.M. Zesan, web developer from Dhaka,
                                Bangladesh. I have rich experience in web site
                                design and building and customization, also I am
                                good at React. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fugit excepturi quae animi neque commodi. Officia, voluptatem? Magni, totam voluptas.
                            </p>
                            <div class="mt-3">
                                <a href="/" class="btn btn-default">
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
