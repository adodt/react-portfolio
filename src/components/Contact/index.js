import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';
import { Row, Col } from 'react-bootstrap';
//import Resume from '../../assets/images/AlliDodtResume.pdf';

function ContactForm() {
    // // manage form data, empty out the initialize values
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // // deconstructing the formState object into it's named properties
    const { name, email, message } = formState;
    // // error message
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
    
                if(!isValid) {
                    setErrorMessage('Your email is invalid');
                } else {
                    setErrorMessage('');
                }
            // checking if name and message has input 
            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                } 
        }
        // setFormState is updating formState for the property
        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    // form submit 
    function handleSubmit(e) {
        e.preventDefault();
  
    }

    return (
        <section>
            <h1 data-testid='h1tag' className='contact'>contactme</h1>
            <div className='contact-icons'>
                <Row>
                    <Col lg={3} md={12}>
                        <a href="https://github.com/adodt"><img src="https://img.icons8.com/doodle/100/000000/github--v1.png" alt='github-logo' class='icon' /></a><p class='icon-text'>github</p>
                    </Col>
                    <Col lg={3} md={12}>
                        <a href="https://www.linkedin.com/in/alli-dodt-9276b698/"><img src="https://img.icons8.com/doodle/100/000000/linkedin--v2.png" alt='linkedin-logo' class='icon' /></a><p class='icon-text'>linkedin</p>
                    </Col>
                    <Col lg={3} md={12}>
                        <a href="mailto:allidodt@gmail.com"><img src="https://img.icons8.com/doodle/120/000000/new-post.png" alt='mail-logo' /></a><p class='icon-text'>email</p>
                    </Col>

                </Row>
            </div>

            <div class='resume-container'>
                <Row>
                    <Col lg={4} md={12}>
                        <h2 class='resume'>front-end technologies</h2>
                        <ul>
                            <li>
                                HTML
                            </li>
                            <li>
                                CSS
                            </li>
                            <li>
                                JavaScript
                            </li>
                            <li>
                                jQuery
                            </li>
                            <li>
                                React.js
                            </li>
                            <li>
                                Framework: Bootsrap, Bulma
                            </li>
                        </ul>
                    </Col>

                    <Col lg={4} md={12}>
                        <h2 class="resume">back-end technologies</h2>
                        <ul>
                            <li>
                                Node.js
                            </li>
                            <li>
                                Express.js
                            </li>
                            <li>
                                MySQL
                            </li>
                            <li>
                                MongoDB
                            </li>
                            <li>
                                API (web, third-party, RESTful)
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default ContactForm;