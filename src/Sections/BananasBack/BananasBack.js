import './BananasBack.css';
import { useState, useEffect, useRef } from 'react';
import truck from "../../assets/truck.png";

function BananasBack({ children }) {
  const [isScrolledPastHalf, setIsScrolledPastHalf] = useState(false);
  const bananasBackRef = useRef(null);

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
    </div>
  );
}

export default BananasBack;
