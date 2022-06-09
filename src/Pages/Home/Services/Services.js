import React from "react";
import sv1 from "../../../images/service-1.svg";
import sv2 from "../../../images/service-2.svg";
import sv3 from "../../../images/service-3.svg";
import "./Services.css";
const Services = () => {
    return (
        <section id="services">
            <div className="container">
                {/* <!-- section title --> */}
                <h2 className="section-title">Services</h2>
                <div className="spacer"></div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="service-box data-background padding-30 text-center">
                            <img src={sv1} alt="UI/UX design" />
                            <h3 className="mb-3 mt-0">Web design</h3>
                            <p className="mb-0">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolorem ratione tempore
                                dolorum modi quis nulla, libero eum
                                exercitationem iure!
                            </p>
                        </div>
                        <div
                            className="spacer d-md-none d-lg-none"
                            data-height="30"
                        ></div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-box data-background padding-30 text-center">
                            <img src={sv2} alt="UI/UX design" />
                            <h3 className="mb-3 mt-0">Front-end Development</h3>
                            <p className="mb-0">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolorem ratione tempore
                                dolorum modi quis nulla, libero eum
                                exercitationem iure!
                            </p>
                        </div>
                        <div
                            className="spacer d-md-none d-lg-none"
                            data-height="30"
                        ></div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-box padding-30 text-center">
                            <img src={sv3} alt="UI/UX design" />
                            <h3 className="mb-3 mt-0">Back-end Development</h3>
                            <p className="mb-0">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolorem ratione tempore
                                dolorum modi quis nulla, libero eum
                                exercitationem iure!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
