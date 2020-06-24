import React from 'react';
import './footer.scss';
import thumbnail from './../../thumbnail.jpg';
import donkey from './../../donkey.jpg';
import sign from './../../sign.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  return (
    <div className = 'footer-wrapper'>
        <div className = 'content-wrapper'>
            <div className = 'left-part'>
                <h1>YouTube</h1>
                <img src = {thumbnail} />
            </div>
            <div className = 'right-part'>
                <h1>Let's Connect</h1>
                <img src = {donkey} />
                <img src = {sign} />
                <FontAwesomeIcon icon = { faTwitter }/>
                <FontAwesomeIcon icon = { faFacebook }/>
                <FontAwesomeIcon icon = { faInstagram }/>
                <FontAwesomeIcon icon = { faYoutube }/>
            </div>

        </div>
        <div>Created by Paula Kuwalek 2020</div>
    </div>
  );
};

export default Footer;