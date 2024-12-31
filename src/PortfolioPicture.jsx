import React, { useState, useEffect } from "react";

function PortfolioPicture() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200); // Typing speed in ms

  const texts = [
    "Alex Potiagalov",
    "A Software Developer",
    "A Future Tech Innovator",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[loopIndex % texts.length]; // Cycle through texts
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
      } else {
        setCurrentText((prev) => fullText.slice(0, prev.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopIndex((prev) => prev + 1); // Move to the next text
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopIndex, texts, typingSpeed]);

  return (
    <div className="portfolio-container">
      <div className="portfolio-picture">
        <img
          src="./src/assets/reactwebpfp.webp"
          alt="Profile"
          className="profile-image"
        />
      </div>
      <div className="portfolio-description">
        <h1 className="portfolio-heading">I'm {currentText}</h1>
        <p>
          As a Computer Science student at Simon Fraser University, currently
          pursuing a minor in Business, I’ve always been fascinated by the
          importance and power of technology and business. Growing up with
          parents in the tech industry, I developed a deep passion for
          cybersecurity, software development, and AI early on. Over the years,
          I’ve developed technical skills in Python, C, C#, C++, JavaScript,
          HTML, and CSS.
        </p>
        <p>
          Fluent in English and Russian, with conversational proficiency in
          French, I thrive in collaborative environments and love solving
          complex technical challenges. Outside of coding, I enjoy going to the
          gym, spending quality time with family and friends, fishing, and
          challenging myself with LeetCode problems. I’m also passionate about
          learning new languages and frameworks to continually improve my skills
          and stay ahead in the ever-evolving tech landscape.
        </p>
        <p>
          Beyond everything, I’m driven by the belief that technology can
          transform businesses and improve lives. My long-term dream is to
          combine my love for technology and business to drive impactful
          innovation in AI and software engineering.
        </p>
        <a
          href="/AlexPotiagalovResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          View My Resume
        </a>
      </div>
    </div>
  );
}

export default PortfolioPicture;
