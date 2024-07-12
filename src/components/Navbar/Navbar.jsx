import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import { motion } from 'framer-motion';

export default function MyNavbar() {
    function scrollToComponent(id) {
        const component = document.getElementById(id);
        window.scrollTo({
            top:component.offsetTop,
            behavior: 'smooth'
        })
    }
    
    return (
        <Navbar expand="lg" className='nav'>
            <Container className='nav-container'>
                <button onClick={() => scrollToComponent('about')} className='nav-brand'><img src={require('../../images/s-logo.png')} alt="" className='nav-image-logo'/> Sarthak</button>
                <Navbar.Toggle aria-controls="navbarSupportedContent" className='nav-hamburger-icon'/>
                <Navbar.Collapse id="basic-navbar-nav" className='nav-hamburger-menu'>
                    <Nav className='nav-buttons'>
                        <button onClick={() => scrollToComponent('about')}>ABOUT</button>
                        <button onClick={() => scrollToComponent('exp-container-navbar')}>EXPERIENCE</button>
                        <button onClick={() => scrollToComponent('projects-container-navbar')}>PROJECTS</button>
                        <button onClick={() => scrollToComponent('skills-container-navbar')}>TECHNOLOGIES</button>
                        <button onClick={() => scrollToComponent('education-container-navbar')}>EDUCATION</button>
                        <button onClick={() => window.open('https://drive.google.com/file/d/1lx0nU5G3zKTnSnp5VP9VE3LqnzYdCFAQ/view?usp=sharing', '_blank')}>RESUME</button>
                        <button onClick={() => scrollToComponent('contact-container-navbar')}>CONTACT</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}