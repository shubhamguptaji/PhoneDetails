import React, { Component } from "react";
import { NavItem, Navbar } from "react-materialize";
import { Link } from "react-router-dom";

var sticky = {
  position: "fixed",
  top: 0,
  width: "100%",
  color: "#f1f1f1",
  zIndex: 99
};

var leftSpace = {
  paddingLeft: "120px"
};

export default class Navbars extends Component {
  render() {
    return (
      <div style={sticky}>
        <Navbar
          brand={
            <Link to="/">
              <span style={leftSpace}>SmartPhone</span>
            </Link>
          }
          alignLinks="right">
          <NavItem>
            <input placeholder="Search..." />
          </NavItem>
          <NavItem>
            <Link to="/brand">Choose by Brand</Link>
          </NavItem>
          <NavItem>
            <Link to="/news">Related News</Link>
          </NavItem>
          <NavItem>
            <Link to="/login">Login</Link>
          </NavItem>
        </Navbar>
      </div>
    );
  }
}
