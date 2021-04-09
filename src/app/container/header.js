import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="header-container">
            <h2>Blogger</h2>
            <div className="navlink-container">
            <Link className="navLink" to="/app/home">
                <p>Home</p>
            </Link>
            <Link className="navLink" to="/app/dashboard">
                <p>Dashboard</p>
            </Link>
            </div>
            {/* <button className="simple-button" type="button">Profile</button> */}
        </div>
    )
}
export default Header;