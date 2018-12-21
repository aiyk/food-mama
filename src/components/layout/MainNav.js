import React from 'react'
import './layout.scss';

export default function MainNav() {
    return (
        <div className="main-nav">
            <div className="logo-wrap">
                <div className="logo-label1">food</div>
                <div className="logo-label2">mama</div>
            </div>

            <div className="nav-links">
                <div className="nav-link">Dashboard</div>
                <div className="nav-link">User Management</div>
                <div className="nav-link">Payments</div>
                <div className="nav-link">Food Menu Manager</div>
                <div className="nav-link">Dashboard</div>
                <div className="nav-link">Dashboard</div>
            </div>

            <div className="nav-footer">food mama copyright &copy; {(new Date()).getFullYear()}</div>
        </div>
    )
}
