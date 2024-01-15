import React from "react";
import "./assets/scss/style.scss";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from "history";
import {
  Route,
  Routes,
  HashRouter
} from "react-router-dom";
import Components from "./views/components/components.jsx";
import CustomComponents from "./views/custom-components/custom-components.jsx";
import Lesson1 from "./views/pages/Lesson1.jsx";
import Lesson2 from "./views/pages/Lesson2.jsx";
import Lesson3 from "./views/pages/Lesson3.jsx";
import HomePage from "./views/pages/HomePage.jsx";
import Glossary from "./views/pages/Glossary.jsx";
import Simulator from "./views/pages/Simulator.jsx";
import SignUp from "./views/pages/SignUp.jsx";



const root = ReactDOM.createRoot(document.getElementById('root'));

var hist = createBrowserHistory();
root.render(
  <HashRouter history={hist}>
    <Routes>
      <Route path="/custom-components" element={<CustomComponents />} />
      <Route path="/Lesson1" element={<Lesson1 />} />
      <Route path="/Lesson2" element={<CustomComponents />} />
      <Route path="/Lesson3" element={<Components />} />
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/Glossary" element={<Glossary />} />
      <Route path="/Simulator" element={<Simulator />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
