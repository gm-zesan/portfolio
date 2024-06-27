import React from "react";
import "./Hero.css";
const Hero = () => {
    return (
        <section id="home" className="home d-flex align-items-center">
            <div className="container">
                {/* intro */}
                <div className="intro">
                    <p>Hi There I'm</p>
                    <h1 className="mb-2 mt-2">Zesan</h1>
                    <span>
                        I'm a{" "}
                        <span className="text-rotating">
                            Full-Stack developer
                        </span>
                    </span>
                    <div className="mt-5">
                        <a
                            href="https://drive.google.com/file/d/1Fk8aMyUckRzgd4NyXDPiKfXlH0KP5W4m/view"
                            className="ml-2"
                        >
                            <button className="btn btn-default">
                                Download Resume
                            </button>
                        </a>
                    </div>
                </div>
                {/* scroll down mouse wheel */}
                <div className="scroll-down">
                    <a href="#about" className="mouse-wrapper">
                        <span>Scroll Down</span>
                        <span className="mouse">
                            <span className="wheel" />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
