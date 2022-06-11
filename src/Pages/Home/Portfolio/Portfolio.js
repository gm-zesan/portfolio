import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Portfolio.css";
import Project from "./project";
import { useNavigate } from "react-router-dom";
const Portfolio = () => {
    const navigate = useNavigate();
    const [project] = useState(Project);
    const [updateProject, setUpdateProject] = useState(Project);

    const filterItem = (cat) => {
        const pro = project.filter((curElem) => {
            return curElem.category === cat;
        });

        setUpdateProject(pro);
    };
    const handleProjects = (id) => {
        navigate(`/project/${id}`);
    };
    return (
        <section id="works">
            <div className="container">
                <h2 className="section-title">Recent projects</h2>
                <div className="spacer"></div>
                <ul className="portfolio-filter list-inline">
                    <li
                        className={
                            updateProject === Project
                                ? "current list-inline-item"
                                : "list-inline-item"
                        }
                        onClick={() => setUpdateProject(Project)}
                    >
                        Everything
                    </li>
                    <li
                        className={
                            updateProject.category === "design"
                                ? "current list-inline-item"
                                : "list-inline-item"
                        }
                        onClick={() => filterItem("design")}
                    >
                        Design
                    </li>
                    <li
                        className={
                            updateProject.category === "php"
                                ? "current list-inline-item"
                                : "list-inline-item"
                        }
                        onClick={() => filterItem("php")}
                    >
                        Php
                    </li>
                    <li
                        className={
                            updateProject.category === "react"
                                ? "current list-inline-item"
                                : "list-inline-item"
                        }
                        onClick={() => filterItem("react")}
                    >
                        React
                    </li>
                </ul>
                {/* <!-- portolio wrapper --> */}
                <div className="row portfolio-wrapper">
                    <AnimatePresence>
                        {/* <!-- portfolio item --> */}
                        {updateProject.map((elem) => (
                            <motion.div
                                layout
                                transition={{ type: "spring" }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                initial={{ opacity: 0, scale: 0 }}
                                exit={{ opacity: 0, scale: 0 }}
                                key={elem.id}
                                className="col-md-4 col-sm-6 grid-item art"
                            >
                                {/* ancor tag will be here */}
                                <div className="work-image">
                                    <div className="portfolio-item">
                                        <div className="details">
                                            <span className="term">
                                                {elem.category}
                                            </span>
                                            <h4 className="title">
                                                {elem.name}
                                            </h4>
                                            <div
                                                onClick={() => handleProjects(`${elem.id}`)}
                                                className="mx-auto"
                                            >
                                                <button className="btn btn-default">
                                                    Details
                                                </button>
                                            </div>
                                            <span className="more-button">
                                                <i className="icon-magnifier-add"></i>
                                            </span>
                                        </div>
                                        <div className="thumb">
                                            <img
                                                src={elem.image}
                                                alt="Portfolio-title"
                                            />
                                            <div className="mask"></div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    {/* <div
                            id="small-dialog"
                            className="white-popup zoom-anim-dialog mfp-hide"
                        >
                            <img src="images/single-work.svg" alt="Title" />
                            <h2>Guest App Walkthrough Screens</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Etiam hendrerit nibh in massa
                                semper rutrum. In rhoncus eleifend mi id tempus.
                            </p>
                            <p>
                                Donec consectetur, libero at pretium euismod,
                                nisl felis lobortis urna, id tristique nisl
                                lectus eget ligula.
                            </p>
                            <a href="#" className="btn btn-default">
                                View on Dribbble
                            </a>
                        </div> */}
                </div>
                {/* <!-- more button --> */}
                {/* <div className="load-more text-center mt-4">
                    <a href="javascript" className="btn btn-default">
                        <i className="fas fa-spinner"></i> Load more
                    </a>
                    <ul className="portfolio-pagination list-inline d-none">
                        <li className="list-inline-item">1</li>
                        <li className="list-inline-item">
                            <a href="works-2.html">2</a>
                        </li>
                    </ul>
                </div> */}
            </div>
            <div className="spacer"></div>
        </section>
    );
};

export default Portfolio;
