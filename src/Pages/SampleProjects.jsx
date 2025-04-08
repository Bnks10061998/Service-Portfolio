import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const sampleProjects = [
  {
    title: "Tamil Letters",
    description: "Developed a responsive site with modern JavaScript features.",
    imageUrl:
      "https://github.com/user-attachments/assets/4edac14a-35e5-44a6-9116-c3c914458542",
    demoUrl: "https://gdgiri.github.io/tamil-letters1/",
  },
  {
    title: "Book App",
    description: "Modern portfolio using React and Bootstrap.",
    imageUrl:
      "https://github.com/user-attachments/assets/944262b7-5e52-4e13-a36e-5ab0e7b0ab17",
    demoUrl: "https://book-appgd.netlify.app/",
  },

  {
    title: "Crypto Trading Platform",
    description:
      "Website 1 allows users to buy or sell BTC-USD, and when a transaction is made, it sends data to Website 2 for backend processing.",
    imageUrl:
      "https://github.com/user-attachments/assets/4ae28e6d-051d-4eb5-9425-56630b606781",
    demoUrl: "https://trading-protocol-design.netlify.app/",
  },
  {
    title: "Crypto Transaction Dashboard",
    description:
      "Website 2 processes and stores transaction data, then forwards it to Website 3, which displays trade history in real-time.",
    imageUrl:
      "https://github.com/user-attachments/assets/d39d681d-4d6f-44ef-a512-4bf8c499df47",
    demoUrl: "https://trading-protocol-design2.netlify.app/",
  },
];

const SampleProjects = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const isAllVisible = visibleCount >= sampleProjects.length;

  const handleToggleProjects = () => {
    setVisibleCount(isAllVisible ? 3 : sampleProjects.length);
  };

  const royalButtonStyle = {
    backgroundColor: "#00287A",
    color: "white",
    border: "none",
    padding: "10px 24px",
    fontWeight: "500",
    borderRadius: "8px",
    transition: "all 0.3s ease",
  };

  const royalHoverStyle = {
    backgroundColor: "#3555c5",
  };

  const cardStyle = {
    borderRadius: "16px",
    overflow: "hidden",
    transition: "all 0.3s ease-in-out",
  };

  const handleCardHover = (e) => {
    e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
    e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 40, 122, 0.15)";
  };

  const handleCardLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0) scale(1)";
    e.currentTarget.style.boxShadow = "0 .5rem 1rem rgba(0,0,0,.15)";
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 fw-bold" style={{ color: "#00287A" }}>
        Our Projects
      </h2>
      <div className="row justify-content-center">
        {sampleProjects.slice(0, visibleCount).map((project, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div
              className="card h-100 shadow-sm"
              style={cardStyle}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <img
                src={project.imageUrl}
                className="card-img-top"
                alt={project.title}
                style={{
                  height: "220px",
                  objectFit: "cover",
                  borderBottom: "1px solid #eee",
                }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-primary">{project.title}</h5>
                <p className="card-text flex-grow-1 text-muted">
                  {project.description}
                </p>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn mt-auto"
                  style={royalButtonStyle}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor =
                      royalHoverStyle.backgroundColor)
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor =
                      royalButtonStyle.backgroundColor)
                  }
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          className="btn mt-4"
          style={royalButtonStyle}
          onClick={handleToggleProjects}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = royalHoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = royalButtonStyle.backgroundColor)
          }
        >
          {isAllVisible ? "Show Less" : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default SampleProjects;
