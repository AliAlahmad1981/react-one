import React from 'react';
import { NavLink } from "react-router-dom";
import classes from './Navigation.module.css';
const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li className="nav_links">
            <NavLink to="/home" activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <NavLink to="/about" activeClassName={classes.active}>
              About
            </NavLink>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <NavLink to="/team" activeClassName={classes.active}>
              Team
            </NavLink>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <NavLink to="/" className={classes.logout} onClick={props.onLogout}>Logout</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
