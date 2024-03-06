import React from "react";
import "../CSS/Connect.css"
const Connect = () => {
  return (
    <>
      <div >
        <div style={{marginTop:"100px"}}>
          <h1 style={{textAlign:"left",color:"blue"}}>LET'S CONNECT</h1>
          <p style={{textAlign:"left",fontSize:"17px"}}>
            Contact our support team or make an appointment with our experts.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            height: "300px",
          }}
        >
        
            <div
             className="connect1"
         
            >
              <div style={{ marginRight: "10px" }}>
                <label className="connect2"
                 htmlFor="fullName" 
         
                 >Full Name:</label>
                <br />
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="connect3"
           
                  required
                />
              </div>
              <div style={{ marginRight: "10px" }}>
                <label htmlFor="email" 
                className="connect2"
            
                >Email:</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="connect3"
             
                  required
                />
              </div>
              <div>
                <label htmlFor="contact" 
                className="connect2"
              
                >Contact:</label>
                <br />
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  className="connect3"
               
                  required
                />
              </div>
            </div>
            <div
             
            >
              <div>
                <label htmlFor="subject" 
                className="connect5"
               
                >Subject:</label>
                <br />
                <input  type="text" id="subject" name="subject" required 
                className="connect6"
              
                />
              </div>
              <div>
                <label htmlFor="message"  
                className="connect5"
               
                >Message:</label>
                <br />
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  cols="300"
                
               
                  required
                />
              </div>
            </div>

            <input type="submit" value="Submit Form" style={{ marginTop: "10px",backgroundColor:"blue",padding:"8px",color:"white",borderColor:"blue" }} />
         
        </div>
      </div>
    </>
  );
};

export default Connect;
