import "./App.css";
import Header from "./Pages/Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Resume from "./Pages/Resume/Resume/Resume";
import Contact from "./Pages/Contact/Contact/Contact";

function App() {
    return (
        <div className="dark">
            {/* <!-- Preloader Start --> */}
            {/* <div className="preloader">
                <div className="loader_34">
                    <div className="ytp-spinner">
                        <div className="ytp-spinner-container">
                            <div className="ytp-spinner-rotator">
                                <div className="ytp-spinner-left">
                                    <div className="ytp-spinner-circle"></div>
                                </div>
                                <div className="ytp-spinner-right">
                                    <div className="ytp-spinner-circle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- Preloader End --> */}
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/resume" element={<Resume></Resume>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
            </Routes>

            <Footer></Footer>
        </div>
    );
}

export default App;
