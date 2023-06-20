import cn from "classnames";
import Navbar from "../screens/navbar";
import styles from "./contact.module.css";
import ProductFooter from "../screens/footer";
import React, { useState, useEffect } from "react";


const Contact = ({show = true}) => {
  const data = {
    name: "",
    phone: "",
    email: "",
  };
  const [inpData, setInpData] = useState(data);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("registerd");
  }, [flag]);

  function handleData(e) {
    setInpData({ ...inpData, [e.target.name]: e.target.value });
    console.log(inpData);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!inpData.name || !inpData.phone || !inpData.email) {
      alert("All field are mendatory");
    } else {
      setFlag(true);
      alert(
        `We Store  Name: ${inpData.name} | Phone:  ${inpData.phone} | Email : ${inpData.email}`
      );
    }
  }

  return (
    <>
      {show && <Navbar/>}
      <div className={cn(styles["contact"],)}>
        <div className={cn(styles["contact-container"],"py-5")}>
          <h2 className={cn(styles["contact-heading"],"")}>Get In touch</h2>
          <div className="container">
            <form>
              <div className="row">
                <div className="col-12">
                  <label htmlFor="fname">Full Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your name.."
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    placeholder="Your Email.."
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <label htmlFor="email">Phone</label>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    placeholder="Your phone.."
                  />
                </div>
              </div>
              
              <div className="row">
                <div className="col-12">
                  <label htmlFor="subject">Message</label>
                  <textarea
                    id="subject"
                    name="subject"
                    placeholder="Write something.."
                    style={{ height: "150px" }}
                  ></textarea>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-12">
                 <button className={cn(styles["contact-button"])}>Submit</button>
                </div>
              </div>
           
            </form>
          </div>
        </div>
      </div>
     {show && <ProductFooter/>}
    </>
  );
};

export default Contact;
