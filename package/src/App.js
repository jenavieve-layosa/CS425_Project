import {React, useEffect} from "react";
import Cookies from "js-cookie";
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
import Account from "./views/pages/Account.jsx";

function App() {
  const checkAuth = async () => {
    try {
      const response = await fetch("/api/checkAuth", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.map((data) => data.status) === true) {
        Cookies.set("auth", JSON.stringify(true));
      }
    } catch (error) {
      console.log("Error:", error);
    }
  }
  useEffect(() => {
    Cookies.remove("auth");
    checkAuth();
  }, []);
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
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;
