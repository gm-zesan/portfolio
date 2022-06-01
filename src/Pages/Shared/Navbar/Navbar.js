import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../logo1.png";
import {
    faThumbsUp,
    faUsers,
    faMoneyBill,
    faComputer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                            Resume
                        </CustomLink>
                        <CustomLink className="nav-link" to="/contact">
                            Contact
                        </CustomLink>
                    </Nav>
                    <Nav className="ms-auto d-none d-md-block">
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
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
