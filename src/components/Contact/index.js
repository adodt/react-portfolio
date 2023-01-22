import React, { useState } from 'react';
import { validateEmail } from '../../utils/helper';
import { Row, Col } from 'react-bootstrap';
//import Resume from '../../assets/images/AlliDodtResume.pdf';

function ContactForm() {
    return (
        <section>
            <h1 data-testid='h1tag' className='contact'>contactme</h1>
            <div className='contact-icons'>
                <Row>
                    <Col lg={3} md={12}>
                        <a href="https://github.com/adodt"><img src="https://img.icons8.com/doodle/100/000000/github--v1.png" alt='github-logo'class='icon'/></a><p class='icon-text'>github</p>
                    </Col>
                    <Col lg={3} md={12}>
                        <a href="https://www.linkedin.com/in/alli-dodt-9276b698/"><img src="https://img.icons8.com/doodle/100/000000/linkedin--v2.png" alt='linkedin-logo' class='icon' /></a><p class='icon-text'>linkedin</p>
                    </Col>
                    <Col lg={3} md={12}>
                        <a href="mailto:allidodt@gmail.com"><img src="https://img.icons8.com/doodle/120/000000/new-post.png" alt='mail-logo'/></a><p class='icon-text'>email</p>
                    </Col>

                </Row>
            </div>
        </section>
    )
}

export default ContactForm;