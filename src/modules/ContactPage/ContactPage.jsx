import React, { useState } from 'react';
import ButtonReverse from './../ButtonReverse/ButtonReverse';
import Modal from './../Modal/Modal';
import './contactpage.scss';
import flatlaypassport from './../../flatlaypassport.jpg';

const ContactPage = () => {
    const [show, setShow] = useState(false);
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

    const submit = (e) => {
        e.preventDefault();
        openModal();
        e.target.reset();
    }

    return (
        <div>
            <div className = 'contact-wrapper'>
                <div className = 'img-wrapper'>
                    <img src = { flatlaypassport } />
                </div>
                <div className = 'form-wrapper'>
                    <form onSubmit={submit}>
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
                        <ButtonReverse content = 'Submit' type = 'submit' />
                        <Modal 
                            h1 = 'Your message has been sent!' 
                            p1= 'We will reply shortly.'
                            closeModal = { closeModal } 
                            show = { show } 
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;