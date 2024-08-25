import './AlertLine.css';
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

function AlertLine() {

    return (
        <div className='AlertLine'>
            <Marquee className="Marquee" pauseOnHover={true} speed={100} gradient={false} pauseOnClick={false}>
              <h1 className='unselectable'>⚠️ The Unrealest 🍑Picture on Earth ⚠️</h1>
              <h1 className='unselectable'>⚠️ The Unrealest 🍑Picture on Earth ⚠️</h1>
            </Marquee>
        </div>
    );
}
export default AlertLine;