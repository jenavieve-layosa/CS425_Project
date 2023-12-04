import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropTypes from "prop-types";

import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";


const Lesson2 = () => {
    return (

        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner />
                    <h1 className="title">Lesson 2: Introduction to the world of Robotics</h1>
                    
                </div>
            </div>
            <Footer />
        </div>
        
    );
}

Lesson2.propTypes = {
    classes: PropTypes.object
};

export default Lesson2;
