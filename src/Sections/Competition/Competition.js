import './Competition.css';
import { useEffect, useState } from 'react';
import truck from "../../assets/truck.png";

function Competition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const truckPosition = Math.max(0, window.innerWidth - scrollPosition * 0.5);

  return (
    <div className='Competition'>
      {/* ... other parts of your component ... */}
      <div className='parallax'>
        <h1>Get Rewarded By</h1>
        <img 
          src={truck} 
          alt='truck' 
          className="moving-truck" 
          style={{
            transform: `translateX(${truckPosition}px)`
          }}
        />
        <p className="debug-info">
          Scroll position: {scrollPosition}px<br/>
          Truck position: {truckPosition}px
        </p>
      </div>
    </div>
  );
}

export default Competition;