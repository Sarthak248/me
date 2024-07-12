import React from 'react';
import './about.css';
import { motion } from 'framer-motion';

export default function Navbar() {
    function scrollToComponent(id) {
        const component = document.getElementById(id);
        window.scrollTo({
            top: component.offsetTop,
            behavior: 'smooth'
        })
    }

    return (
        <div className='about-container'>
            <motion.div
                className='about'
                id='about'
            >
                <motion.h1
                    className='about-name'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: -40 }}
                    transition={{ duration: 0.8 }}
                >
                Hi, I'm Sarthak &#128075;
                </motion.h1>

                <motion.h3
                    className='about-title'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                - A Wanna-Be Software Engineer
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className='about-p1'
                >
                    I'm in my 3rd year of SWE at Western. My current goal is to learn AI and Machine Learning for image recognition for a cool project I'm working on 📷.
                    I'm excited to learn about trending technologies like cloud platforms and CRM tools like Salesforce ☁️. My end goal as a software engineer is to be
                    skilled enough to build large, end-to-end applications that reduce effort in people's day-to-day lives! 🤓<br></br>
                    Besides SWE, I love listening to music, Play the 🎸and want to get into rock climbing 🪨.
                    I also love working out and I'm trying to unlock my full potential as a calisthenics athlete 💪.
                </motion.p>

                <motion.button
                    className='about-projects'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    onClick={() => scrollToComponent('exp-container-navbar')}
                >
                    Work-Ex 💼
                    <img
                        src={require("../../images/downArrow.png")}
                        alt="downArrow"
                        style={{ height: '18px', width: '18px' }}
                    />
                </motion.button>
            </motion.div>

            <motion.img
                src={require("../../images/myPhoto.jpg")}
                alt="myPhoto"
                className='about-myPhoto'
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            />
        </div>

    )
}