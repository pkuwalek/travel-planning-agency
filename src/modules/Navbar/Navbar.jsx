import React, { useState } from 'react';
import './navbar.scss';
import logo from './../../logo.png';
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
      <div className='logoContainer'>
        <img src={logo} className='logo'></img>
      </div>
      <div className={ activeClass }>
        <a href='#home'>Home</a>
        <a href='#shop'>Shop</a>
        <a href='#contact'>Contact</a>
        <a href='/about'>About</a>
        <a href='#' className='icon' onClick={ burger }>
          <FontAwesomeIcon icon={ faBars }/>
        </a>
      </div>
    </div>
  );
};

export default Navbar;