import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import MonacoEditor from 'react-monaco-editor';
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";

const CodeEditor = () => {

  const navigate = useNavigate();

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
    // save file here, save to the db
    const blob = new Blob([fileContent], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'myCodeFile.txt';
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  const runFile = () => {
    //TODO: save and run file here, save to the db, empty the sim data, open the simulator page, execute the backend_controller

    // open simulation page
    navigate('/Simulator');

  };

  // Function to handle theme change
  const changeTheme = (theme) => {
    setEditorTheme(theme);
  };

  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          <HeaderBanner />
          <h1 className="title text-center">Welcome to the Simulator</h1>
          <h2 className="subtitle text-center">This website uses Monaco Code Editor and a 3D visualization tool to create an interactive virtual environment for demonstrating robotics concepts without hardware.</h2>
          
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px' }}>
            {/* Left half: Code Editor and its buttons */}
            <div style={{ width: '100%' }}>
              <div style={{ marginBottom: '10px' }}>
                <button onClick={saveFile}>Save File</button>
                <button onClick={runFile}>Run Simulation</button>
                <button onClick={() => changeTheme('hc-black')}>Dark Theme</button>
                <button onClick={() => changeTheme('vs-light')}>Light Theme</button>
              </div>
              <MonacoEditor
                width="100%"
                height="600"
                options={editorOptions}
                onChange={handleChange}
              />
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CodeEditor;
