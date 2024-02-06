import React from "react";

import PropTypes from "prop-types";


import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";

import img3 from '../../assets/images/img2.jpg';

const About = () => {
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid text-center">
                    <HeaderBanner />
                    <h1 className="title"> About the Team</h1>
                    <h2 className="subtitle">Our group is team 29 at the University of Nevada Reno</h2>

                    <div className="intro-content">
                        <p>
                            *insert more info here*  
                        </p>
                        <ol>                                
                        <img src={img3} alt="Advanced Robotics Concepts" className="img-thumbnail" width="290" />
                        </ol>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

About.propTypes = {
    classes: PropTypes.object
};

export default About;