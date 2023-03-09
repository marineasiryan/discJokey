import React from 'react';
import logo from '../../assets/images/logo.png';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import Header from '../../layouts/header/Header';

const Hero = () => {
    return (
        <div className='hero'>
            <Header/>
        <div className='hero_sec'>
            <div className='hero_img'><img src={logo} /></div>
            <h1>ULTRA VIBES</h1>
            <div className='smm_icons'>
                <a href='#' className='icon'> <BsFacebook /> </a>
                <a href='#' className='icon'> <BsInstagram /> </a>
                <a href='#' className='icon'> <BsTwitter /> </a>
            </div>
        </div>
        </div>
    )
}

export default Hero