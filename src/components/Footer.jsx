import React from 'react'
import Zuri from '../images/Vector.png';
import I4G from '../images/I4G.png';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <img className='zuri' src={Zuri} alt="zuri" />
        <p>HNG Internship 9 Frontend Task</p>
        <img className='i4g' src={I4G} alt="ingresive for good" />
      </div>
    </footer>
  )
}

export default Footer