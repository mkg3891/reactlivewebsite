import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Footer from "./Footer";

const App = () => {
  return (<>
    <NavBar />
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="about" Component={About} />
      <Route path="service" Component={Service} />
      <Route path="contact" Component={Contact} />
    </Routes>
    <Footer />
  </>);
};

export default App;
