import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import image from "../assets/la.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-4 shadow-lg">
      <div className="container text-center text-md-start">
        <div className="row gy-4">
          {/* Logo & Contact Info */}
          <div className="col-12 col-lg-3 mb-4">
            <h6 className="fw-bold d-flex justify-content-center justify-content-lg-start align-items-center gap-2 mb-3">
              <img
                src={image}
                alt="logo"
                width="40"
                height="40"
                className="rounded-circle border border-2"
              />
              <span>Least Action</span>
            </h6>
            <ul className="list-unstyled small text-center text-lg-start m-2 p-0">
              <li className="mb-2">
                <i className="bi bi-geo-alt-fill me-2"></i>
                <div className="d-inline">
                  <span>No. 9, Thendral Nagar, </span>
                  <br />
                  <span className="p-4">(SP Office Backside)</span>
                  <br />
                  <span className="p-4">Sathuvachari, Vellore - 632009</span>
                </div>
              </li>

              <li className="mb-2">
                <i className="bi bi-telephone-fill me-2"></i>+91 88259 65775
                <br />
                <span className="p-4">+91 95973 66741</span>
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope-fill me-2"></i>
                leastactioncompany@gmail.com
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="col-12 col-lg-2 offset-lg-2 mb-4">
            <h6 className="fw-bold mb-3 text-center text-lg-start">Links</h6>
            <ul className="list-unstyled small text-center text-lg-start m-0 p-0">
              {["Dashboard", "About", "Projects", "Services", "Contact"].map(
                (link, idx) => (
                  <li key={idx} className="mb-1">
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="footer-link text-decoration-none"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Guides */}
          <div className="col-12 col-lg-2 mb-4">
            <h6 className="fw-bold mb-3 text-center text-lg-start">Guides</h6>
            <ul className="list-unstyled small text-center text-lg-start m-0 p-0">
              {["Get Started", "Planner Guide", "FAQs"].map((guide, idx) => (
                <li key={idx} className="mb-1">
                  <a href="#" className="footer-link">
                    {guide}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div className="col-12 col-lg-3 mb-4">
            <h6 className="fw-bold mb-3 text-center text-lg-start">
              Community
            </h6>
            <ul className="list-unstyled small text-center text-lg-start m-0 p-0">
              {["Blog", "Forum", "Support", "Careers"].map((item, idx) => (
                <li key={idx} className="mb-1">
                  <a href="#" className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="my-4" />
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center text-center gap-3 px-3 footer-bottom">
          <p className="small mb-0">
            © {new Date().getFullYear()} Least Action. All rights reserved.
          </p>
          <div className="d-flex justify-content-center gap-3">
            {[
              {
                icon: "facebook",
                color: "#003A84",
                link: "https://facebook.com",
              },
              {
                icon: "instagram",
                color: "#E1306C",
                link: "https://instagram.com",
              },
              {
                icon: "linkedin",
                color: "#0077B5",
                link: "https://instagram.com",
              },
              {
                icon: "youtube",
                color: "#FF0000",
                link: "https://youtube.com",
              },
            ].map((social, idx) => (
              <div key={idx} className="social-icon">
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: social.color,
                    fontSize: "20px",
                  }}
                >
                  <i className={`bi bi-${social.icon}`}></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
