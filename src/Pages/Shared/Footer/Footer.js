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
                        <a className="social-icon" href="/">
                            <FacebookRoundedIcon />
                        </a>
                        <a className="social-icon" href="/">
                            <LinkedInIcon />
                        </a>
                        <a className="social-icon" href="/">
                            <WhatsAppIcon />
                        </a>
                        <a className="social-icon" href="/">
                            <GitHubIcon />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
