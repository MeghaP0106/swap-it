// src/components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css";

function Navbar({ currentUser, handleLogout }) {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">ShareCycle</Link>
      </div>
      
      <ul className="navbar-links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About SDG 12
          </Link>
        </li>
        <li>
          <Link to="/items" className={location.pathname === '/items' ? 'active' : ''}>
            Browse Items
          </Link>
        </li>
        <li>
          <Link to="/leaderboard" className={location.pathname === '/leaderboard' ? 'active' : ''}>
            Leaderboard
          </Link>
        </li>
        
        {currentUser ? (
          <>
            <li>
              <Link to="/donate" className={location.pathname === '/donate' ? 'active' : ''}>
                Donate Item
              </Link>
            </li>
            <li>
              <Link to="/profile" className={location.pathname === '/profile' ? 'active' : ''}>
                My Profile
              </Link>
            </li>
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className={location.pathname === '/register' ? 'active' : ''}>
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;