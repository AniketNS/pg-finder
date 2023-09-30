import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Header.css";

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Function to check and update login status based on localStorage
    const checkLoginStatus = () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      setLoggedIn(isLoggedIn);
    };
    // Check initially when the component mounts
    checkLoginStatus();

    // Periodically check the login status (e.g., every 1 millisecond)
    const intervalId = setInterval(checkLoginStatus, 1);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-logo">
          <h1>
            <Link to="/" className="logo">
              PG Finder
            </Link>
          </h1>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/search">Search</Link>
          {loggedIn && <Link to="/create">Add Room</Link>}{" "}
          {/* Show Create Room link if logged in */}
          {loggedIn && <Link to="/rooms">Your Rooms</Link>}
          {loggedIn && <Link to="/appointments  ">Appointments</Link>}
        </div>
        <div className="nav-cta">
          {loggedIn ? (
            <Link to="/profile">Profile</Link> // Show profile button if logged in
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
