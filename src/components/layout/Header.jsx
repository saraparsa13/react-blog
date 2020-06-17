import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-4">
            <Link to="signup/" className="navbar-item" style={{marginLeft:'auto',marginRight:30}}>
                <i className="fas fa-sign-in-alt" style={{fontSize: 30}}></i>
            </Link>
            <Link to="signin/" className="navbar-item" style={{marginLeft:'auto',marginRight:30}}>
                <i className="fas fa-sign-in-alt" style={{fontSize: 30}}></i>
            </Link>
        </nav>
    )
}

export default Header