import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "./Hero";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import m3 from "../../images/projects/3.png";
import m2 from "../../images/projects/2.png";
import m4 from "../../images/projects/4.png";
import Project from "../Home/Portfolio/project";
import "./ProjectDetails.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowBackIos style={{ color: "#353353", fontSize: "25px" }} />
        </div>
    );
};
const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowForwardIos style={{ color: "#353353", fontSize: "25px" }} />
        </div>
    );
};
const ProjectDetails = () => {
    const { projectId } = useParams();
    const [project] = useState(Project);
    const pro = project.find((project) => project.id === parseInt(projectId));
    return (
        <>
            <Hero name={pro.name}></Hero>
            <section>
                <div className="container">
                    <h1 className="text-center mb-5">Project Details</h1>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="testimonial mx-auto">
                                <Slider
                                    prevArrow={<PreviousBtn />}
                                    nextArrow={<NextBtn />}
                                    dots
                                    autoplay
                                >
                                    <div className="single-testimonial">
                                        <img src={m4} alt="" />
                                    </div>
                                    <div className="single-testimonial">
                                        <img src={m2} alt="" />
                                    </div>
                                    <div className="single-testimonial">
                                        <img src={m3} alt="" />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="tab">
                                <h2>{pro.name}</h2>
                                <p
                                    style={{
                                        color: "#FFD15C",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Full stack website
                                </p>
                                <h4>This project is created with</h4>
                                <ul>
                                    <li>React</li>
                                    <li>Bootstrap</li>
                                    <li>Express</li>
                                    <li>MongoDB</li>
                                </ul>
                                <div>
                                    {(pro.livewebsite ||
                                        pro.gitclient ||
                                        pro.gitserver ||
                                        pro.gitlink) && <h4>Link </h4>}

                                    {pro.livewebsite && (
                                        <a
                                            className="btn btn-default me-3"
                                            href={pro.livewebsite}
                                        >
                                            View Website
                                        </a>
                                    )}
                                    {pro.gitlink && (
                                        <a
                                            className="btn btn-default me-3"
                                            href={pro.gitlink}
                                        >
                                            Git Link
                                        </a>
                                    )}

                                    {pro.gitclient && (
                                        <a
                                            className="btn btn-default"
                                            href={pro.gitclient}
                                        >
                                            Github client repository
                                        </a>
                                    )}
                                    {pro.gitserver && (
                                        <a
                                            className="btn btn-default mt-2"
                                            href={pro.gitserver}
                                        >
                                            Github server repository
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="black-box mt-5 p-5">
                        <h2
                            className="mb-5 text-center sub-title-kn"
                            style={{ color: "#fff" }}
                        >
                            All Details
                        </h2>
                        <div className="row justify-content-between align-items-center">
                            <div className="col-sm-6">
                                <ul>
                                    <li>Role play(Admin and user)</li>
                                    <li>Product Post, Get, Delete.</li>
                                    <li>
                                        Minimum product quantity should order.
                                    </li>
                                    <li>user can update his/her profile.</li>
                                    <li>Jwt has used.</li>
                                    <li>Payment system using card(Stripe).</li>
                                    <li>
                                        Authentication(email-password,Google).
                                    </li>
                                    <li>
                                        Authentication(email-validation, reset
                                        password).
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <ul>
                                    <li>
                                        For this project I use :
                                        <ul>
                                            <li>bootstrap</li>
                                            <li>react-bootstrap</li>
                                            <li>firebase</li>
                                            <li>react-route,protected-route</li>
                                            <li>hot-toast</li>
                                            <li>stripe</li>
                                            <li>axios</li>
                                            <li>stripe</li>
                                            <li>react firebase hook</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="spacer"></div>
            </section>
        </>
    );
};

export default ProjectDetails;
