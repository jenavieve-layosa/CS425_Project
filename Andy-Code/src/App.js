import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Simulation from './Simulation';
import CodeEditor from './CodeEditor';

const App = () => {
  return (
    <div>
      <header>
        <h1>Robotics Education Website</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simulation" element={<Simulation />} />
          {/* <Route path="/code-editor" element={<CodeEditor />} /> */}
        </Routes>
      </main>
    </div>
  );
};

export default App;
