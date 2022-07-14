import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar">
            <div className="links">
                <h4><Link to='/'>Open</Link></h4>
                <h4><Link to='/closed'>Closed</Link></h4>
                <h4><Link to='/addTicket'>Add Ticket</Link></h4>
            </div>
        </nav>
    )
}

export default Navbar;