import React, { useState } from "react";
import MonacoEditor from 'react-monaco-editor';
import PropTypes from "prop-types";
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";
import img3 from '../../assets/images/img3.jpg';

const Simulator = () => {
  const [fileContent, setFileContent] = useState('');
  const [editorTheme, setEditorTheme] = useState('hc-black'); // State to manage editor theme

  const editorOptions = {
    theme: editorTheme,
    fontSize: 16,
    language: 'python',
    lineNumbers: 'on',
    minimap: {
      enabled: false,
    },
    wordWrap: 'on', // Enable word wrap
    // Set text alignment explicitly
    editorOptions: {
      wordWrap: 'on',
      minimap: { enabled: false },
      automaticLayout: true,
      glyphMargin: false,
      wrappingIndent: "indent",
      cursorStyle: 'line', // Display cursor as a line
      cursorBlinking: 'smooth', // Smooth cursor blinking
      scrollbar: { verticalScrollbarSize: 10, horizontalScrollbarSize: 10 }, // Set scrollbar size
    }
  };

  const handleChange = (value, event) => {
    setFileContent(value);
  };

  const saveFile = () => {
    // save file here, for now just going to download it
    const blob = new Blob([fileContent], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'myCodeFile.txt';
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Function to handle theme change
  const changeTheme = (theme) => {
    setEditorTheme(theme);
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ width: '80%' }}>
                <MonacoEditor
                  width="100%"
                  height="600"
                  options={editorOptions}
                  onChange={handleChange}
                />
              </div>
              <div style={{ width: '20%', textAlign: 'right' }}>
                <button onClick={saveFile} style={{ marginBottom: '10px' }}>Save File</button>
                <button onClick={() => changeTheme('hc-black')}>Dark Theme</button>
                <button onClick={() => changeTheme('vs-light')}>Light Theme</button>
                {/* Add more theme buttons as needed */}
              </div>
            </div>
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
