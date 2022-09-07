import React from "react";
import "../Navbar/Index.css";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className="grid-layout-navbar">
    <div className="nav-bar">
        <ul className="nav-routes">
            
            <Link to="/" className="nav-routes-links">ART</Link>
            <Link to="/reviews" className="nav-routes-links">REVIEW</Link>
        </ul>
    </div>
    </div>
    </>
  );
}

export default Navbar;
