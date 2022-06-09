import React from "react";
import { ProgressBar } from "react-bootstrap";
import "./Skill.css";
const Skill = () => {
    return (
        <section id="skill">
            <div className="container">
                <h2 className="section-title">Skill</h2>
                <div className="spacer" data-height="60"></div>
                <div className="row">
                    <div className="col-md-6 pe-md-5">
                        {/* <!-- skill item --> */}
                        <div className="skill-item">
                            <div className="skill-info clearfix">
                                <h4 className="float-left mb-3 mt-0">HTML</h4>
                                <span className="float-right">85%</span>
                            </div>
                            <ProgressBar variant="warning" now={85} />
                            <div className="spacer-20"></div>
                        </div>
                        {/* <!-- skill item --> */}
                        <div className="skill-item">
                            <div className="skill-info clearfix">
                                <h4 className="float-left mb-3 mt-0">
                                    Bootstrap
                                </h4>
                                <span className="float-right">95%</span>
                            </div>
                            <ProgressBar variant="info" now={95} />
                            <div className="spacer-20"></div>
                        </div>
                        {/* <!-- skill item --> */}
                        <div className="skill-item">
                            <div className="skill-info clearfix">
                                <h4 className="float-left mb-3 mt-0">
                                    Express JS
                                </h4>
                                <span className="float-right">50%</span>
                            </div>
                            <ProgressBar variant="success" now={50} />
                        </div>
                    </div>
                    <div className="col-md-6 ps-md-5">
                        <div className="skill-item">
                            <div className="skill-info clearfix">
                                <h4 className="float-left mb-3 mt-0">CSS</h4>
                                <span className="float-right">70%</span>
                            </div>
                            <ProgressBar variant="warning" now={70} />
                            <div className="spacer-20"></div>
                        </div>
                        {/* <!-- skill item --> */}
                        <div className="skill-item">
                            <div className="skill-info clearfix">
                                <h4 className="float-left mb-3 mt-0">
                                    React JS
                                </h4>
                                <span className="float-right">60%</span>
                            </div>
                            <ProgressBar variant="info" now={60} />
                            <div className="spacer-20"></div>
                        </div>
                        {/* <!-- skill item --> */}
                        <div className="skill-item">
                            <div className="skill-info clearfix">
                                <h4 className="float-left mb-3 mt-0">
                                    MongoDB
                                </h4>
                                <span className="float-right">73%</span>
                            </div>
                            <ProgressBar variant="success" now={73} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;
