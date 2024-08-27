import './Download.css';
import { useEffect } from 'react';
import truck from "../../assets/truck.png";
import pumpedwhite from "../../../src/assets/pumpedWhite.png";
import appStore from "../../../src/assets/appStore.jpeg";
import googlePlay from "../../../src/assets/googlePlay.jpeg";
import phone from "../../../src/assets/phone.png";

function Download() {

  return (
    <div className='Download'>
      <div className='upper'>
        <div className='left'>
            <h1>Get</h1>
            <img src={pumpedwhite} className='pumpedLogo' width={500}/>
            <h1>on Android / iOS</h1>
            <div className='buttons'>
              <img src={appStore} width={200} style={{borderRadius:8}} />
              <img src={googlePlay} width={200} style={{borderRadius:8}} />
            </div>
        </div>
        <div className='right'>
            <img src={phone} width={400}/>
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