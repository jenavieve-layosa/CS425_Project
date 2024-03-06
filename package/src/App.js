import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Components from "./views/components/components.jsx";
import CustomComponents from "./views/custom-components/custom-components.jsx";
import Lesson1 from "./views/pages/Lesson1.jsx";
import Lesson2 from "./views/pages/Lesson2.jsx";
import Lesson3 from "./views/pages/Lesson3.jsx";
import Lesson4 from "./views/pages/Lesson4.jsx";
import Lesson5 from "./views/pages/Lesson5.jsx";
import HomePage from "./views/pages/HomePage.jsx";
import Glossary from "./views/pages/Glossary.jsx";
import Simulator from "./views/pages/Simulator.jsx";
import SignUp from "./views/pages/SignUp.jsx";
import Login from "./views/pages/Login.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/custom-components" element={<CustomComponents />} />
        <Route path="/components" element={<Components />} />
        <Route path="/lesson1" element={<Lesson1 />} />
        <Route path="/lesson2" element={<Lesson2 />} />
        <Route path="/lesson3" element={<Lesson3 />} />
        <Route path="/lesson4" element={<Lesson4 />} />
        <Route path="/lesson5" element={<Lesson5 />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/simulator" element={<Simulator />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
