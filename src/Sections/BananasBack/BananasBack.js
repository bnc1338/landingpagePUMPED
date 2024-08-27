import './BananasBack.css';
import { useEffect } from 'react';
import truck from "../../assets/truck.png";
function BananasBack({children}) {

  return (
    <div className='BananasBack'>
      {children}
    </div>
  );
}

export default BananasBack;