import { Link } from "react-router-dom";
import React, { useState } from "react";
import './NavBar.css';


function NavBar() {
  return (  
    <nav>
<<<<<<< HEAD
        <ul>
            <Link to="/">
                <li>
                    Home
                </li>
            </Link>
            <Link to="/list">
                <li>
                   list
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
                    Login
                </li>
            </Link>
        </ul>
=======
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
            </ul>
        </div>
>>>>>>> 6b2c126f777dfc72a68003b20afdf845836601e4
    </nav>
  );
}

export default NavBar;
