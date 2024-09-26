import './Download.css';
import { useState, useEffect } from 'react';
import truck from "../../assets/truck.png";
import pumpedwhite from "../../../src/assets/pumpedWhite.png";
import appStore from "../../../src/assets/appStore.jpeg";
import googlePlay from "../../../src/assets/googlePlay.jpeg";
import phone from "../../../src/assets/sheets3.png";
import phone2 from "../../../src/assets/sheets2.png";
import phone3 from "../../../src/assets/sheets1.png";

function Download() {
  const [currentPhoneImage, setCurrentPhoneImage] = useState(phone);
  const images = [phone, phone2, phone3];
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhoneImage(prevImage => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [images]);

  return (
    <div className='Download'>
      <div className='upper'>
        <div className='left'>
            <h1>Get</h1>
            <img src={pumpedwhite} className='pumpedLogo' width={screenWidth > 860 ? 500 :300}/>
            <h1>on</h1>
            <h1>
              Android / iOS</h1>
            <div className='buttons'>
            <a href="https://apps.apple.com/app/pumped/id6505126443" target="_blank" rel="noopener noreferrer">
              <img src={appStore} width={screenWidth > 860 ? 200 :100} style={{borderRadius:screenWidth>860 ?8:4}} />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.ThePumped" target="_blank" rel="noopener noreferrer">
              <img src={googlePlay} width={screenWidth > 860 ? 200 :100} style={{borderRadius:screenWidth>860 ?8:4}} />
            </a>
            </div>
        </div>
        <div className='right'>
            <img src={currentPhoneImage} width={screenWidth >860 ? 330 : 250}/>
        </div>
      </div>
      <div className='down'>
        <h5>Powered By PUMPED.</h5>
        <h6>All rights reserved</h6>
      </div>
    </div>
  );
}

export default Download;
