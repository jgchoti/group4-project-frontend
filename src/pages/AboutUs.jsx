import React from 'react';
import '../components/styles/AboutUs.css';
import Slogan from '../components/Slogan';

// Importar la imagen correctamente
import libraryImage from '../assets/About_us.jpg'; // Asegúrate de que esta ruta sea correcta

const AboutUs = () => {
  return (
    <>
      <Slogan />
      <div className="about-us-container">
        {/* Texto explicativo */}
        <div className="about-us-text">
          <h1>About Us</h1>
          <p>
            We are a non-profit organization dedicated to promoting reading and giving books a second life.
            Our mission is to reduce waste and ensure that books, instead of being discarded in landfills,
            find new homes with readers who will cherish them. Through our platform, we connect book lovers
            and promote sustainability by encouraging the reuse of books.
          </p>
        </div>

        {/* Imagen de libros o biblioteca */}
        <div className="about-us-image">
          <img src={libraryImage} alt="Library or Books" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
