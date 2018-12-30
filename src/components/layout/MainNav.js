import React from 'react'
import { Link } from "react-router-dom"
import './layout.scss';

export default function MainNav() {
    return (
        <div className="nav-outer">
            <div className="main-nav">
                <div className="logo-wrap">
                    <div className="logo-label1">food</div>
                    <div className="logo-label2">mama</div>
                </div>

                <div className="nav-links">
                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                    <Link to="/users" className="nav-link">Users</Link>
                    <Link to="/foods" className="nav-link">Foods</Link>
                    <Link to="/enterprises" className="nav-link">Enterprises</Link>
                    <Link to="/branches" className="nav-link">Branches</Link>
                    <Link to="/orders" className="nav-link">Orders</Link>
                    <Link to="/payments" className="nav-link">Payments</Link>
                    <Link to="/dispatch" className="nav-link">Dispatch</Link>
                    <Link to="/settings" className="nav-link">System Settings</Link>
                </div>

                <div></div>
                {/* <div className="nav-footer">food mama copyright &copy; {(new Date()).getFullYear()}</div> */}
            </div>
        </div>
    )
}
