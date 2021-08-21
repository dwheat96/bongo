import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className="header">
            <img 
            className="header_logo"
            src='./bongo-white.png'
            alt="bongo logo"
            />
        <div
        className="header_search">
            <input 
            className="header_searchInput"
            type="text" />
        </div>
        <div className="header_nav">

        </div>
    </div>
    )
}

export default Header
