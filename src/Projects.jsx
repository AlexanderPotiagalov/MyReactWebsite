import React from "react";

function Projects() {
  const projectData = [
    {
      name: "Photon Dash Game",
      description:
        "A space-themed game where players navigate a photon through obstacles. Built using JavaScript, HTML, and CSS with interactive front-end gameplay.",
      imageUrl: "./src/assets/photon-dash-img.jpg", // Placeholder image
      link: "https://github.com/AlexanderPotiagalov/photon-dash", // Replace with actual link
      bgColor: "linear-gradient(135deg, #1e1f2d, #00bcd4, #ff0066)", // Galaxy-inspired background
    },
    {
      name: "AVL Tree Implementation",
      description:
        "A functional AVL Tree class in C++ with insertion, deletion, rebalancing, and height tracking optimized for logarithmic operations.",
      imageUrl: "./src/assets/avltree.webp", // Placeholder image
      link: "https://github.com/AlexanderPotiagalov/avl-tree", // Replace with actual link
      bgColor: "linear-gradient(135deg, #3498db, #2ecc71)", // Techy blue-green background
    },
    {
      name: "Mastermind Game Variant",
      description:
        "A C-based Mastermind game that provides feedback on guesses, featuring memory-efficient design validated by Valgrind.",
      imageUrl: "./src/assets/mastermind-img.webp", // Placeholder image
      link: "https://github.com/AlexanderPotiagalov/mastermind-game", // Replace with actual link
      bgColor: "linear-gradient(135deg, #8e44ad, #16a085)", // Purple-green background for mystery and strategy
    },
    {
      name: "Billboard Top 100 Songs Analysis",
      description:
        "A Python-based tool using Pandas to analyze trends and retrieve performance insights for artists and songs.",
      imageUrl: "./src/assets/billbordtop100-img.webp", // Placeholder image
      link: "https://github.com/AlexanderPotiagalov/billboard-analysis", // Replace with actual link
      bgColor: "linear-gradient(135deg, #f39c12, #e74c3c)", // Bright, engaging colors for analysis
    },
  ];

  return (
    <div className="projects-section">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div
            className="project-card"
            key={index}
            style={{ background: project.bgColor }}
          >
            <img
              src={project.imageUrl}
              alt={project.name}
              className="project-image"
            />
            <h3 className="project-title">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
