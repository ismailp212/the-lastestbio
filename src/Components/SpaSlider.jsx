import React, { useState, useEffect } from 'react';
import '../Style/SpaSlider.css';
import Spa1 from '../assets/Blue-Minimalist-Quotes-Work-Hard-Desktop-Wallpaper.webp';
import Spa2 from '../assets/Relaxation-massage-den-haag-1024x576.webp';
import Spa3 from '../assets/desktop-wallpaper-spa-massage-spa.jpg';
import Spa4 from '../assets/relaxing-spa-orchids-and-bamboo-BRYn-1024x576-MM-80.webp';

const SpaSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    Spa1,
    Spa2,
    Spa3,
    Spa4
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  const handleImageChange = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="slider-container">
      <div className="slider-overlay">
        <h2>BIOMIX<span>Spa</span></h2>
        <hr />
        <p>Experience the ultimate relaxation with our professional massage services. Book your appointment today!</p>
        <button className="reservation-button">Make a Reservation</button>
      </div>
      <div className="slider-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`
              ${index === currentImage ? 'active' : ''}
              ${index === currentImage - 1 ? 'previous' : ''}
              ${index === currentImage + 1 ? 'next' : ''}
            `}
          />
        ))}
      </div>
      <div className="slider-buttons">
        {images.map((_, index) => (
          <button
            key={index}
            className={index === currentImage ? 'active' : ''}
            onClick={() => handleImageChange(index)}
          />
        ))}
      </div>
    </div>
  );
};


export default SpaSlider;
