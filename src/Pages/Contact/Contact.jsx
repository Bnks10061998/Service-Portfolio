import React from "react";
import "./contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="container-fluid py-5 d-flex justify-content-center align-items-center">
      <div
        className="container bg-white shadow rounded-4 p-4 p-md-5 position-relative ball-wrapper"
        style={{ maxWidth: "960px", zIndex: 1 }}
      >
        <div
          className="row justify-content-center align-items-center"
          style={{ columnGap: "80px" }}
        >
          {/* Left side: Contact Form */}
          <motion.div
           
            initial={"hidden"}
        whileInView={"visible"}
        variants={{
          visible: {
            x: -10,
            opacity: 1,
            transition: {
              type: "spring",
            },
          },
          hidden: { opacity: 0, x: -300 },
        }}
            className="col-md-5 mb-4 mb-md-0 position-relative"
            style={{ zIndex: 1 }}
          >
            <h3 className="fw-bold text-center mb-3">Contact Us</h3>
            <p className="text-muted text-center mb-4">
              Feel free to contact us anytime.
            </p>
            <form>
              <div className="inputBox">
                <input required type="text" placeholder=" " />
                <span>First name</span>
              </div>
              <div className="inputBox">
                <input required type="email" placeholder=" " />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea required placeholder=" " rows="3"></textarea>
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
            },
          },
          hidden: { opacity: 0, x: 300 },
        }}
            style={{
              backgroundColor: "#003a84",
              borderTopLeftRadius: "5px",
              borderBottomRightRadius: "5px",
              borderTopRightRadius: "50px",
              borderBottomLeftRadius: "50px",
              zIndex: 1,
            }}
          >
            <h5 className="fw-bold mb-4">Info</h5>
            <p>
              <i className="bi bi-envelope-fill me-2"></i> info@getintouch.we
            </p>
            <p>
              <i className="bi bi-telephone-fill me-2"></i> +24 56 89 146
            </p>
            <p>
              <i className="bi bi-geo-alt-fill me-2"></i> 14 Greenroad St.
            </p>
            <p>
              <i className="bi bi-clock-fill me-2"></i> 09:00 - 18:00
            </p>

            <div className="mt-4">
              <a href="#" className="text-white me-3">
                <i className="bi bi-globe"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-link-45deg"></i>
              </a>
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
