import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <h1>General Overview</h1>
        <p>
          Founded in 2024, <strong>BookMate</strong> is a non-profit dedicated to environmental
          sustainability through the recycling and redistribution of printed
          materials. We provide a digital platform for exchanging second-hand
          books, creating a circular economy that reduces waste. Our mission
          extends beyond recycling books; we aim to preserve forests, lower
          carbon footprints, and enhance access to knowledge.
        </p>
      </div>

      <div className="mission-section">
        <h1>Mission</h1>
        <p>
          Our mission centers on key principles for both readers and the
          environment:
        </p>
        <ul>
          <li>
            <strong>Virtual Recycling Park:</strong> An online platform for
            recycling and rediscovering books, reducing the demand for new
            printings.
          </li>
          <li>
            <strong>Preserve Resources:</strong> Encouraging book reuse to
            minimize new paper production and protect forests.
          </li>
          <li>
            <strong>Extend Book Lifespan:</strong> Ensuring unwanted books find
            new homes, reducing landfill waste.
          </li>
          <li>
            <strong>Accessibility:</strong> Offering affordable or free book
            exchanges to make knowledge accessible to everyone.
          </li>
          <li>
            <strong>Sustainable Practices:</strong> Educating users on
            eco-friendly reading habits, promoting second-hand and digital
            formats.
          </li>
        </ul>
      </div>

      <div className="about-section">
        <h1>Our Impact</h1>
        <p>
        <strong>BookMate</strong> reduces paper demand, cuts carbon emissions, and promotes
          sustainable reading practices, making literature and educational
          resources more accessible and affordable.
        </p>
      </div>

      <div className="about-section">
        <h1>Our Community</h1>
        <p>
        <strong>BookMate</strong> is a community of eco-conscious readers and advocates working
          towards a sustainable future. Every book shared brings us closer to
          our goal.
        </p>
      </div>

      <div className="about-section">
        <h1>Our Volunteers</h1>
        <p>
        <strong>BookMate</strong>is powered by passionate volunteers committed to reducing
          waste and promoting literacy. Their dedication ensures that books find
          new owners and our mission reaches as many people as possible.
          Together, we believe that sharing a book can have a significant
          impact.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
