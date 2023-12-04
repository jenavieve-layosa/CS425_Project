import React from "react";

import PropTypes from "prop-types";


import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";

import img3 from '../../assets/images/img3.jpg';

const Simulator = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid text-center">
                    <HeaderBanner />
                    <h1 className="title"> Welcome to the Simulator</h1>
                    <h2 className="subtitle">This website uses *** to create an interactive virtual environment to help demonstrate robotics concepts without the need for hardware</h2>

                    <div className="intro-content">
                        <p>
                            *insert simulation here* 
                        </p>
                        <ol>
                            <li>
                                
                                <img src={img3} alt="Advanced Robotics Concepts" className="img-thumbnail" width="290" />
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

Simulator.propTypes = {
    classes: PropTypes.object
};

export default Simulator;