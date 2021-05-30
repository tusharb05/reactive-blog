import {Link} from 'react-router-dom'; //for not making a req to server everytime
import React from 'react';

function Navbar() {
    return (
        <div className="navbar">
            <h1>Reactive Blog</h1>
            <div className="links">
                {/* <a href="/">Home</a>
                <a href="/create">New Blog</a> */}
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </div>
    )
}

export default Navbar
