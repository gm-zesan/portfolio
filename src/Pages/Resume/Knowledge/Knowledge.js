import React from "react";
import avt from "../../../images/avatar-2.svg";
import "./Knowledgr.css";
const Knowledge = () => {
    return (
        <section id="knowledge">
            <div className="container">
                <h2 className="section-title">Knowledge</h2>
                <div className="spacer"></div>
                <div className="black-box padding-30">
                    <div className="row align-items-center justify-content-center text-center">
                        <h2 className="sub-title-kn">Femilier At</h2>
                        <div className="spacer-50"></div>
                        <div className="col-12 col-md-4">
                            <img src={avt} height="auto" width="50%" alt="" />
                        </div>
                        <div className="col-12 col-md-4 anim-li">
                            <li>PHP(OOP)</li>
                            <li>Mysql</li>
                        </div>
                        <div className="col-12 col-md-4 anim-li">
                            <li>Laravel(Basic)</li>
                            <li>C(Fundamental)</li>
                        </div>
                    </div>
                    <div className="spacer-20"></div>
                </div>
            </div>
            <div className="spacer"></div>
        </section>
    );
};

export default Knowledge;
