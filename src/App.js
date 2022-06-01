import "./App.css";
import Header from "./Pages/Shared/Navbar/Navbar";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Resume from "./Pages/Resume/Resume";
import Contact from "./Pages/Contact/Contact";

function App() {
    return (
        <div className="dark">
            {/* <!-- Preloader Start --> */}
            {/* <div class="preloader">
                <div class="loader_34">
                    <div class="ytp-spinner">
                        <div class="ytp-spinner-container">
                            <div class="ytp-spinner-rotator">
                                <div class="ytp-spinner-left">
                                    <div class="ytp-spinner-circle"></div>
                                </div>
                                <div class="ytp-spinner-right">
                                    <div class="ytp-spinner-circle"></div>
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
