import './Competition.css';
import { useEffect } from 'react';
import truck from "../../assets/truck.png";
function Competition() {

  return (
    <div className='Competition'>
      <div className='container-header'>
        <h4>We search</h4>
        <h1>The Most Unreal 🍑Picture on Earth</h1>
      </div>
      <div className='container-mid'>
        <p>
        This is a contest to find the most unreal 🍑 pic on Earth. We want something that blows minds. 
        It's got to be next-level, jaw-dropping, out-of-this-world. Just pure wow. 
        We're looking for you to show us something that’s straight-up unreal and unforgettable. 
        So, post your craziest, most unexpected snap of your 🍑, and you could win a 500 euro Sciatic Nutrition voucher. .That's the deal. Let’s see what you've got!
        </p>
        <h3>🎉Get Rewararded by🎉</h3>
        <div className='parallax'>
          {/* <img src={truck} alt='truck' width={1000} className="moving-truck" /> */}
        </div>
      </div>
    </div>
  );
}

export default Competition;