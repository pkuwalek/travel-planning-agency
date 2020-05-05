import React, { useState } from 'react';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const basicClassName = 'navbar';
  const responsiveClassName = 'navbar responsive';

  let [ activeClass, setActiveClass ] = useState(basicClassName);

  const burger = () => {
    setActiveClass(activeClass === basicClassName ? responsiveClassName : basicClassName);
  }

  return (
    <div className="navContainer">
      <h1 className='logo'>travel planning</h1>
      <div className={ activeClass }>
        <a href='#home'>Home</a>
        <a href='#shop'>Shop</a>
        <a href='#contact'>Contact</a>
        <a href='#about'>About</a>
        <a href='#' className='icon' onClick={ burger }>
          <FontAwesomeIcon icon={ faBars }/>
        </a>
      </div>
    </div>
  );
};

export default Navbar;