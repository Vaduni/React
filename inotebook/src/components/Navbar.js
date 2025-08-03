import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; 

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
     toast.success("Logout successfully");
  };

  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md  text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-1 flex items-center justify-between">
        <div className="flex items-center mt-2 space-x-2">
          <h1>
            <b>iNotebook</b>
          </h1>
        </div>
        <button
          className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg lg:hidden hover:bg-brand-accent focus:outline-none"
          type="button"
          data-collapse-toggle="navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
        ></button>
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4 items-center mt-2">
            <li>
              <Link
                to="/Home"
                className={`block py-0 px-2 rounded ${
                  location.pathname === "/Home"
                    ? "bg-gray-400 opacity-30"
                    : "hover:bg-gray-400 hover:bg-opacity-30"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className={`block py-0 px-2 rounded ${
                  location.pathname === "/About"
                    ? "bg-gray-400 opacity-30  "
                    : "hover:bg-gray-400 hover:bg-opacity-60 "
                }`}
              >
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem("token") ? (
            <div className="flex items-center mt-2 lg:mt-0 lg:ml-4 space-x-2">
              <Link
                to="/Login"
                className="px-3 py-1 rounded text-white bg-gray-400/50  hover:bg-gray-400/30 transition border border-gray-300"
              >
                Login
              </Link>
              <Link
                to="/Signup"
                className="px-3 py-1 rounded text-white bg-gray-400/50  hover:bg-gray-400/30 transition border border-gray-300"
              >
                Signup
              </Link>
            </div>
          ) : (
            <button
              onClick={handleLogout}
              className="px-2 py-1 mt-2 border border-brand-accent text-brand-light rounded hover:bg-brand-accent hover:text-white transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
