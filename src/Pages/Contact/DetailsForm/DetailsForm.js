import emailjs from "@emailjs/browser";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import React, { useRef } from "react";
import toast from "react-hot-toast";
import "./DetailsForm.css";
const DetailsForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_a4r7d29",
                "template_lyi2dln",
                form.current,
                "-9wHne3DdoZLOEagp"
            )
            .then(
                (result) => {
                    toast.success("Message sent Successfully!");
                    e.target.reset();
                },
                (error) => {
                    toast.error("This isn't working");
                    e.target.reset();
                }
            );
    };
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
                                        <LocationOnIcon />
                                    </div>
                                    <h4>Location:</h4>
                                </div>
                                <p>House-46, Road-13, Sector-11, Uttara, Dhaka</p>
                            </div>

                            <div className="email">
                                <div className="d-flex">
                                    <div className="info-icon">
                                        <MailIcon />
                                    </div>
                                    <h4>Email:</h4>
                                </div>
                                <p>gmzesan7767@gmail.com</p>
                            </div>

                            <div className="phone">
                                <div className="d-flex">
                                    <div className="info-icon">
                                        <AddIcCallIcon />
                                    </div>
                                    <h4>Call:</h4>
                                </div>

                                <p>+8801770597767</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 py-3">
                        <div id="form-messages"></div>
                        <form
                            className="contact-form"
                            ref={form}
                            onSubmit={sendEmail}
                        >
                            <div className="row">
                                <div className="column col-md-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control black-box"
                                            name="user_name"
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
                                            name="user_email"
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
