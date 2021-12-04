import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header"> <Link to="/" >
            <img className="header-logo" src='http://pngimg.com/uploads/amazon/small/amazon_PNG11.png ' /> </Link>
            <div className="header-search">
                <input className="header-searchIn" type="text" />
                <SearchIcon
                    className="header-searchIcon" />
                <div className="header-nav">
                    <div className="header-option">
                        {/* <span className="header-optionLineOne"> */}
                        <span className="header-optionLineOne">
                            Hello Guest
                        </span>
                        <span className="header-optionLineTwo">
                            Sign In
                        </span>
                    </div>
                    <div className="header-option">
                        <span className="header-optionLineOne">
                            Return
                        </span>
                        <span className="header-optionLineTwo">
                            & Orders
                        </span>
                    </div>
                    <div className="header-option">
                        <span className="header-optionLineOne">
                            Your's
                        </span>
                        <span className="header-optionLineTwo">
                            Prime
                        </span>
                    </div>
                    <Link to="/checkout" >
                        <div className="header-optionCart">
                            <ShoppingCartIcon />
                            <span className="header-optionLineTwo 
                        header-basketCount">0</span>
                        </div>
                    </Link>
                </div>

            </div>

        </div>

    )
}

export default Header
