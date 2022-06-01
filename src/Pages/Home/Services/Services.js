import React from "react";
import sv1 from "../../../images/service-1.svg";
import sv2 from "../../../images/service-2.svg";
import sv3 from "../../../images/service-3.svg";
import "./Services.css";
const Services = () => {
    return (
        <section id="services">
            <div class="container">
                {/* <!-- section title --> */}
                <h2 class="section-title">Services</h2>
                <div class="spacer"></div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="service-box data-background padding-30 text-center">
                            <img src={sv1} alt="UI/UX design" />
                            <h3 class="mb-3 mt-0">UI/UX design</h3>
                            <p class="mb-0">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolorem ratione tempore
                                dolorum modi quis nulla, libero eum
                                exercitationem iure!
                            </p>
                        </div>
                        <div
                            class="spacer d-md-none d-lg-none"
                            data-height="30"
                        ></div>
                    </div>
                    <div class="col-md-4">
                        <div class="service-box data-background padding-30 text-center">
                            <img src={sv2} alt="UI/UX design" />
                            <h3 class="mb-3 mt-0">Web Development</h3>
                            <p class="mb-0">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Dolorem ratione tempore
                                dolorum modi quis nulla, libero eum
                                exercitationem iure!
                            </p>
                        </div>
                        <div
                            class="spacer d-md-none d-lg-none"
                            data-height="30"
                        ></div>
                    </div>
                    <div class="col-md-4">
                        <div class="service-box padding-30 text-center">
                            <img src={sv3} alt="UI/UX design" />
                            <h3 class="mb-3 mt-0">Photography</h3>
                            <p class="mb-0">
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
