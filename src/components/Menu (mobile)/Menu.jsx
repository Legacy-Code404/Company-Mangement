import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="mobile-menu">
      <div className="container">
        <Link to="/add-employee">
          <div className="mobile-icon">
            <i className="uil uil-estate"></i>
            <span>Employees</span>
          </div>
        </Link>
        <Link to="/add-project">
          <div className="mobile-icon">
            <i className="uil uil-file"></i>
            <span>Projects</span>
          </div>
        </Link>
        <Link to="/add-task">
          <div className="mobile-icon">
            <i className="uil uil-list-ol-alt"></i>
            <span>Tasks</span>
          </div>
        </Link>
        <Link to="/analytics">
          <div className="mobile-icon">
            <i className="uil uil-comparison"></i>
            <span>Analytics</span>
          </div>
        </Link>
        <Link to="/financial">
          <div className="mobile-icon">
            <i className="uil uil-wallet"></i>
            <span>Financial</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
