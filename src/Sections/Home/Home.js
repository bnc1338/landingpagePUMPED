import './Home.css';
import { useEffect, useState } from 'react';
import mockup1 from "../../assets/mockup1.png";
import mockup2 from "../../assets/mockup2.png";
import mockup3 from "../../assets/mockup3.png";
import logo from "../../assets/PUMPED_logoBLACK.png";
function Home({usersCount}) {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleJoinClick = () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
    };

    return (
        <div className='Home'>
            <div className='home-container'>
                <h1>Let's make fitness</h1><h1>great again</h1>
                <button
                    href="#"
                    class="custom-button"
                    onClick={handleJoinClick}
                    >
                    <span class="hover-effect"></span>
                    <div class="icon-text">
                        <span class="text-white">Join the Revolution</span>
                    </div>
                    <div class="stats">
                        <svg
                        class="star-icon"
                        fill="rgba(107, 107, 107, 0.8)"
                        viewBox="0 0 24 24"
                        width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                        fill="rgba(107, 107, 107, 0.8)" stroke="none">
                        <path d="M2377 5104 c-93 -14 -240 -60 -322 -101 -151 -75 -310 -209 -414
                        -348 -118 -156 -205 -387 -219 -582 -16 -225 20 -410 118 -608 165 -334 471
                        -560 840 -620 278 -45 560 15 801 170 292 189 492 521 517 862 16 219 -20 409
                        -112 598 -91 185 -225 341 -388 448 -105 70 -161 97 -274 136 -169 58 -364 74
                        -547 45z"/>
                        <path d="M2320 2545 c-358 -44 -699 -184 -992 -406 -106 -81 -286 -260 -366
                        -366 -231 -305 -371 -653 -411 -1025 -23 -212 -12 -325 45 -444 59 -125 178
                        -229 313 -276 l66 -23 1585 0 1585 0 66 23 c135 47 254 151 313 276 57 119 68
                        232 45 444 -40 372 -180 720 -411 1025 -80 106 -260 285 -366 366 -426 323
                        -958 469 -1472 406z"/>
                        </g>
                        </svg>
                        <span class="counter">{usersCount}/1000</span>
                    </div>
                    </button>
                <div className='mockups'>
                    {screenWidth>600 ? 
                    <>
                    <img src={mockup1} alt='mockup1' width={screenWidth>860 ? 280 : 200}/>
                    <img className='middle' src={mockup2} alt='mockup1' width={screenWidth>860 ? 280 : 200}/>
                    <img src={mockup3} alt='mockup1' width={screenWidth>860 ? 280 : 200}/>
                    </> 
                    :
                    <img className='middle' src={mockup2} alt='mockup1' width={280}/>
                    }
                </div>
                <h5>Introducing</h5>
                <img src={logo} alt="Logo" width={screenWidth>860 ? 420 : 320} />
            </div>
        </div>
    );
}
export default Home;