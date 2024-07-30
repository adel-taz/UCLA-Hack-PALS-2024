import React from "react";
import logo from "../images/Team_Logo.png"
import {Link} from 'react-router-dom'


//Navigation Bar. Logo and Title on the left which are buttons that take user to home page. 
//On the right there are three page options: home , documentaiton, and control center.
function Navbar(){
    return (
      <nav className="navbar navbar-dark custom-navbar">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">
            <img
              src={logo}
              alt="PALS logo"
              width="55"
              height="55"
              className="d-inline-block align-top"
            />
            <span className="ms-3 fs-1 ">P A L S</span>
          </Link>
          <div className="d-flex ms-auto">
            <Link to='/' className="nav-link mx-2 fs-5" >Home</Link>
            <Link to='/documentation' className="nav-link mx-2 fs-5">Documentation</Link>
            <Link to='/controlcenter' className="nav-link mx-2 fs-5">Control Center</Link>
          </div>
        </div>
      </nav>
    );
}


export default Navbar;