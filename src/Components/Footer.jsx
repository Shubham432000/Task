import React from "react";
import footer from "../Images/footer.png";
import glass from "../Images/glassdor.webp";
import iso from "../Images/iso.webp";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <>
      <div
        className="footer1"
      
      >
        <div
          className="footer2"
   
        >
          <img src={footer} alt="" style={{ width: "200px", height: "50px" }} />
          <h3>Bluetick Consultants LLP</h3>
        </div>
        <div
          className="footer3"
       
        >
          <div
            className="footer4"
        
          >
            <p style={{ fontSize: "17px", fontWeight: "bold" }}>Resoureces</p>
            <p style={{ fontSize: "17px", fontWeight: "bold" }}>Products</p>
          </div>
          <div
            className="footer5"
          
          >
            <div className="footer6" 
         
            >
              {" "}
              <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                {" "}
                <IoIosArrowForward size={12} color="#000" />
                Blogs
              </p>
            </div>
            <div
              className="footer7"
         
            >
              <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                <IoIosArrowForward size={12} color="#000" />
                Talk Code
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginLeft: "7px",
                }}
              >
                <IoIosArrowForward size={12} color="#000" />
                Interview Gpt
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginLeft: "7px",
                }}
              >
                <IoIosArrowForward size={12} color="#000" />
                privacy doc
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  marginLeft: "7px",
                }}
              >
                <IoIosArrowForward size={12} color="#000" /> sales callevaluator
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="footer8"
      
      >
        <div style={{ width: "33%" }}>
          <img src={glass} alt="" style={{ width: "150px", height: "90px" }} />
          <img src={iso} alt="" style={{ width: "100px", height: "90px" }} />
        </div>
        <div
          style={{
            width: "33%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "30px",
          }}
        >
          <FaFacebook
            size={30}
            color="#3b5998"
            style={{ marginRight: "10px" }}
          />
          <FaInstagram size={30} color="#c32aa3" />
          <FaTwitter
            size={30}
            color="#1DA1F2"
            style={{ marginRight: "10px" }}
          />
          <FaLinkedin size={30} color="#0077B5" />
        </div>
        <div style={{ width: "33%", marginTop: "20px" }}>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              marginLeft: "7px",
            }}
          >
            2024 © All rights reserved by Bluetick Consultants LLP
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
