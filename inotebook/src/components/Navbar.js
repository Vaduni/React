import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let Navigate = useNavigate(); 
  const handleLogout=()=>{
     localStorage.removeItem('token'); 
     Navigate("/login");
  }
  let location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Navbar">
          iNotebook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/Home" ? "active" : ""
                }`}
                aria-current="page"
                to="/Home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/About" ? "active" : ""
                }`}
                to="/About"
              >
                About
              </Link>
            </li>
          </ul>
         {! localStorage.getItem('token ') ?<form className="d-flex" role="search">
            <Link className="btn btn-outline-success mx-1" to="/Login" role="button">
            Login</Link>
            <Link className="btn btn-outline-success mx-1" to="/Signup" role="button">
            Signup</Link>

          </form>:<button onClick={handleLogout} className="btn-btn-outline-success">Logout </button>  }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
