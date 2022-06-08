import React from "react";
import "./Experience.css";
const Experience = () => {
    return (
        <section id="experience">
            <div class="container">
                {/* <!-- section title --> */}
                <h2 class="section-title">Experience</h2>
                <div class="spacer" data-height="60"></div>
                <div class="row">
                    <div class="col-md-6">
                        {/* <!-- timeline wrapper --> */}
                        <div class="timeline edu padding-30">
                            {/* <!-- timeline item --> */}
                            <h2 className="sub-title">Education</h2>
                            <div class="timeline-container">
                                <div class="content">
                                    <span class="time">2019 - Present</span>
                                    <h3 class="title">Academic Degree</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet quo ei simul
                                        congue exerci ad nec admodum perfecto.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- timeline item --> */}
                            <div
                                class="timeline-container"
                                data-wow-delay="0.2s"
                            >
                                <div class="content">
                                    <span class="time">2017 - 2013</span>
                                    <h3 class="title">Bachelor’s Degree</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet quo ei simul
                                        congue exerci ad nec admodum perfecto.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- timeline item --> */}
                            <div
                                class="timeline-container"
                                data-wow-delay="0.4s"
                            >
                                <div class="content">
                                    <span class="time">2013 - 2009</span>
                                    <h3 class="title">Honours Degree</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet quo ei simul
                                        congue exerci ad nec admodum perfecto.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- main line --> */}
                            <span class="line"></span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        {/* <!-- responsive spacer --> */}
                        <div
                            class="spacer d-md-none d-lg-none"
                            data-height="30"
                        ></div>
                        {/* <!-- timeline wrapper --> */}
                        <div class="timeline exp padding-30">
                            {/* <!-- timeline item --> */}
                            <h2 className="sub-title">Skill log</h2>
                            <div class="timeline-container wow fadeInUp">
                                <div class="content">
                                    <span class="time">2019 - Present</span>
                                    <h3 class="title">Web Designer</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet quo ei simul
                                        congue exerci ad nec admodum perfecto.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- timeline item --> */}
                            <div
                                class="timeline-container wow fadeInUp"
                                data-wow-delay="0.2s"
                            >
                                <div class="content">
                                    <span class="time">2017 - 2013</span>
                                    <h3 class="title">Front-End Developer</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet quo ei simul
                                        congue exerci ad nec admodum perfecto.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- timeline item --> */}
                            <div
                                class="timeline-container wow fadeInUp"
                                data-wow-delay="0.4s"
                            >
                                <div class="content">
                                    <span class="time">2013 - 2009</span>
                                    <h3 class="title">Back-End Developer</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet quo ei simul
                                        congue exerci ad nec admodum perfecto.
                                    </p>
                                </div>
                            </div>
                            {/* <!-- main line --> */}
                            <span class="line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
