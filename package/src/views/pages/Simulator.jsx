import React from "react";
import MonacoEditor from 'react-monaco-editor';
import PropTypes from "prop-types";
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import img3 from '../../assets/images/img3.jpg';

const Simulator = () => {
    const editorOptions = {
        theme: 'hc-black', // Change the theme
        fontSize: 16, // Change the font size
        language: 'python', // Specify the language mode
        lineNumbers: 'on', // Enable line numbers
        minimap: {
          enabled: false, // Disable minimap
        },
      };
    return (
        <div id="main-wrapper">
            <Header />
            <div className="page-wrapper">
                <div className="container-fluid text-center">
                    <HeaderBanner />
                    <h1 className="title"> Welcome to the Simulator</h1>
                    <h2 className="subtitle">This website uses Monaco Code Editor and Gazebo to create an interactive virtual environment to help demonstrate robotics concepts without the need for hardware</h2>

                    <div className="intro-content">
                    <MonacoEditor
                        width="800" // Set the width
                        height="600" // Set the height
                        options={editorOptions}
                        onChange={(value, event) => {
                            console.log(value);
                        }}
                    />
                        
                        <img src={img3} alt="Advanced Robotics Concepts" className="img-thumbnail" width="290" />
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
