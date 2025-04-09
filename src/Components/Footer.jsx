import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import image from "../assets/la.jpg";
import "./Footer.css"; // 👈 Import your external CSS

const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-4 shadow-lg">
      <div className="container text-center text-md-start">
        <div className="row gy-4">
          {/* Logo & Contact Info */}
          <div className="col-12 col-md-6 col-lg-3">
            <h6 className="fw-bold d-flex justify-content-center justify-content-md-start align-items-center gap-2 mb-3">
              <img
                src={image}
                alt="logo"
                width="40"
                height="40"
                className="rounded-circle border border-2"
              />
              <span>Least Action</span>
            </h6>
            <ul className="list-unstyled small">
              <li>
                <i className="bi bi-geo-alt-fill me-2"></i>123 Main Street,
                Chennai, TN - 600001
              </li>
              <li>
                <i className="bi bi-telephone-fill me-2"></i>+91 98765 43210
              </li>
              <li>
                <i className="bi bi-envelope-fill me-2"></i>
                support@leastaction.com
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="col-6 col-md-3 col-lg-2 offset-lg-2">
            <h6 className="fw-bold mb-3">Links</h6>
            <ul className="list-unstyled small">
              {["Dashboard", "About", "Projects", "Services", "Contact"].map(
                (link, idx) => (
                  <li key={idx}>
                    <a href={`#${link.toLowerCase()}`} className="footer-link">
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Guides */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold mb-3">Guides</h6>
            <ul className="list-unstyled small">
              {["Get Started", "Planner Guide", "FAQs"].map((guide, idx) => (
                <li key={idx}>
                  <a href="#" className="footer-link">
                    {guide}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div className="col-12 col-md-6 col-lg-3">
            <h6 className="fw-bold mb-3">Community</h6>
            <ul className="list-unstyled small">
              {["Blog", "Forum", "Support", "Careers"].map((item, idx) => (
                <li key={idx}>
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
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center gap-3 px-3">
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
              { icon: "twitter-x", color: "#000000", link: "https://x.com" },
              {
                icon: "instagram",
                color: "#E1306C",
                link: "https://instagram.com",
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
