import { Link } from "react-router-dom";
import React, { useState } from "react";
import './NavBar.css';


function NavBar() {
  return (
    <nav>
        <div class='topnav'>
            <ul>
                <Link to="/">
                    <li>
                        Home
                    </li>
                </Link>
                <Link to="/list">
                    <li>
                       Friends List
                    </li>
                </Link>
                <Link to="/profile">
                    <li>
                        Profile
                    </li>
                </Link>
                <Link to="/register">
                    <li>
                        Register
                    </li>
                </Link>
                <Link to="/Login">
                    <li>
                        Log in
                    </li>
                </Link>
            </ul>
        </div>
    </nav>
  );
}

export default NavBar;
