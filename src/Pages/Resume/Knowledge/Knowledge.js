import React from "react";
import avt from "../../../images/avatar-2.svg";
import "./Knowledgr.css";
const Knowledge = () => {
    return (
        <section id="knowledge">
            <div className="container">
                <h2 class="section-title">Knowledge</h2>
                <div class="spacer"></div>
                <div class="black-box padding-30">
                    <div className="row align-items-center justify-content-center text-center">
                        <h2 class="sub-title-kn">Femilier At</h2>
                        <div class="spacer-50"></div>
                        <div className="col-12 col-md-4">
                            <img src={avt} height="auto" width="50%" alt="" />
                        </div>
                        <div className="col-12 col-md-4 anim-li">
                            <li>one</li>
                            <li>two</li>
                            <li>three</li>
                        </div>
                        <div className="col-12 col-md-4 anim-li">
                            <li>four</li>
                            <li>five</li>
                            <li>six</li>
                        </div>
                    </div>
                    <div class="spacer-20"></div>
                </div>
            </div>
            <div className="spacer"></div>
        </section>
    );
};

export default Knowledge;
