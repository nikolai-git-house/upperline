import React from "react";

import "./DrawerMenu.css";
const DrawMenu = props => {
  let drawerClass = "dropdownDrawer";
  if (props.show) {
    drawerClass = "dropdownDrawer open";
  }
  return (
    <nav className={drawerClass}>
      <ul>
        <li>
          <a href="/students">Students</a>
        </li>
        <li>
          <a href="/schools">Schools & Districts</a>
        </li>
        <li>
          <a href="/nonprofits">Non-Profits</a>
        </li>
        <li>
          <a href="/business">Businesses</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default DrawMenu;
