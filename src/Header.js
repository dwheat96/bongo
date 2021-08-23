import React from 'react'
import './Header.css'
import logo from './bongo-white.png'
import SearchIcon from '@material-ui/icons/Search';
import { ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {

    const [{basket}] = useStateValue();

    return (
        <div className="header">
            <Link to='/'>
            <img 
            className="header_logo"
            src={logo}
            alt="bongo logo"
            />
            </Link>
        <div
        className="header_search">
            <input 
            className="header_searchInput"
            type="text" />
            <SearchIcon
            className="header_searchIcon"/>
        </div>
        <div className="header_nav">
            <Link to="/login">
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Hello guest!
                    </span>
                    <span className="header_optionLineTwo">
                        Sign in!
                    </span>
                </div>
            </Link>
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
            <Link to='/Checkout'>
                <div className="header_optionBasket">
                    <ShoppingBasket />
                    <span
                    className="header_optionLineTwo header_basketCount">
                    {basket?.length}
                    </span>
                </div>
            </Link>
        </div>
    </div>
    )
}

export default Header
