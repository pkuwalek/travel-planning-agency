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
                <div className = 'imag-wrapper'>
                    <img src = {donkey} />
                    <img src = {sign} />
                </div>
                <div className = 'icon-wrapper'>
                    <a href = 'http://www.twitter.com' className = 'icon' target="_blank">
                        <FontAwesomeIcon icon = { faTwitter } size = '2x' />
                    </a>
                    <a href = 'http://www.facebook.com' className = 'icon' target="_blank">
                        <FontAwesomeIcon icon = { faFacebook } size = '2x' />
                    </a>
                    <a href = 'http://www.instagram.com' className = 'icon' target="_blank">
                        <FontAwesomeIcon icon = { faInstagram } size = '2x' />
                    </a>
                    <a href = 'http://www.youtube.com' className = 'icon' target="_blank">
                        <FontAwesomeIcon icon = { faYoutube } size = '2x' />
                    </a>
                </div>
            </div>
        </div>
        <div className = 'author'>Created by Paula Kuwalek 2020</div>
    </div>
  );
};

export default Footer;