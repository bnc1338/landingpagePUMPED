import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Make sure you have this CSS file for styling
import screenshotA from "../../../src/assets/screenshotA.png";
import screenshotB from "../../../src/assets/screenshotB.png";
import screenshotC from "../../../src/assets/screenshotC.png";
import screenshotD from "../../../src/assets/screenshotD.png";
import appStoreLogo from "../../../src/assets/appstore1.png"; // Import your App Store logo
import playStoreLogo from "../../../src/assets/playstore1.png"; // Import your Play Store logo

const Carousel = ({screenWidth}) => {
  // Define your image paths and the corresponding texts
  const slides = [
    {
      image: screenshotA,
      title: "Pump",
      description: "Show off your wildest pumps wherever you are, and get rewarded!"
    },
    {
      image: screenshotB,
      title: "Post it",
      description: "Get noticed for your hard work and rise to the top!"
    },
    {
      image: screenshotC,
      title: "Socialize",
      description: "Network in every gym and compete for rewards!"
    },
    {
      image: screenshotD,
      title: "Team up",
      description: "Conquer with your clan and achieve greatness together!"
    }
  ];

  // State to keep track of the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Set up an interval to change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 10000); // 5000 milliseconds = 5 seconds

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div className="mid">
      <div className="left">
        <div className="carousel">
          <button className="carousel-btn left" onClick={prevSlide}>
            &#8249;
          </button>
          <img
            src={slides[currentIndex].image}
            width={screenWidth > 860 ? 300 : 200}
            style={{ borderRadius: 20 }}
            alt="screenshot"
          />
          <button className="carousel-btn right" onClick={nextSlide}>
            &#8250;
          </button>
        </div>
      </div>
      <div className="right">
        <h1>{slides[currentIndex].title}</h1>
        <p>{slides[currentIndex].description}</p>
        
        {/* Fixed App Store and Play Store logos */}
        <div className="store-logos">
          <a href="https://apps.apple.com/app/idYOUR_APP_ID" target="_blank" rel="noopener noreferrer">
            <img src={appStoreLogo} alt="App Store" width={25} />
          </a>
          <a href="https://play.google.com/store/apps/details?id=YOUR_APP_ID" target="_blank" rel="noopener noreferrer">
            <img src={playStoreLogo} alt="Play Store" width={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
