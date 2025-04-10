import React from "react";
import image from "../assets/la.jpg";

const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#003a84" }}
    >
      {/* Social Section */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 pt-2 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          {["facebook", "instagram", "linkedin", "github", "youtube"].map(
            (icon, idx) => (
              <a key={idx} href="#!" className="me-4 text-reset fs-4 text-white">
                <i className={`bi bi-${icon}`}></i>
              </a>
            )
          )}
        </div>
      </section>

      {/* Main Content */}
      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            {/* Company Info */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h4 className="text-uppercase fw-bold mb-4">
                <img
                  src={image}
                  alt="logo"
                  width="65"
                  height="65"
                  className="rounded-circle"
                />
                <span> Least Action</span>
              </h4>
              <p>
                At Least Action, we deliver professional, user-friendly websites
                with a focus on innovation, trust, and quality — Turning your
                vision into reality.
              </p>
            </div>

            {/* Products */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Links</h6>
              {["Dashboard", "About us", "Services", "Projects"].map(
                (item, idx) => (
                  <p key={idx}>
                    <a href="#!" className="text-white text-decoration-none">
                      {item}
                    </a>
                  </p>
                )
              )}
            </div>

            {/* Useful Links */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Guides</h6>
              {["Get start", "Contacy us", "FAQ", "Help"].map((item, idx) => (
                <p key={idx}>
                  <a href="#!" className="text-white text-decoration-none">
                    {item}
                  </a>
                </p>
              ))}
            </div>

            {/* Contact Info */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="bi bi-geo-fill me-2"></i>
                No. 9, Thendral Nagar, <br />
                <span className="p-4"> Sathuvachari, Vellore - 632009</span>
                
              </p>
              <p>
                <i className="bi bi-envelope-fill me-2"></i>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=leastactioncompany@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  leastactioncompany@gmail.com
                </a>
              </p>
              <p>
                <i className="bi bi-telephone-fill me-2"></i>
                <a
                  href="tel:+918825965775"
                  className="text-white text-decoration-none"
                >
                  +91 88259 65775
                </a>
              </p>

              <p>
                <i className="bi bi-telephone-fill me-2"></i>
                <a
                  href="tel:+919597366741"
                  className="text-white text-decoration-none"
                >
                  +91 95973 66741
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bottom Bar */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {new Date().getFullYear()} Copyright:
        <a className="text-white fw-bold ms-1" href="https://leastaction.com">
          Leastaction.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
