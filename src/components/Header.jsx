import logo from '../assets/images/Logo.png'
import '../assets/styles/header.css'
import React from 'react'

export default function Header() {
    

    return (
        <header>
            <img src={logo} className='header-logo'></img>
            <span className='header-description'>React Course - Project 3</span>
        </header>
    )
}
