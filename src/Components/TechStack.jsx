import React from "react";
import "./TechStack.css";

const techStack = {
  frontend: [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "Flutter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    { name: "REST API", icon: "https://img.icons8.com/ios-filled/50/api.png" },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
  ],
  Design: [
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Adobe XD",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
    },
    {
      name: "Photoshop",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    },
    {
      name: "Illustrator",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
    },
    {
      name: "Premiere Pro",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Postman",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
  ],
};

const TechStack = () => {
  return (
    <section className="techstack-section" id="techstack">
      <div className="container-fluid py-5 scroll-item">
        <div className="row w-100 align-items-center justify-content-center px-5">
          {/* Left: Info */}
          <div className="col-md-5 px-5">
            <h2 className="display-5 fw-bold mb-4">Our Tech Stack</h2>
            <p>
              Our tech stack is carefully curated to build fast, secure, and
              scalable digital solutions. Whether it’s a dynamic web platform, a
              mobile app, or a powerful backend service — we use the best tools
              in the industry.
            </p>
            <p className="mt-3">
              From modern UI/UX design systems to cutting-edge cloud and
              database tools, we ensure every solution is built for performance
              and excellence.
            </p>
          </div>

          {/* Right: Tech Cards */}
          <div className="col-md-6 offset-md-1 px-3">
            {Object.entries(techStack).map(([category, items]) => (
              <div key={category} className="mb-4">
                <h5 className={`text-capitalize ${category}-title`}>
                  {category}
                </h5>
                <div className="d-flex flex-wrap gap-3 mt-2">
                  {items.map((tech, index) => (
                    <div key={index} className="glass-card">
                      <img src={tech.icon} alt={tech.name} />
                      <small>{tech.name}</small>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
