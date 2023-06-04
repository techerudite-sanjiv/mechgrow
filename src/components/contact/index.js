
import cn from "classnames";
import styles from "./contact.module.css";
import React, { useState, useEffect } from "react";

const Contact = () => {
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
      <div id="contact">
        <div className="container">
          <h2 className={cn(styles["contact-heading"])}>Contact Us:</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
             
              value={inpData.name}
              onChange={handleData}
            />
            <br />
            <br />
            <input
              type="text"
              name="phone"
              placeholder="Enter Phone number"
              value={inpData.phone}
              onChange={handleData}
            />
            <br /> <br />
            <input
              type="email"
              name="email"
              value={inpData.email}
              onChange={handleData}
              placeholder="Enter email"
              id=""
            />
            <br /> <br />
            <button type="submit" className={cn(styles["contact-button"])}>
              Send
            </button>
          </form>

       </div>
      </div>
    </>
  );
};

export default Contact;