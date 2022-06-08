import React from "react";
import avt from "../../../images/avatar-1.svg";
import {
    faThumbsUp,
    faUsers,
    faMoneyBill,
    faComputer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Myself.css";
const Myself = () => {
    return (
        <section id="myself">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-4">
                        <div class="card profile-card p-4">
                            <div class=" image d-flex flex-column justify-content-center align-items-center">
                                <img
                                    src={avt}
                                    height="100"
                                    width="100"
                                    alt=""
                                />
                                <h4 class="mt-3">G.M. Zesan</h4>
                                <span>Full Stack Developer</span>
                                <div class="gap-3 mt-5 icons d-flex">
                                    <a className="card-icon" href="/">
                                        <FontAwesomeIcon icon={faThumbsUp} />
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
                                {/* <div class=" px-2 rounded mt-4 date ">
                                    <span class="join">Joined May,2021</span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="box-shadow padding-30">
                            <h2 class="section-title">My-Self</h2>
                            <div class="spacer"></div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <ul>
                                        <li>
                                            <i class="bi bi-rounded-right"></i>
                                            <strong>Name:</strong> G.M. Zesan
                                        </li>
                                        <li>
                                            <i class="bi bi-rounded-right"></i>
                                            <strong>Phone:</strong>
                                            +8801770597767
                                        </li>
                                        <li>
                                            <i class="bi bi-rounded-right"></i>
                                            <strong>Address:</strong> City :
                                            Pallabi, Dhaka, Bangladesh.
                                        </li>
                                        <li>
                                            <i class="bi bi-rounded-right"></i>
                                            <strong>Occupation:</strong> Student
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-lg-6">
                                    <ul>
                                        <li>
                                            <i class="bi bi-rounded-right"></i>
                                            <strong>Degree:</strong> Diploma
                                        </li>
                                        <li>
                                            <i class="bi bi-rounded-right"></i>
                                            <strong>Designation:</strong>
                                            full-stack Web Developer
                                        </li>
                                        <li>
                                            <i class="bi bi-rounded-right"></i>
                                            <strong>Email:</strong>
                                            gmzesan7767@gmail.com
                                        </li>
                                        <li>
                                            <i class="bi bi-rounded-right"></i>
                                            <strong>Institute:</strong> Green
                                            University of Bangladesh
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="mt-3">
                                <a href="/" class="btn btn-default">
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
