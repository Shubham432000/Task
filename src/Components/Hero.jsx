import React from "react";
import block from "../Images/block.png";
import growth from "../Images/growth.png";
import home from "../Images/home.png";
import "../CSS/Hero.css"

const Hero = () => {
  return (
    <>
      <div
      className="hero1"
        // style={{
        //   display: "flex",
        //   flexDirection: "row",
        //   justifyContent: "space-around",
        //   width: "100%",
        // }}
      >
        <div className="hero2" 
        // style={{height:"16%", width: "17%", border: "1px solid white",padding:"12px",  boxShadow: "7px 12px 11px 14px gray" }}
        >
          <img src={block} alt="" />
          <h3 style={{fontFamily:"Verdana"}}>Explore AI Opportunities for Your Enterprise</h3>
          <p style={{fontFamily:"Verdana"}}>
            Unlock the potential of generative AI by identifying tailored
            opportunities for integration within your organization, ensuring a
            strategic and efficient approach to AI implementation.
          </p>
        </div>
        <div className="hero2" 
        //  style={{height:"16%", width: "17%", border: "1px solid white" ,padding:"12px", boxShadow: "7px 12px 11px 14px gray" }}
         >
          <img src={growth} alt="" />
          <h3 style={{fontFamily:"Verdana"}}>Design AI Trust Layer</h3>
          <p style={{fontFamily:"Verdana"}}>
            Prioritize data security and build trust in generative AI
            applications with a dedicated trust layer, emphasizing
            privacy-focused solutions that safeguard both organizational and
            customer data.
          </p>
        </div>
        <div className="hero2"
        //  style={{height:"16%", width: "17%", border: "1px solid white",padding:"12px", boxShadow: "7px 12px 11px 14px gray"  }}
         >
          <img src={home} alt="" />
          <h3 style={{fontFamily:"Verdana"}}>Scalability-Focused Solutions</h3>
          <p style={{fontFamily:"Verdana"}}>
            Streamline and optimize business processes with comprehensive
            workflow automation, ensuring seamless integration of AI
            technologies from inception to execution for increased efficiency
            and productivity.
          </p>
        </div>
        <div className="hero2" 
        //  style={{height:"16%", width: "17%", border: "1px solid white" ,padding:"12px", boxShadow: "7px 12px 11px 14px gray" }}
         >
          <img src={home} alt="" />
          <h3 style={{fontFamily:"Verdana"}}>End to end Workflow automation</h3>
          <p style={{fontFamily:"Verdana"}}>
            Implement cutting-edge, scalable generative AI solutions that not
            only meet current organizational needs but also adapt and grow with
            the evolving demands of your enterprise, providing a future-proof
            approach to AI integration
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
