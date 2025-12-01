import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import userLogo from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
import ToyLogo from "../assets/toylogo.jpeg";

const Navbar = () => {
  const { user, logout, errorAlert, successAlert } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        successAlert("Logged Out");
      })
      .catch((error) => {
        errorAlert("Sorry", error.message);
        console.log(error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allToys"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          All Toys
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Seller
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-5 md:px-10 lg:px-14">
      <div className="navbar-start">
        <div className="dropdown relative">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-compact dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow l"
          >
            {links}
          </ul>
        </div>
        {/* ---image-name---- */}
        <img src={ToyLogo} alt="" className="w-14 h-14" />
        <h1 className="ml-3 font-bold hidden md:block text-3xl bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-400">
          ToyVille
        </h1>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end flex items-center gap-2 md:gap-3 lg:gap-4">
        <div className="relative group">
          <img
            src={`${user ? user.photoURL : userLogo}`}
            alt=""
            className="rounded-full w-12 h-12 cursor-pointer object-cover border-3 border-transparent bg-gradient-to-r from-amber-400 to-rose-400 bg-origin-border"
          />
          {user && (
            <span
              className="absolute top-full left-1/2 -translate-x-1/2 mb-2 
                   bg-black text-white text-xs font-medium px-2 py-1 
                   rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              {user.displayName || "Unknown User"}
            </span>
          )}
        </div>
        {user ? (
          <button onClick={handleLogout} className="btn-default">
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn-default">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
