import React from 'react';
import Logoimg from '../images/logo.png';

const LogoHeader = () => {
    return (
       <div className="logo-header">
          <div className="logo-center">
              <img src={Logoimg}/>
          </div>
       </div>
    )
}

export default LogoHeader;