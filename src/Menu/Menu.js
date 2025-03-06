import React from 'react'
import './Menu.css'

function Menu(){
    
    return(
        <div className='main-menu'>
            <div id='menu' className="Menu">
            <div className='menuBar'></div>
            <div className='menuBar'></div>
            <div className='menuBar'></div>
            </div>

            <div  className='menu-content'>
                <div id='menu-content' className='menu-container'></div>
                <div className='menu-items'>
                <div className='menu-home'><h4>Home</h4></div>
                <div className='menu-services'><h4>Services</h4></div>
                <div className='menu-contact'><h4>Contact</h4></div>
                <div className='menu-inquiry'><h4>Inquiry</h4></div>
                </div>
            </div>
            
        </div>
    )
} export default Menu