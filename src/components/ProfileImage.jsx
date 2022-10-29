import React from 'react'
import RajissCtrl from '../images/rajiss-ctrl.jpg';
import Share from '../images/sharebutton.png';

const ProfileImage = () => {
  return (
    <header>
        <div className="rajissImg">
          <img id='profile_img' src={RajissCtrl} alt="RajissCtrl" />
          <h1 id='twitter'>Raji S. Sanjo</h1>
          <div id="slack"></div>
          <img className='share' src={Share} alt="share" />
        </div>
    </header>
  )
}

export default ProfileImage