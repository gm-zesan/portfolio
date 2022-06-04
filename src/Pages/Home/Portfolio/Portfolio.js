import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Portfolio.css";
import Project from "./project";
const Portfolio = () => {
    const [project] = useState(Project);
    const [updateProject, setUpdateProject] = useState(Project);

    const filterItem = (cat) => {
        const pro = project.filter((curElem) => {
            return curElem.category === cat;
        });

        setUpdateProject(pro);
    };
    return (
        <section id="works">
            <div class="container">
                <h2 class="section-title">Recent works</h2>
                <div class="spacer"></div>
                <ul class="portfolio-filter list-inline">
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
                            updateProject.category === "laravel"
                                ? "current list-inline-item"
                                : "list-inline-item"
                        }
                        onClick={() => filterItem("laravel")}
                    >
                        Laravel
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
                <div class="row portfolio-wrapper">
                    <AnimatePresence>
                        {/* <!-- portfolio item --> */}
                        {updateProject.map((elem) => (
                            <motion.div
                                layout
                                transition={{ type: "spring"}}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                initial={{ opacity: 0, scale: 0 }}
                                exit={{ opacity: 0, scale: 0 }}
                                key={elem.id}
                                class="col-md-4 col-sm-6 grid-item art"
                            >
                                <a href="images/works/1.svg" class="work-image">
                                    <div class="portfolio-item">
                                        <div class="details">
                                            <span class="term">
                                                {elem.category}
                                            </span>
                                            <h4 class="title">{elem.name}</h4>
                                            <span class="more-button">
                                                <i class="icon-magnifier-add"></i>
                                            </span>
                                        </div>
                                        <div class="thumb">
                                            <img
                                                src={elem.image}
                                                alt="Portfolio-title"
                                            />
                                            <div class="mask"></div>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    {/* <div
                            id="small-dialog"
                            class="white-popup zoom-anim-dialog mfp-hide"
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
                            <a href="#" class="btn btn-default">
                                View on Dribbble
                            </a>
                        </div> */}
                </div>
                {/* <!-- more button --> */}
                <div class="load-more text-center mt-4">
                    <a href="javascript" class="btn btn-default">
                        <i class="fas fa-spinner"></i> Load more
                    </a>
                    {/* <!-- numbered pagination (hidden for infinite scroll) --> */}
                    <ul class="portfolio-pagination list-inline d-none">
                        <li class="list-inline-item">1</li>
                        <li class="list-inline-item">
                            <a href="works-2.html">2</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="spacer"></div>
        </section>
    );
};

export default Portfolio;
