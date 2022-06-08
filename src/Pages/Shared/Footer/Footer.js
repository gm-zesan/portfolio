import React from "react";
import {
    faThumbsUp,
    faUsers,
    faMoneyBill,
    faComputer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                            <FontAwesomeIcon icon={faThumbsUp} />
                        </a>
                        <a className="social-icon" href="/">
                            <FontAwesomeIcon icon={faUsers} />
                        </a>
                        <a className="social-icon" href="/">
                            <FontAwesomeIcon icon={faMoneyBill} />
                        </a>
                        <a className="social-icon" href="/">
                            <FontAwesomeIcon icon={faComputer} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
