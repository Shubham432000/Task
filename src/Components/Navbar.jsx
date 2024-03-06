import React from "react";
import nav from "../Images/nav.png";

const Navbar = () => {
  return (
    <>
      <div style={{}}>
        <ul
          style={{
            listStyleType: "none",
            marginLeft: "80px",
            marginRight:"80px",
            padding: "0px",
            overflow: "hidden",
            backgroundColor: "white",
          }}
        >
          <li style={{ float: "left" }}>
            <img src={nav} style={{ width: "150px", height: "50px" }} />
          </li>
          <li style={{ float: "right",textDecoration: "none", }}>
            <a
              href="#news"
              style={{
                display: "block",
                color: "black",
                textalign: "center",
                padding: "14px 16px",
                textDecoration: "none",
              }}
            >
              CONTACT US
            </a>
          </li>
          <li style={{ float: "right",textDecoration: "none", }}>
            <a href="#contact"    style={{
                display: "block",
                color: "black",
                textalign: "center",
                padding: "14px 16px",
                textDecoration: "none",
              }}>BLOGS</a>
          </li>
          <li style={{ float: "right",textDecoration: "none", }}>
            <a class="active" href="#about"    style={{
                display: "block",
                color: "black",
                textalign: "center",
                padding: "14px 16px",
                textDecoration: "none",
              }}>
              PRODUCT
            </a>
          </li>
          <li style={{ float: "right",textDecoration: "none", }}>
            <a class="active" href="#about"    style={{
                display: "block",
                color: "black",
                textalign: "center",
                padding: "14px 16px",
                textDecoration: "none",
              }}>
              HOME
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
