import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='Zayne Lovecraft | CEO | YouTuber | Blogger | Web Developer'
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Web Developer</h3>
                    <p className='about-details'>
                    I am a freelance web developer. I have skills including Html, Css, Javascript, React, and Node.js. My many other talents include graphic design, Photography, videography and video editing. I consistently push myself in the direction of reaching my ultimate potential. I am always eager to learn. I believe it is never late to improve a new skill or improve yourself as a person{' '}
                        {/* <a
                            className='about-link-element'
                            href='http://theleanprogrammer.com/aam'
                        >
                            my free react courses!
                        </a> */}
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Youtuber</h3>
                    <p className='about-details'>
                    I like to make new connections and networking is important to me. Please don't hesitate to reach out I always respond. My passions are always evolving and I like to think outside the box. I ask how can I improve the world around me. The future is up to us and our potential is limitless. Everyone has dreams, and success comes to those who act on those dreams.{' '}
                        {/* <a
                            className='about-link-element'
                            href='https://madhavbahl.medium.com/'
                        >
                            my medium blogs today!
                        </a> */}
                    </p>

                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>Blogger</h3>
                    <p className='about-details'>
                        Being passionate about my online pressence I have created and worked on many blogs with clients and as well as my personal blogs.{' '}
                        {/* <a
                            className='about-link-element'
                            href='mailto:info@theleanprogrammer.com'
                        >
                            Email me the details!
                        </a> */}
                    </p>
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAdress='/projects'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;
