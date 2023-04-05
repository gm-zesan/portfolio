import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Footer.css";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="footer">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-6 footer-text">
                        <span className="copyright">
                            Copyright &copy; {year} All rights reserved.
                        </span>
                    </div>
                    <div className="col-md-6 footer-text-icon">
                        <a
                            className="social-icon"
                            href="https://www.facebook.com/Zesan.xyz/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FacebookRoundedIcon />
                        </a>
                        <a
                            className="social-icon"
                            href="https://www.linkedin.com/in/gm-zesan-5a2a16184/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkedInIcon />
                        </a>
                        <a className="social-icon" href="/" target="_blank">
                            <WhatsAppIcon />
                        </a>
                        <a
                            className="social-icon"
                            href="https://github.com/GM-Zesan"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GitHubIcon />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
