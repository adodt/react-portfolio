import React from 'react';
import alliProfile from '../../assets/images/alliProfile.jpg';
//import profileBackground from '../../assets/images/profileBackground.jpeg';
import { Col } from 'react-bootstrap';

function About () {
    return(
        <section className='title'>
            <div className='row justify-content-center' id='about-container'>
                <Col lg={6} md={12}>
                    <center><img src={alliProfile} className='alli-profile' alt='alli-profile' width='25%'/></center>
                    <h2 class='name'>Alli Dodt</h2>
                    <p class='job'>full stack web developer</p>
                    <h2 class='education'>about me</h2>
                </Col>
            </div>
        </section>
    )
}


export default About;