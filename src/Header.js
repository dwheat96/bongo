import React from 'react'
import './Header.css'
import logo from './bongo-white.png'
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';

function Header() {
    return (
        <div className="header">
            <img 
            className="header_logo"
            src={logo}
            alt="bongo logo"
            />
        <div
        className="header_search">
            <input 
            className="header_searchInput"
            type="text" />
            <SearchIcon
            className="header_searchIcon"/>
        </div>
        <div className="header_nav">
            <div className="header_option">
                <span className="header_optionLineOne">
                    Hello guest!
                </span>
                <span className="header_optionLineTwo">
                    Sign in!
                </span>
            </div>
            <div className="header_option">
                <span className="header_optionLineOne">
                    Returns
                </span>
                <span className="header_optionLineTwo">
                    & Orders
                </span>
            </div>
            <div className="header_option">
                <span className="header_optionLineOne">
                    Your
                </span>
                <span className="header_optionLineTwo">
                    Prime
                </span>
            </div>

            <div className="header_optionBasket">
                <ShoppingBasket />
                <span
                className="header_optionLineTwo header_basketCount">
                0
                </span>
            </div>
        </div>
    </div>
    )
}

export default Header
