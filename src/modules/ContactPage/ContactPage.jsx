import React from 'react';
import Navbar from './../Navbar/Navbar';

const ContactPage = () => {
    return (
        <div>
            <Navbar />
            <div>
                <h1>Contact us</h1>
                <p>name: first name, last name</p>
                <p>email</p>
                <p>subject</p>
                <p>message</p>
            </div>
        </div>

    )
}

export default ContactPage;