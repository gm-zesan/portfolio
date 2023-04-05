import React from "react";
import avt from "../../../images/avatar-1.svg";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Me.css";
const Me = () => {
    return (
        <section id="me">
            <div className="row">
                <div className="col-12 col-md-4 col-sm-6 mx-auto">
                    <div>
                        <img src={avt} alt="" />
                    </div>
                    <h2 className="mt-3">G.M. Zesan</h2>
                    <h5>gmzesan7767@gmail.com</h5>
                    <div className="gap-5 mt-3 icons cont-icon w-lg-75 d-flex">
                        <a
                            className="card-icon"
                            href="https://www.facebook.com/Zesan.xyz/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FacebookRoundedIcon />
                        </a>
                        <a
                            className="card-icon"
                            href="https://www.linkedin.com/in/gm-zesan-5a2a16184/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkedInIcon />
                        </a>
                        <a className="card-icon" href="/">
                            <WhatsAppIcon />
                        </a>
                        <a
                            className="card-icon"
                            href="https://github.com/GM-Zesan"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GitHubIcon />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Me;
