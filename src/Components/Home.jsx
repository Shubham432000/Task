import React from "react";
import image from "../Images/AI.png";
import "../CSS/Home.css"

const Home = () => {
    const handleClick = () => {
        window.location.href = "https://www.bluetickconsultants.com/generative-ai.html";
    };
  return (
    <>
      <div
       className="home1"
        // style={{
        //   display: "flex",
        //   flexDirection: "row",
        //   justifyContent: "space-between",
          
        // }}
       
      >
      
        <div   className="home2" style={{width: "50%",marginTop:"100px"}}>
          <h1 style={{color:"rgb(60, 60, 60)",}}>TRANSFORMING ENTERPRISES</h1>
          <h3 style={{color:"rgb(90, 90, 90)",fontFamily:"Arial",fontSize:"20px",}}>
            with cutting-edge, scalable, privacy-focused <br /> Generative AI Solutions
          </h3>
          <p style={{color:"black",fontFamily:"Helvetica",fontSize:"16px",lineHeight:"21px",}}>
            Founded in 2017, Bluetick Consultants is a <br /> technology-driven firm
            that has made a significant <br /> impact in the Indian and US startup
            ecosystems.
          </p>
          <button  onClick={handleClick} style={{padding:"10px",backgroundColor:"#6a5acd",color:"white",borderColor:"#6a5acd",fontSize:"17px",}}>Find Your Consultant</button>

        </div>
        <div className="home3" style={{ width: "50%" }}>
          <img src={image}  alt="" style={{ width: "500px", height: "500px" }} />
        </div>
      </div>
    </>
  );
};

export default Home;
