import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({things, users}) => {
  return (
    <div>
      <ul className="nav nav-pills">
      <NavLink className="nav-link" to="/users" activeClassName="selected" activeStyle={{ backgroundColor: "blue", color: "white"}}>
        <li className="nav-item">Users {users.length}</li>
      </NavLink>
      <NavLink className="nav-link" to="/things" activeClassName="selected" activeStyle={{ backgroundColor: "blue", color: "white"}}>
        <li className="nav-item">Things {things.length}</li>
      </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
