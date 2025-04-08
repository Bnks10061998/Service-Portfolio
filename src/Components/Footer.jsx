import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

const Footer = () => {
  return (
    <footer className="bg-white text-dark pt-5 pb-4 border-top shadow-sm">
      <div className="container text-center text-md-start">
        <div className="row">
          {/* Logo & About */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="fw-bold d-flex align-items-center gap-2">
              <img
                src="https://github-production-user-asset-6210df.s3.amazonaws.com/96366499/431213027-065a8bec-9e87-484a-a005-7567be8bfaeb.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250408%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250408T062049Z&X-Amz-Expires=300&X-Amz-Signature=7c86db19d5d7d8df8a3ded7ae531fb258d3d1d2e809d8f21919d9a06d0a019cf&X-Amz-SignedHeaders=host"
                alt="logo"
                width="40"
                height="40"
                className="rounded-circle"
              />
              <span style={{ color: "#00287A" }}>Least Action</span>
            </h6>

            <p>
              Designed and built with 💖 by the Least Action team — your trusted
              service partner in turning wedding dreams into reality.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="fw-bold">Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#dashboard" className="text-decoration-none text-dark">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#about" className="text-decoration-none text-dark">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-decoration-none text-dark">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-decoration-none text-dark">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Guides */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="fw-bold">Guides</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Get Started
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Planner Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Vendor Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="fw-bold">Community</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Forum
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <hr className="my-3" />
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <p className="text-muted small mb-0">
            © {new Date().getFullYear()} Least Action. All rights reserved.
          </p>
          <div className="d-flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary fs-5"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark fs-5"
            >
              <i className="bi bi-twitter-x"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-danger fs-5"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
