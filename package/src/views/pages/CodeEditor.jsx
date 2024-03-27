import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import MonacoEditor from 'react-monaco-editor';
import Header from "../../components/header/header.jsx";
import HeaderBanner from "../../components/banner/banner.jsx";
import Footer from "../../components/footer/footer.jsx";

const CodeEditor = () => {

  const navigate = useNavigate();

  const [fileContent, setFileContent] = useState('Hello World! \n Type your code here:');
  const [editorTheme, setEditorTheme] = useState('vs-dark'); // State to manage editor theme

  const editorOptions = {
    autoIndent: true,
    contextmenu: true,
    minimap: {
      enabled: true,
    },
    fontFamily: 'monospace',
    fontSize: 16,
    lineHeight: 24,
    hideCursorInOverviewRuler: true,
    renderIndentGuides: true,
    matchBrackets: 'always',
    scrollbar: {horizontalSliderSize: 4, verticalSliderSize: 18},
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: 'line',
    automaticLayout: true,
  };

  /*const handleChange = (value, event) => {
    setFileContent(value);
  };*/

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
                <button onClick={() => changeTheme('vs-dark')}>Dark Theme</button>
                <button onClick={() => changeTheme('vs-light')}>Light Theme</button>
              </div>
              <MonacoEditor
                theme={editorTheme}
                height="500"
                language="python"
                options={editorOptions}
                onChange={setFileContent}
                value={fileContent}
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
