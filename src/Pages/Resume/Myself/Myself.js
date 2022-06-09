import React from "react";
import avt from "../../../images/avatar-1.svg";
import {
    faBook,
    faUsers,
    faMoneyBill,
    faComputer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Myself.css";
const Myself = () => {
    return (
        <section id="myself">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5 col-lg-4">
                        <div className="card profile-card p-4">
                            <div className=" image d-flex flex-column justify-content-center align-items-center">
                                <img
                                    src={avt}
                                    height="100"
                                    width="100"
                                    alt=""
                                />
                                <h4 className="mt-3">G.M. Zesan</h4>
                                <span>Full Stack Developer</span>
                                <div className="gap-3 mt-5 icons d-flex">
                                    <a className="card-icon" href="/">
                                        <FontAwesomeIcon icon={faBook} />
                                    </a>
                                    <a className="card-icon" href="/">
                                        <FontAwesomeIcon icon={faUsers} />
                                    </a>
                                    <a className="card-icon" href="/">
                                        <FontAwesomeIcon icon={faMoneyBill} />
                                    </a>
                                    <a className="card-icon" href="/">
                                        <FontAwesomeIcon icon={faComputer} />
                                    </a>
                                </div>
                                {/* <div className=" px-2 rounded mt-4 date ">
                                    <span className="join">Joined May,2021</span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <div className="box-shadow padding-30">
                            <h2 className="section-title">My-Self</h2>
                            <div className="spacer"></div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="bi bi-rounded-right"></i>
                                            <strong>Name:</strong> G.M. Zesan
                                        </li>
                                        <li>
                                            <i className="bi bi-rounded-right"></i>
                                            <strong>Phone:</strong>
                                            +8801770597767
                                        </li>
                                        <li>
                                            <i className="bi bi-rounded-right"></i>
                                            <strong>Address:</strong>
                                            Lalmati, Mirpur-11, Dhaka,
                                            Bangladesh.
                                        </li>
                                        <li>
                                            <i className="bi bi-rounded-right"></i>
                                            <strong>Occupation:</strong> Student
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li>
                                            <i className="bi bi-rounded-right"></i>
                                            <strong>Degree:</strong> Diploma
                                        </li>
                                        <li>
                                            <i className="bi bi-rounded-right"></i>
                                            <strong>Designation:</strong>
                                            full-stack Web Developer
                                        </li>
                                        <li>
                                            <i className="bi bi-rounded-right"></i>
                                            <strong>Email:</strong>
                                            gmzesan7767@gmail.com
                                        </li>
                                        <li>
                                            <i className="bi bi-rounded-right"></i>
                                            <strong>Institute:</strong> Green
                                            University of Bangladesh
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-3">
                                <a
                                    href="https://drive.google.com/u/0/uc?id=1cxOwV5KDQkOG8HKTePto1Ao246NpTctk&export=download"
                                    className="btn btn-default"
                                >
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Myself;
