import './Showcase.css';
import { useEffect, useState } from 'react';
import flyingads from "../../../src/assets/flyingadslog.png";
import sciteclogo from "../../../src/assets/sciteclogo.png";
import Marquee from 'react-fast-marquee';
import screenshots from "../../../src/assets/screenshots1.png";
import screenshotA from "../../../src/assets/Group 4.png";
import screenshotB from "../../../src/assets/ProfileScreenFeed.png";
import prod1 from "../../../src/assets/prod1.png";
import prod2 from "../../../src/assets/product2.png";
import prod3 from "../../../src/assets/product3.png";
import prod4 from "../../../src/assets/product4.png";
import prod5 from "../../../src/assets/product6.png";
import claim from "../../../src/assets/Vector-3.png";
import Carousel from './Carousel';

function Showcase() {
  const [isPressed, setIsPressed] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);

      // Clean up the event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <div className='Showcase'>
     <div className='mid'>
          {/* <img src={screenshotB} width={200} style={{borderRadius:20}}/>
          <img src={screenshotA} width={200} style={{borderRadius:20, position:"absolute", marginLeft:"-40px", marginTop:"20px"}}/> */}
          <Carousel screenWidth={screenWidth}/>
        {/* <div className='right'>
          <h1>
            Connect with your gymbros
          </h1>
          <p>
            Keep connected with all your gym buddies, even when you can't train together, including those across the globe.
          </p>
        </div> */}
     </div>
    <div className='levels'>
      <h1>Level Up and Claim!</h1>
      <p>All you have to do is PUMP and post!</p>
      <div className='content'>
        {
          screenWidth>860 &&
          <div className='product'>
          <p style={{fontSize:12}}>LEVEL 3</p>
            <img src={prod1} alt='prod1' width={screenWidth>860 ? 120 : 90}/>
          </div>
        }
        <div className='product'>
        <p style={{fontSize:screenWidth>860 ? 17 :13}}>LEVEL 4</p>
          <img src={prod2} alt='prod1' width={screenWidth>860 ?  screenWidth>540 ? 170 : 130 :100}/>
        </div>
        <div className='product'>
        <p style={{fontSize: screenWidth>860 ? 22 : 18}}>LEVEL 5</p>
          <img src={prod3} alt='prod1' width={screenWidth>860 ? screenWidth>540 ? 220 : 180 : 120}/>
        </div>
        <div className='product'>
        <p style={{fontSize: screenWidth>860 ? 17 :13}}>LEVEL 6</p>
          <img src={prod4} alt='prod1' width={screenWidth>860 ? screenWidth>540 ?170 : 130 :100}/>
        </div>
        {
          screenWidth>860 &&
          <div className='product'>
            <p style={{fontSize:12}}>LEVEL 7</p>
            <img src={prod5} alt='prod1' width={screenWidth>860 ? 120 : 90}/>
          </div>
        }
      </div>
      <img
        src={claim}
        alt="claim"
        width={150}
        style={{
          cursor: "pointer",
          transform: isPressed ? "scale(0.95)" : "scale(1)",
          transition: "transform 0.1s ease-in-out"
        }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
      />
    </div>
    <div className='low'>
      <h2>Special thanks to our <b>partners</b>!</h2>
    </div>
    <Marquee className="partners" pauseOnHover={false} speed={30} gradient={false} pauseOnClick={false} >
    <div className='icons'>
      <a href="https://www.scitecnutrition.com" target="_blank" rel="noopener noreferrer" style={{cursor:"pointer"}}>
        <img src={sciteclogo} width={300} />
      </a>
      <a href="https://www.flyingads.hu" target="_blank" rel="noopener noreferrer" style={{cursor:"pointer"}}>
        <img src={flyingads} width={300} />
      </a>
    </div>
    <div className='icons'>
      <a href="https://www.scitecnutrition.com" target="_blank" rel="noopener noreferrer" style={{cursor:"pointer"}}>
        <img src={sciteclogo} width={300} />
      </a>
      <a href="https://www.flyingads.hu" target="_blank" rel="noopener noreferrer" style={{cursor:"pointer"}}>
        <img src={flyingads} width={300} />
      </a>
    </div>
    </Marquee>
    </div>
  );
}

export default Showcase;
