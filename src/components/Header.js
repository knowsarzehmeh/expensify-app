import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <h1>Expensify</h1>
    <NavLink exact={true} activeClassName="is-active" to="/">
      Expense dashboard
    </NavLink>
    <NavLink activeClassName="is-active" to="/create">
      Create Expense
    </NavLink>
  </div>
);

export default Header;
