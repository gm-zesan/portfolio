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
                            My web design service combines creativity with functionality to craft visually stunning and user-friendly websites. Whether you're establishing a brand presence your current site, I ensure a seamless and engaging user experience.
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
                            Transforming designs into interactive web interfaces is my specialty. Using Using cutting-edge technologies like HTML5, CSS3, Bootstrap and JavaScript, I create responsive and intuitive frontend solutions.
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
                            Powering your website with robust backend solutions is crucial for seamless performance. My backend development service focuses on scalability, security, and efficiency frameworks like Express JS, and Laravel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
