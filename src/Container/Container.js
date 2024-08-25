import './Container.css';
import { useEffect, useState } from 'react';

function Container({children}) {

    return (
        <div className='Container'>
           {children}
        </div>
    );
}
export default Container;