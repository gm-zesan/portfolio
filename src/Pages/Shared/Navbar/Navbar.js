import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../logo3.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Navabr.css";
import CustomLink from "../CustomeLink/CustomeLink";

const Header = () => {
    const [scroll, setScroll] = useState(false);
    const changeClass = () => {
        const scrollValue = document.documentElement.scrollTop;
        if (scrollValue > 100) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };
    window.addEventListener("scroll", changeClass);
    return (
        <Navbar
            className={
                scroll
                    ? "sticky desktop-header navbar-expand-lg"
                    : "desktop-header navbar-expand-lg"
            }
            collapseOnSelect
            expand="md"
        >
            <Container>
                <Navbar.Brand to="/">
                    <img src={logo} style={{ width: "150px" }} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <CustomLink className="nav-link" to="/">
                            Home
                        </CustomLink>
                        <CustomLink className="nav-link" to="/resume">
                            About Me
                        </CustomLink>
                        <CustomLink className="nav-link" to="/contact">
                            Contact
                        </CustomLink>
                        <CustomLink className="nav-link" to="/blog">
                            Blog
                        </CustomLink>
                    </Nav>
                    <Nav className="ms-auto d-none d-md-block">
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
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
