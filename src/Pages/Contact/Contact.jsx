import React from "react";
import "./contact.css";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { SERVICE_ID,TEMPLATE_ID, PUBLIC_KEY } from "../../../utils/config";
import contactAnimation from "./animation.json"
import Lottie from "lottie-react";

const Contact = () => {


  const onSubmit = async (values, actions) => {
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        values,
        PUBLIC_KEY,
      );
      alert("Message sent successfully!");
      actions.resetForm()
    } catch (error) {
      console.log(error);
    }
  };

  const { values, handleChange,errors, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit,
  });

  return (
    <div className="container-fluid py-5 d-flex justify-content-center align-items-center">
      <div
        className="container bg-white shadow rounded-4 p-2 p-md-5 position-relative ball-wrapper"
        style={{ maxWidth: "960px", zIndex: 1 }}
      >
    
        <div
          className="row justify-content-center align-items-center"
          
        >
          {/* Left side: Contact Form */}
          <motion.div
           
           initial="hidden"
           whileInView="visible"
           variants={{
             visible: {
               x: -10,
               opacity: 1,
               transition: {
                 type: "spring",
                 stiffness: 50,    // lower = softer spring
                 damping: 15,      // higher = less bounce
                 duration: 1.2     // optional, but makes it feel smoother
               },
             },
             hidden: {
               opacity: 0,
               x: -300,
             },
           }}
            className="col-md-5 mb-4 mb-md-0 position-relative"
            style={{ zIndex: 1 }}
          >
            <h3 className="fw-bold text-center mb-3">Contact Us</h3>
            <p className="text-muted text-center mb-4">
              Feel free to contact us anytime.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input required type="text" placeholder=" " id="name"
                      onChange={ handleChange}
                      value={values.name} />
                <span>First name</span>
              </div>
              <div className="inputBox">
                <input required type="email" placeholder=" " id="email"
                      onChange={ handleChange}
                      aria-describedby="emailHelp"
                      value={values.email} />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <input required type="number" placeholder=" " id="phone"
                      onChange={ handleChange}
                      aria-describedby="phone"
                      value={values.phone} />
                <span>Phone</span>
              </div>
              <div className="inputBox">
                <textarea required placeholder=" " rows="3"  id="message"
                      value={values.message} onChange={handleChange}></textarea>
                <span>Message</span>
              </div>

              <button
                className="btn w-100 text-white fw-semibold"
                type="submit"
                style={{
                  backgroundColor: "#003a84",
                  padding: "8px 0",
                  fontSize: "15px",
                  borderTopLeftRadius: "100px",
                  borderBottomRightRadius: "100px",
                  borderTopRightRadius: "5px",
                  borderBottomLeftRadius: "5px",
                }}
              >
                SEND
              </button>
            </form>
          </motion.div>

          {/* Right side: Info Section with motion */}
          <motion.div
            className="col-md-5 text-white p-4 mt-4 mt-md-0"
            initial={"hidden"}
        whileInView={"visible"}
        variants={{
          visible: {
            x: 10,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 50,    // lower = softer spring
                 damping: 15,      // higher = less bounce
                 duration: 1.2   
            },
          },
          hidden: { opacity: 0, x: 300 },
        }}
           
          >
           
            <div >
        <Lottie animationData={contactAnimation} loop={true} style={{ width: "150%", maxWidth: "600px", height: "auto", transform: "translateX(-10%)" }} />
      </div>
          </motion.div>
        </div>
        
        {/* Small decorative balls */}
        <div className="ball top-left-ball"></div>
        <div className="ball bottom-right-ball"></div>
      </div>
    </div>
  );
};

export default Contact;
