import React from "react";
import {
    faThumbsUp,
    faUsers,
    faMoneyBill,
    faComputer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DetailsForm.css";
const DetailsForm = () => {
    return (
        <section id="contact">
            <div class="container">
                <h2 class="section-title">Get In Touch</h2>
                <h3>Let's talk about everything!</h3>
                <div class="spacer"></div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="contact-info">
                            <div class="address">
                                <div className="d-flex">
                                    <div className="info-icon">
                                        <FontAwesomeIcon icon={faThumbsUp} />
                                    </div>
                                    <h4>Location:</h4>
                                </div>
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>

                            <div class="email">
                                <div className="d-flex">
                                    <div className="info-icon">
                                        <FontAwesomeIcon icon={faUsers} />
                                    </div>
                                    <h4>Email:</h4>{" "}
                                </div>
                                <p>info@example.com</p>
                            </div>

                            <div class="phone">
                                <div className="d-flex">
                                    <div className="info-icon">
                                        <FontAwesomeIcon icon={faMoneyBill} />
                                    </div>
                                    <h4>Call:</h4>
                                </div>

                                <p>+1 5589 55488 55s</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div id="form-messages"></div>
                        <form id="contact-form" class="contact-form">
                            <div class="row">
                                <div class="column col-md-6">
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control black-box"
                                            name="name"
                                            id="name"
                                            placeholder="Your name"
                                            required="required"
                                        />
                                    </div>
                                </div>
                                <div class="column col-md-6">
                                    <div class="form-group">
                                        <input
                                            type="email"
                                            class="form-control black-box"
                                            name="email"
                                            placeholder="Email address"
                                            required="required"
                                        />
                                    </div>
                                </div>
                                <div class="column col-md-12">
                                    <div class="form-group">
                                        <textarea
                                            name="message"
                                            class="form-control black-box"
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
                                class="btn btn-default"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="spacer"></div>
        </section>
    );
};

export default DetailsForm;
