import './BananasBack.css';
import { useState, useEffect, useRef } from 'react';
import truck from "../../assets/truck.png";
import instagramLogo from '../../assets/insta1.png'; 

function BananasBack({ children }) {
  const [isScrolledPastHalf, setIsScrolledPastHalf] = useState(false);
  const bananasBackRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY; // Current vertical scroll position
            const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
            
            if (scrollPosition > windowHeight / 3) {
                setIsVisible(true); // Show when scrolled past half
            } else {
                setIsVisible(false); // Hide before that
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // Clean up the event listener on component unmount
        };
    }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = bananasBackRef.current;
      const rect = element.getBoundingClientRect();
      const halfHeight = rect.height / 3;

      if (rect.top <= -halfHeight) {
        setIsScrolledPastHalf(true);
      } else {
        setIsScrolledPastHalf(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={bananasBackRef}
      className={`BananasBack ${isScrolledPastHalf ? 'scrolled-half' : ''}`}
    >
      {children}
      {
        isVisible &&
     
      <a href="https://www.instagram.com/thepumpedapp/" target="_blank" rel="noopener noreferrer" className={`instagram-icon ${isVisible ? 'visible' : ''}`} >
        <img src={instagramLogo} alt="Instagram" width={30} />
      </a>
       }
    </div>
  );
}

export default BananasBack;
