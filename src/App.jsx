import React, { useEffect } from 'react';

import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './app.css'
import MyNavbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Project from './components/Project/Project';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/experience';

export default function App() {
    useEffect(() => {
        Aos.init({});
    }, []);

    const projectsArray = [
        {
            name: 'CorpoSync-EnterpriseManagement',
            description: `A spring boot project that serves as a robust Enterprise Management System, providing RESTful APIs to perform CRUD operations. Provides a way for companies to manage their budgeting system and monitor employee expenses`,
            skills: ['Spring Boot', 'Java', 'RESTful APIs', 'JDBC', 'JUnit', 'JWT', 'Auth 2.0', 'SQL', 'Controller-Service-Repository Architcecture', 'Postman'],
            image: 'capicImage.png',
            width: '40vw',
            id: 1
        },
        {
            name: 'TravelTrove - Ignition Hacks',
            description: `This app addresses the difficulties in finding hotels and restaurants while also integrating a budget component to make dream vacations accessible to everyone.`,
            skills: ['Javascript', 'React', 'Express', 'REST API', 'AWS', 'Git', 'Postman', 'Firebase'],
            github: 'https://github.com/Sarthak248/TravelTrove',
            image: 'musicImage.png',
            width: '40vw',
            id: 2
        },
        {
            name: 'Delhi Metro - Route Planner',
            description: `Web-based application built using JavaScript and React, designed to help commuters efficiently navigate the complex Delhi Metro network with its intricate interchanges. The application utilizes Dijkstra's algorithm, a widely-used graph traversal algorithm, to find the shortest route between two stations, ensuring optimal travel time and convenience.`,
            skills: ['Javascript', 'Node.js', 'Express', 'CSS', 'REST API', 'Google Cloud', 'Git', 'Firebase'],
            github: 'https://github.com/Sarthak248/CorpoSync-EnterpriseManagement',
            image: 'courseOutlineImage.png',
            width: '40vw',
            id: 3
        },
        {
            name: 'Webscraping Prototype - Automate Data Extraction',
            description: `The Automated Web Scraping Prototype is a Python-based solution that streamlines the process of fetching and exporting description details from various websites. Leveraging powerful frameworks such as Selenium, Pandas, Beautiful Soup, and Webdriver, the project automates data extraction and conversion to a CSV format, significantly reducing manual effort by almost 90%.`,
            skills: ['React', 'Javascript', 'CSS', 'HTML', 'Git'],
            github: 'https://github.com/Sarthak248/TravelTrove',
            image: 'tenziesImage.png',
            width: '30vw',
            id: 4
        },
        {
            name: 'Wordle Solver Algorithm',
            description: `The Wordle Game Solver is an innovative Python-based project designed to tackle the popular Wordle game with exceptional efficiency. Employing a custom algorithm, the solver adeptly solves 4, 5, and 6-letter wordles, providing accurate answers in an average of 3.4 tries.`,
            skills: ['Javascript', 'HTML', 'CSS', 'DOM', 'Git', 'VS Code', 'AWS'],
            github: 'https://github.com/Sarthak248/Wordle-Solver-Algorithm',
            image: 'pokedexImage.png',
            width: '45vw',
            id: 5
        },
        {
            name: 'DevOps Project - Implementing PCI Redaction',
            description: `The Website for German Classes, hosted by your aunt, is a comprehensive online platform built to provide a seamless learning experience for students interested in mastering the German language. Developed using HTML, CSS, and JavaScript, the website incorporates cutting-edge technologies and leverages the power of Node.js for hosting.The Website for German Classes, hosted by your aunt, is a comprehensive online platform built to provide a seamless learning experience for students interested in mastering the German language. Developed using HTML, CSS, and JavaScript, the website incorporates cutting-edge technologies and leverages the power of Node.js for hosting.`,
            skills: ['MySQL', 'MySQLWorkbench', 'Data modelling', 'Normalization', 'Git'],
            github: 'https://github.com/Sarthak248/TravelTrove',
            image: 'manufacturingImage.png',
            width: '35vw',
            id: 6
        },
        {
            name: 'Stranded - Story Mode Game',
            description: `The Website for German Classes, hosted by your aunt, is a comprehensive online platform built to provide a seamless learning experience for students interested in mastering the German language. Developed using HTML, CSS, and JavaScript, the website incorporates cutting-edge technologies and leverages the power of Node.js for hosting.The Website for German Classes, hosted by your aunt, is a comprehensive online platform built to provide a seamless learning experience for students interested in mastering the German language. Developed using HTML, CSS, and JavaScript, the website incorporates cutting-edge technologies and leverages the power of Node.js for hosting.`,
            skills: ['MySQL', 'MySQLWorkbench', 'Data modelling', 'Normalization', 'Git'],
            github: 'https://github.com/Sarthak248/TravelTrove',
            image: 'manufacturingImage.png',
            width: '35vw',
            id: 6
        },
    ]    

    const projectsElements = projectsArray.map((project, index) => {
        return <Project 
            key = {index}
            details = {project}
        />
    })     

    const expArray = [
        {
            name: 'Full Stack SWE @ Manulife',
            description: `A spring boot project that serves as a robust Enterprise Management System, providing RESTful APIs to perform CRUD operations. Provides a way for companies to manage their budgeting system and monitor employee expenses`,
            skills: ['Spring Boot', 'Java', 'RESTful APIs', 'JDBC', 'JUnit', 'JWT', 'Auth 2.0', 'SQL', 'Controller-Service-Repository Architcecture', 'Postman'],
            image: 'capicImage.png',
            width: '40vw',
            id: 1
        },
        {
            name: 'Salesforce Software Developer @ Manulife',
            description: `This app addresses the difficulties in finding hotels and restaurants while also integrating a budget component to make dream vacations accessible to everyone.`,
            skills: ['Javascript', 'React', 'Express', 'REST API', 'AWS', 'Git', 'Postman', 'Firebase'],
            github: 'https://github.com/Sarthak248/TravelTrove',
            image: 'musicImage.png',
            width: '40vw',
            id: 2
        },
        {
            name: 'Full Stack SDE Intern @ OmniCard',
            description: `Web-based application built using JavaScript and React, designed to help commuters efficiently navigate the complex Delhi Metro network with its intricate interchanges. The application utilizes Dijkstra's algorithm, a widely-used graph traversal algorithm, to find the shortest route between two stations, ensuring optimal travel time and convenience.`,
            skills: ['Javascript', 'Node.js', 'Express', 'CSS', 'REST API', 'Google Cloud', 'Git', 'Firebase'],
            github: 'https://github.com/Sarthak248/CorpoSync-EnterpriseManagement',
            image: 'courseOutlineImage.png',
            width: '40vw',
            id: 3
        },
        {
            name: 'Virtual Data Engineer Intern @JP Morgan',
            description: `The Automated Web Scraping Prototype is a Python-based solution that streamlines the process of fetching and exporting description details from various websites. Leveraging powerful frameworks such as Selenium, Pandas, Beautiful Soup, and Webdriver, the project automates data extraction and conversion to a CSV format, significantly reducing manual effort by almost 90%.`,
            skills: ['React', 'Javascript', 'CSS', 'HTML', 'Git'],
            github: 'https://github.com/Sarthak248/TravelTrove',
            image: 'tenziesImage.png',
            width: '30vw',
            id: 4
        },
    ]

    const expElements = expArray.map((exp, index) => {
        return <Experience 
            key = {index}
            details = {exp}
        />
    }) 

    const skillsArr = [
        {name: 'Javascript', padding: '2px', height: '60px', width: '105px', image: 'javascriptImage.png'},
        {name: 'HTML', padding: '2px', height: '60px', width: '63px', image: 'htmlImage.png'},
        {name: 'CSS', padding: '2px', height: '60px', width: '43px', image: 'cssImage.png'},
        {name: 'Swift', padding: '6px', height: '60px', width: '60px', image: 'swiftImage.png'},
        {name: 'SQL', padding: '7px', height: '50px', width: '85px', image: 'sqlImage.png'},
        {name: 'Java', padding: '3px', height: '52px', width: '40px', image: 'javaImage.png'},
        {name: 'React', padding: '8px', height: '52px', width: '58px', image: 'reactImage.png'},
        {name: 'Github', padding: '5px', height: '54px', width: '54px', image: 'githubImage.png'},
        {name: 'Node.js', padding: '9px', height: '50px', width: '70px', image: 'nodejsImage.png'},
        {name: 'Express', padding: '12px', height: '51px', width: '110px', image: 'expressImage.png'},
        {name: 'REST', padding: '8px', height: '53px', width: '55px', image: 'restapiImage.png'},
        {name: 'AWS', padding: '10px', height: '52px', width: '68px', image: 'awsImage.png'},
    ]

    const skillsElements = skillsArr.map((skill, index) => {
        return <Skills 
            key = {index}
            name = {skill.name}
            padding = {skill.padding}
            image = {skill.image}
            height = {skill.height}
            width = {skill.width}
        />
    })

    const educationArr = [
        {
            westernImage: 'westernImage.png',
            degree: {name: 'Bachelor of Engineering Science in Software Engineering', location: 'London, ON', date: 'Sep 2022 - Apr 2026'},
            wdsImage: 'wdsImage.png',
            clubs: {name: 'Western Sunstand Club', role: 'Software'},
        }
    ]

    const educationElements = educationArr.map((item, index) => {
        return <Education 
            key = {index}
            westernImage = {item.westernImage}
            degree = {item.degree}
            wdsImage = {item.wdsImage}
            clubs = {item.clubs}
        />
    })

    return (
        <div className='app-container'>
            <MyNavbar />

            <About />

            <div className='exp-container-navbar' id='exp-container-navbar'></div>

            <motion.h2 
                className='projectsAndExperiences' 
                id='projectsAndExperiences'
                data-aos='fade-down'
                data-aos-anchor-placement='bottom-bottom'
            >
                My Expereinces Work Summary
            </motion.h2>

            {expElements}

            <div className='projects-container-navbar' id='projects-container-navbar'></div>

            <motion.h2 
                className='projectsAndExperiences' 
                id='projectsAndExperiences'
                data-aos='fade-down'
                data-aos-anchor-placement='bottom-bottom'
            >
                Projects I've worked on
            </motion.h2>

            {projectsElements}
            
            <div className='skills-tools-container'>
                <div className='skills-container-navbar' id='skills-container-navbar'></div>
                <h2 
                data-aos='fade-down' 
                className='skills-tools' 
                id='skills-tools'>
                    Tech Stack
                </h2>
                <div 
                    style={{ marginBottom: '100px' }}
                    className='skills-container' 
                    id='skills-container'
                >
                    {skillsElements} 
                </div>
            </div>
            <div className='education-container'>
                <div className='education-container-navbar' id='education-container-navbar'></div>
                <h2  className='education-header' id='education-header'>Education</h2>
                {educationElements}
            </div>

            <div className='contact-container' id='contact-container'>
                <div className='contact-container-navbar' id='contact-container-navbar'></div>
                <h2 data-aos='fade-down' data-aos-anchor-placement='bottom-bottom' className='contact-header'>Get in Touch</h2>
                <Contact 
                    name = 'Sarthak Jain'
                    email = '24.sarthak.jain@gmail.com'
                    number = '647-769-8833'
                    linkedInImage = 'linkedinImage.png'
                    githubImage = 'githubImage.png'
                />
            </div>
            <footer className='footer'>
                <p className='copyright-details'>Created by</p>
                <p className='copyright-title'>SARTHAK JAIN</p>
            </footer>
        </div>
    )
}