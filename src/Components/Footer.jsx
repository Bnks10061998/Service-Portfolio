import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

const Footer = () => {
  return (
    <footer
      className="text-white pt-5 pb-4 border-top shadow-sm"
      style={{ backgroundColor: "#003A84" }}
    >
      <div className="container text-center text-md-start">
        <div className="row">
          {/* Logo & About */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
            <h6 className="fw-bold d-flex align-items-center gap-2">
              <img
                src="https://private-user-images.githubusercontent.com/96366499/431213027-065a8bec-9e87-484a-a005-7567be8bfaeb.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQxMjA5MjQsIm5iZiI6MTc0NDEyMDYyNCwicGF0aCI6Ii85NjM2NjQ5OS80MzEyMTMwMjctMDY1YThiZWMtOWU4Ny00ODRhLWEwMDUtNzU2N2JlOGJmYWViLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA0MDglMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNDA4VDEzNTcwNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTRiNmRhMmI1NDdhZjEzNTBjOWFmMjA0ZTFiZjVmYjI5ZjhiNzJjNGY2ZTUxM2I4ZjYyNDgyNGMwNjgwMGMwMjUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.rlFNtxOoQh-LuXq7NfZiclBnBl0ZRE_Vad9O015AZdg"
                alt="logo"
                width="40"
                height="40"
                className="rounded-circle"
              />
              <span style={{ color: "#FFF" }}>Least Action</span>
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
                <a
                  href="#dashboard"
                  className="text-decoration-none "
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-decoration-none "
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-decoration-none "
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-decoration-none "
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
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
                <a
                  href="#"
                  className="text-decoration-none "
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  Get Started
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none "
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  Planner Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none "
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  Vendor Tips
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none "
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
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
                <a
                  href="#"
                  className="text-decoration-none"
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-decoration-none "
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  Forum
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none "
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none "
                  style={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <hr className="my-3" />
        <div className="d-flex justify-content-between align-items-center flex-wrap px-5">
          <p className="text-white small mb-0">
            © {new Date().getFullYear()} Least Action. All rights reserved.
          </p>
          <div className="d-flex gap-3">
            {/* Facebook */}
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#003A84", // outer circle
              }}
            >
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "35px",
                  height: "35px",
                  backgroundColor: "#ffffff",
                }}
              >
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#003A84", fontSize: "18px" }}
                >
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
            </div>

            {/* Twitter */}
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#003A84",
              }}
            >
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "35px",
                  height: "35px",
                  backgroundColor: "#ffffff",
                }}
              >
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#000000", fontSize: "18px" }}
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#003A84",
              }}
            >
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: "35px",
                  height: "35px",
                  backgroundColor: "#ffffff",
                }}
              >
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#E1306C", fontSize: "18px" }}
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
