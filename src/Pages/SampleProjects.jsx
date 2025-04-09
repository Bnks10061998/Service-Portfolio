import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SampleProjects.css"; // 👈 Import your custom styles

const sampleProjects = [
  {
    title: "AC Repair & Servicing",
    description: "Expert AC repair, maintenance, and gas refilling services.",
    imageUrl:
      "https://t3.ftcdn.net/jpg/06/16/40/80/240_F_616408016_aFctjJXlWr9KXvJQhsJYaYHJWHLtEerS.jpg",
    demoUrl: "#",
  },
  {
    title: "Beauty Services (Men's & Women's Grooming)",
    description: "Salon-like grooming services at your doorstep.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmMxLOzdqgH7q07qg3OKK9sI2bcWfzizJybMlv_Q5_nBxxx8opjnwksIR1DOBR3uVVzlA&usqp=CAU",
    demoUrl: "#",
  },
  {
    title: "Electrical Repairs & Fittings",
    description: "Skilled electricians for all types of wiring & fittings.",
    imageUrl:
      "https://media.istockphoto.com/id/1409755712/photo/i-need-to-cut-this-cable-here.jpg?s=612x612&w=0&k=20&c=d5ItjKo_0e-ZPoCXDqbX_omyNSeNpLghhuqrduegOOU=",
    demoUrl: "#",
  },
  {
    title: "House Cleaning",
    description: "Deep cleaning services for your entire home.",
    imageUrl:
      "https://content.jdmagicbox.com/v2/comp/jaipur/j3/0141px141.x141.250124142217.g6j3/catalogue/shyam-house-deep-cleaning-jaipur-vaishali-nagar-jaipur-housekeeping-services-aez0gwkmf7.jpg",
    demoUrl: "#",
  },
  {
    title: "Car Washing",
    description: "Professional doorstep car wash with eco-friendly products.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwAe48OmE8AfnamDWuiTKc77NzsSpvnsfLEA&s",
    demoUrl: "#",
  },
  {
    title: "CCTV Installation & Repair",
    description: "Secure your home with expert CCTV setup and maintenance.",
    imageUrl:
      "https://media.istockphoto.com/id/618550358/photo/mature-technician-installing-camera-on-wall-with-screwdriver.jpg?s=612x612&w=0&k=20&c=nSf-eXGXz59QM1Ieqwx-W0DLdZdVhkW5EccuQ4vVuRw=",
    demoUrl: "#",
  },
];

const SampleProjects = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const isAllVisible = visibleCount >= sampleProjects.length;

  const handleToggleProjects = () => {
    setVisibleCount(isAllVisible ? 3 : sampleProjects.length);
  };

  return (
    <div className="sample-container">
      <div className="container my-5">
        <h2 className="sample-heading">Our Projects</h2>
        <div className="row justify-content-center">
          {sampleProjects.slice(0, visibleCount).map((project, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100 sample-card">
                <img
                  src={project.imageUrl}
                  className="card-img-top sample-img"
                  alt={project.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title sample-title">{project.title}</h5>
                  <p className="card-text sample-desc">{project.description}</p>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn royal-btn mt-auto"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn royal-btn mt-4" onClick={handleToggleProjects}>
            {isAllVisible ? "Show Less" : "Load More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SampleProjects;
