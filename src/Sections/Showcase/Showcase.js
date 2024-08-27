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

function Showcase() {
  return (
    <div className='Showcase'>
     <div className='upper'>
        <div className='left'>
            <h1>
                "Pump High Touch The Sky"
            </h1>
            <p>
              Stop just “going to the gym”.Put all your effort and motivation to work and try to sqeeze the living fuck out of your muscles.
              <br/>
              The Worlds most epic socializing application created for healthy people.
            </p>
        </div>
        <div className='right'>
          <img src={screenshots} width={300}/>
        </div>
     </div>
     <div className='mid'>
        <div className='left'>
          <img src={screenshotB} width={200} style={{borderRadius:20}}/>
          <img src={screenshotA} width={200} style={{borderRadius:20, position:"absolute", marginLeft:"-40px", marginTop:"20px"}}/>
        </div>
        <div className='right'>
          <h1>
            Connect with your gymbros
          </h1>
          <p>
            Keep connected with all your gym buddies, even when you can't train together, including those across the globe.
          </p>
        </div>
     </div>
    <div className='levels'>
      <h1>Level Up and Claim!</h1>
      <p>All you have to do is PUMP and post!</p>
      <div className='content'>
        <div className='product'>
        <p style={{fontSize:12}}>LEVEL 3</p>
          <img src={prod1} alt='prod1' width={120}/>
        </div>
        <div className='product'>
        <p style={{fontSize:17}}>LEVEL 4</p>
          <img src={prod2} alt='prod1' width={170}/>
        </div>
        <div className='product'>
        <p style={{fontSize:22}}>LEVEL 5</p>
          <img src={prod3} alt='prod1' width={220}/>
        </div>
        <div className='product'>
        <p style={{fontSize:17}}>LEVEL 6</p>
          <img src={prod4} alt='prod1' width={170}/>
        </div>
        <div className='product'>
          <p style={{fontSize:12}}>LEVEL 7</p>
          <img src={prod5} alt='prod1' width={120}/>
        </div>
      </div>
      <img src={claim} alt="claim" width={150} style={{cursor:"pointer"}}/>
    </div>
    <Marquee className="partners" pauseOnHover={false} speed={30} gradient={false} pauseOnClick={false} >
      <div className='icons'>
        <img src ={sciteclogo} width={300}/>
        <img src ={flyingads} width={300}/>
      </div>
      <div className='icons'>
        <img src ={sciteclogo} width={300}/>
        <img src ={flyingads} width={300}/>
      </div>
    </Marquee>
    </div>
  );
}

export default Showcase;