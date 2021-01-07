import React from 'react'
import {Link} from 'react-router-dom'

import './header.styles.scss'

const Header = () => (
    <div className="header">
        <Link className="logo-name" to="/">
            <h2>MUG & SEE</h2>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>

        </div>

    </div>
)

export default Header;