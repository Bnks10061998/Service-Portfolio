import React from "react";
import "./contact.css";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../../../utils/config";
import contactAnimation from "./animation.json";
import Lottie from "lottie-react";

const Contact = () => {
  const onSubmit = async (values, actions) => {
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY);
      alert("Message sent successfully!");
      actions.resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const { values, handleChange, handleSubmit } = useFormik({
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
        className="container bg-white shadow rounded-4 p-3 p-md-5 position-relative ball-wrapper"
        style={{ maxWidth: "960px", zIndex: 1 }}
      >
        <div className="row justify-content-center align-items-center">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                x: 0,
                opacity: 1,
                transition: { type: "spring", stiffness: 50, damping: 15 },
              },
              hidden: { opacity: 0, x: -100 },
            }}
            className="col-md-6 mb-4 mb-md-0 position-relative"
          >
            <h3 className="fw-bold text-center mb-3">Contact Us</h3>
            <p className="text-muted text-center mb-4">
              Feel free to contact us anytime.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  required
                  type="text"
                  id="name"
                  placeholder=" "
                  onChange={handleChange}
                  value={values.name}
                />
                <span>First name</span>
              </div>
              <div className="inputBox">
                <input
                  required
                  type="email"
                  id="email"
                  placeholder=" "
                  onChange={handleChange}
                  value={values.email}
                />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <input
                  required
                  type="number"
                  id="phone"
                  placeholder=" "
                  onChange={handleChange}
                  value={values.phone}
                />
                <span>Phone</span>
              </div>
              <div className="inputBox">
                <textarea
                  required
                  id="message"
                  rows="3"
                  placeholder=" "
                  onChange={handleChange}
                  value={values.message}
                ></textarea>
                <span>Message</span>
              </div>
              <button
                className="btn w-100 text-white fw-semibold"
                type="submit"
                style={{
                  backgroundColor: "#003a84",
                  padding: "10px 0",
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

          {/* Animation */}
          <motion.div
            className="col-md-6 d-none d-md-block"
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                x: 0,
                opacity: 1,
                transition: { type: "spring", stiffness: 50, damping: 15 },
              },
              hidden: { opacity: 0, x: 100 },
            }}
          >
            <Lottie
              animationData={contactAnimation}
              loop
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                transform: "translateX(-10%)",
              }}
            />
          </motion.div>
        </div>

        {/* Decorative balls */}
        <div className="ball top-left-ball"></div>
        <div className="ball bottom-right-ball"></div>
      </div>
    </div>
  );
};

export default Contact;
