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
          {/* <form style={{ width: "100%" }}> */}
            <div
             className="connect1"
            //   style={{
            //     display: "flex",
            //     flexDirection:"column",
            //     justifyContent: "space-between",
            //     marginBottom: "10px",
            //   }}
            >
              <div style={{ marginRight: "10px" }}>
                <label className="connect2"
                 htmlFor="fullName" 
                //  style={{fontSize:"17px",fontWeight:"bold",marginLeft: '-1000px'}}
                 >Full Name:</label>
                <br />
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="connect3"
                //   style={{ width: "1200px",height:"30px" }}
                  required
                />
              </div>
              <div style={{ marginRight: "10px" }}>
                <label htmlFor="email" 
                className="connect2"
                // style={{fontSize:"17px",fontWeight:"bold",marginLeft: '-1000px'}}
                >Email:</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="connect3"
                 // style={{ width: "1200px",height:"30px" }}
                  required
                />
              </div>
              <div>
                <label htmlFor="contact" 
                className="connect2"
                // style={{fontSize:"17px",fontWeight:"bold",marginLeft: '-1000px'}}
                >Contact:</label>
                <br />
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  className="connect3"
                 // style={{ width: "1200px",height:"30px" }}
                  required
                />
              </div>
            </div>
            <div
             
            >
              <div>
                <label htmlFor="subject" 
                className="connect5"
                // style={{marginLeft: '-1000px', textAlign: 'left',fontSize:"17px",fontWeight:"bold" }}
                >Subject:</label>
                <br />
                <input  type="text" id="subject" name="subject" required 
                className="connect6"
                // style={{width:"1200px",height:"30px"}}
                />
              </div>
              <div>
                <label htmlFor="message"  
                className="connect5"
                // style={{marginLeft: '-1000px', textAlign: 'left',fontSize:"17px",fontWeight:"bold" }}
                >Message:</label>
                <br />
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  cols="300"
                
                //   style={{marginLeft: '-1000px'}}
                  required
                />
              </div>
            </div>

            <input type="submit" value="Submit Form" style={{ marginTop: "10px",backgroundColor:"blue",padding:"8px",color:"white",borderColor:"blue" }} />
          {/* </form> */}
        </div>
      </div>
    </>
  );
};

export default Connect;
