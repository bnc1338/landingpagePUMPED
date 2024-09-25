import './Home.css';
import { useEffect, useState } from 'react';
import mockup1 from "../../assets/mockup1.png";
import mockup2 from "../../assets/mockup2.png";
import mockup3 from "../../assets/mockup3.png";
import logo from "../../assets/PUMPED_logoBLACK.png";
function Home() {

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
                <button onClick={handleJoinClick}>JOIN NOW!</button>
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