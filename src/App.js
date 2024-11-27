import React from "react";

/* Imporatin of all css files*/
import "./App.css"
import './styles/navbar.css'
import './styles/membercard.css'
import './styles/keyButton.css'
import './styles/slider.css'
import './styles/footer.css'
import "./styles/log.css";

import Navbar from "./components/inc/Navbar";
import Footer from "./components/inc/Footer";
import Home from "./components/pages/Home";
import Documentation from "./components/pages/Documentation";
import ControlCenter from "./components/pages/ControlCenter";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {



  return (
    <Router>
      <div>
        {/* Navigation bar at the top with logo and title and three page options*/}
        <Navbar/>
        {/* Providing routes for different pages in the website*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/controlcenter" element={<ControlCenter />} />
        </Routes>
        {/* Footer with important links, sponsors, and thank you note*/}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
