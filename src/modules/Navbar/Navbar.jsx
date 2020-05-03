import React from 'react';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const burger = () => {
        const x = document.getElementById('nav');
        if (x.className === 'navbar') {
          x.className += ' responsive';
        } else {
          x.className = 'navbar';
        }
      }
  
    return (
      <div>
          <div className='navbar' id='nav'>
                <a href='#home'>Home</a>
                <a href='#shop'>Shop</a>
                <a href='#contact'>Contact</a>
                <a href='#about'>About</a>
                <a href='javascript:void(0);' className='icon' onClick={ burger() }>
                    <FontAwesomeIcon className='burgerIcon' icon={faBars}/>
                </a>
          </div>
      </div>
    );
  };
  
  export default Navbar;