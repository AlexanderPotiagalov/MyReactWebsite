import React from "react";
import Header from "./Header.jsx";
import ProfilePicture from "./PortfolioPicture.jsx";
import Footer from "./Footer.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";
import ContactMe from "./ContactMe.jsx";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <section id="profile-picture">
        <ProfilePicture />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact-me">
        <ContactMe />
      </section>
      <Footer />
    </div>
  );
}

export default App;
