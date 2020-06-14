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
                <div className = 'img-wrapper'>
                    <img src = { flatlaypassport } />
                </div>
                <div className = 'form-wrapper'>
                    <form>
                        <h1>Contact us</h1>
                        <label>
                            First Name
                            <input type = 'text' required />
                        </label>
                        <label>
                            Last Name
                            <input type = 'text' required />
                        </label>
                        <label>
                            Email
                            <input type = 'email' required />
                        </label>
                        <label>
                            Subject
                            <input type = 'text' required />
                        </label>
                        <label>
                            Message
                            <textarea required />
                        </label>
                        <ButtonReverse content = 'submit' className = 'btn' />
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ContactPage;