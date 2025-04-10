import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SampleProjects.css";

const sampleProjects = [
  {
    title: "Book App",
    description:
      "A smart and seamless app to explore, read, and organise your favourite books – anytime, anywhere..",
    imageUrl:
      "https://img.freepik.com/free-vector/audio-books-isometric-composition-with-character-female-librarian-with-book-shelves-inside-smartphone-screen-frame-vector-illustration_1284-80591.jpg",
    demoUrl: "https://book-appgd.netlify.app/",
  },
  {
    title: "Wild Lens Tourism",
    description:
      "Explore nature up close with Wild Lens Tourism – your gateway to the wild.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr-sXQXQmL8Gu04dKsf_-RSuuVrjxMJPCDkQ&s",
    demoUrl: "https://tubular-horse-ae26a5.netlify.app/home",
  },
  {
    title: "Counselling System",
    description:
      "An easy-to-use platform for booking confidential counselling sessions with qualified mental health professionals, anytime, anywhere",
    imageUrl:
      "https://img.freepik.com/premium-vector/psychological-counseling-concept-psychological-assistance-service-vector-illustration-flat_186332-972.jpg",
    demoUrl: "http://kaviyab-capstone-ft.netlify.app/login",
  },
  {
    title: "Tamil Letters Learning",
    description:
      "Learn Tamil letters – Uyir (vowels), Mei (consonants), and Uyirmei (combined letters) with pronunciation and simple examples.",
    imageUrl:
      "https://i.ytimg.com/vi/Xqs8NHDRDrM/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AHWBIAC4AOKAgwIABABGH8gRigdMA8=&rs=AOn4CLC5_ycFGErcmgpPz2DbLXjRNW5xdg",
    demoUrl: "https://gdgiri.github.io/tamil-letters1/",
  },
  {
    title: "Tour Planning",
    description:
      "Plan your perfect trip with ease – customize destinations, set budgets, and manage your itinerary all in one place.",
    imageUrl:
      "https://cdn.vectorstock.com/i/500p/84/27/honeymoon-trip-planning-man-and-woman-vector-55318427.jpg",
    demoUrl: "https://capable-palmier-4f3501.netlify.app/",
  },
  {
    title: "Recipe App",
    description: "Find, cook, and save tasty recipes in one easy app.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBx9_mfRBUTHUS_CrkqmbMBBEfrBxBqm3MRw&s",
    demoUrl: "https://kitchen-whiz.netlify.app/",
  },
];

const SampleProjects = () => {
  const defaultCount = 3;
  const [visibleCount, setVisibleCount] = useState(defaultCount);

  useEffect(() => {
    const savedCount = localStorage.getItem("visibleCount");
    if (savedCount) {
      setVisibleCount(Number(savedCount));
    }
  }, []);

  const isAllVisible = visibleCount >= sampleProjects.length;

  const handleToggleProjects = () => {
    const newCount = isAllVisible ? defaultCount : sampleProjects.length;
    setVisibleCount(newCount);
    localStorage.setItem("visibleCount", newCount);
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
