import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>ToDoList </h1>
      <Link style={linkStyle} to="/">
        {" "}
        Home
      </Link>{" "}
      |
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  );
}
const headerStyle = {
  textAlign: "center",
  background: "#5A5560",
  color: "black",
  padding: "10px"
};
const linkStyle = {
  textDecoration: "none",
  color: "black"
};

export default Header;
