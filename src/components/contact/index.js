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
        <div className={cn(styles["contact-container"])}>
          <h2 className={cn(styles["contact-heading"])}>Get In touch</h2>
          <div class="container">
            <form>
              <div class="row">
                <div class="col-12">
                  <label for="fname">Full Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your name.."
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    placeholder="Your Email.."
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <label for="email">Phone</label>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
                    placeholder="Your phone.."
                  />
                </div>
              </div>
              
              <div class="row">
                <div class="col-12">
                  <label for="subject">Message</label>
                  <textarea
                    id="subject"
                    name="subject"
                    placeholder="Write something.."
                    style={{ height: "150px" }}
                  ></textarea>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-12">
                 <button className={cn(styles["contact-button"])}>Submit</button>
                </div>
              </div>
           
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
