import React from 'react'
import { Link } from "react-router-dom"
import './layout.scss';

export default function MainNav() {
    return (
        <div className="main-nav">
            <div className="logo-wrap">
                <div className="logo-label1">food</div>
                <div className="logo-label2">mama</div>
            </div>

            <div className="nav-links">
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                <Link to="/" className="nav-link">Users</Link>
                <Link to="/" className="nav-link">Orders</Link>
                <Link to="/" className="nav-link">Payments</Link>
                <Link to="/" className="nav-link">Dispatch</Link>
                <Link to="/" className="nav-link">Branches</Link>
                <Link to="/" className="nav-link">System Settings</Link>
            </div>

            <div className="nav-footer">food mama copyright &copy; {(new Date()).getFullYear()}</div>
        </div>
    )
}
