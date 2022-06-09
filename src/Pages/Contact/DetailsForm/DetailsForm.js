import React from "react";
import {
    faThumbsUp,
    faUsers,
    faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DetailsForm.css";
const DetailsForm = () => {
    return (
        <section id="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="spacer"></div>
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <div className="contact-info">
                            <h3>Let's talk about everything!</h3>
                            <div className="address mt-5">
                                <div className="d-flex">
                                    <div className="info-icon">
                                        <FontAwesomeIcon icon={faThumbsUp} />
                                    </div>
                                    <h4>Location:</h4>
                                </div>
                                <p>Lalmati, Mirpur-11, Dhaka, Bangladesh</p>
                            </div>

                            <div className="email">
                                <div className="d-flex">
                                    <div className="info-icon">
                                        <FontAwesomeIcon icon={faUsers} />
                                    </div>
                                    <h4>Email:</h4>
                                </div>
                                <p>gmzesan7767@gmail.com</p>
                            </div>

                            <div className="phone">
                                <div className="d-flex">
                                    <div className="info-icon">
                                        <FontAwesomeIcon icon={faMoneyBill} />
                                    </div>
                                    <h4>Call:</h4>
                                </div>

                                <p>+8801770597767</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 py-3">
                        <div id="form-messages"></div>
                        <form id="contact-form" className="contact-form">
                            <div className="row">
                                <div className="column col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control black-box"
                                            name="name"
                                            id="name"
                                            placeholder="Your name"
                                            required="required"
                                        />
                                    </div>
                                </div>
                                <div className="column col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control black-box"
                                            name="email"
                                            placeholder="Email address"
                                            required="required"
                                        />
                                    </div>
                                </div>
                                <div className="column col-md-12">
                                    <div className="form-group">
                                        <textarea
                                            name="message"
                                            className="form-control black-box"
                                            rows="5"
                                            placeholder="Message"
                                            required="required"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                name="submit"
                                id="submit"
                                className="btn btn-default"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="spacer"></div>
        </section>
    );
};

export default DetailsForm;
