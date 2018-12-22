import React from 'react'
import './layout.scss';

export default function AppBar() {
    return (
        <div className="app-bar">
            <div className="app-bar-lhs"></div>
            <div className="app-bar-rhs">
                <div className="loggedin-user"></div>
            </div>
        </div>
    )
}
