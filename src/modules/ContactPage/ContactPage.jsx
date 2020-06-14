import React from 'react';
import Navbar from './../Navbar/Navbar';
import ButtonReverse from './../ButtonReverse/ButtonReverse';
import './contactpage.scss';
import flatlaypassport from './../../flatlaypassport.jpg';

const ContactPage = () => {
    return (
        <div>
            <Navbar />
            <div className = 'contact-wrapper'>
                <img src = { flatlaypassport } />
                <form>
                    <h1>Contact us</h1>
                    <label>
                        First Name
                        <input type = 'text' />
                    </label>
                    <label>
                        Last Name
                        <input type = 'text' />
                    </label>
                    <label>
                        Email
                        <input type = 'email' />
                    </label>
                    <label>
                        Subject
                        <input type = 'text' />
                    </label>
                    <label>
                        Message
                        <textarea />
                    </label>
                    <ButtonReverse content = 'submit' />
                </form>
            </div>
        </div>
    )
}

export default ContactPage;