import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <div className="breadcrumb-section section-bg position-relative">
            <div className="breadcrumb-shape-top-left"></div>
            <div className="breadcrumb-shape-bottom-right"></div>
            <div className="breadcrumb-box">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-content text-center">
                                <h2 className="title">Contact Me</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb breadcrumb-link">
                                        <li className="breadcrumb-item">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li
                                            className="breadcrumb-item active"
                                            aria-current="page"
                                        >
                                            Contact
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
