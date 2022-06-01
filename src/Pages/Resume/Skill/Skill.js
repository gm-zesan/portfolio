import React from "react";
import { ProgressBar } from "react-bootstrap";
import "./Skill.css";
const Skill = () => {
    return (
        <section id="skill">
            <div class="container">
                <h2 class="section-title">Skill</h2>
                <div class="spacer" data-height="60"></div>
                <div class="row">
                    <div class="col-md-6 pe-5">
                        {/* <!-- skill item --> */}
                        <div class="skill-item">
                            <div class="skill-info clearfix">
                                <h4 class="float-left mb-3 mt-0">
                                    Development
                                </h4>
                                <span class="float-right">85%</span>
                            </div>
                            <ProgressBar variant="warning" now={60} />
                            <div class="spacer-20"></div>
                        </div>
                        {/* <!-- skill item --> */}
                        <div class="skill-item">
                            <div class="skill-info clearfix">
                                <h4 class="float-left mb-3 mt-0">
                                    UI/UX design
                                </h4>
                                <span class="float-right">95%</span>
                            </div>
                            <ProgressBar variant="info" now={20} />
                            <div class="spacer-20"></div>
                        </div>
                        {/* <!-- skill item --> */}
                        <div class="skill-item">
                            <div class="skill-info clearfix">
                                <h4 class="float-left mb-3 mt-0">
                                    Photography
                                </h4>
                                <span class="float-right">70%</span>
                            </div>
                            <ProgressBar variant="success" now={40} />
                        </div>
                    </div>
                    <div class="col-md-6 ps-5">
                        <div class="skill-item">
                            <div class="skill-info clearfix">
                                <h4 class="float-left mb-3 mt-0">
                                    Development
                                </h4>
                                <span class="float-right">85%</span>
                            </div>
                            <ProgressBar variant="warning" now={60} />
                            <div class="spacer-20"></div>
                        </div>
                        {/* <!-- skill item --> */}
                        <div class="skill-item">
                            <div class="skill-info clearfix">
                                <h4 class="float-left mb-3 mt-0">
                                    UI/UX design
                                </h4>
                                <span class="float-right">95%</span>
                            </div>
                            <ProgressBar variant="info" now={20} />
                            <div class="spacer-20"></div>
                        </div>
                        {/* <!-- skill item --> */}
                        <div class="skill-item">
                            <div class="skill-info clearfix">
                                <h4 class="float-left mb-3 mt-0">
                                    Photography
                                </h4>
                                <span class="float-right">70%</span>
                            </div>
                            <ProgressBar variant="success" now={40} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;
