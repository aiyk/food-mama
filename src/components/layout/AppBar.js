import React from 'react'
import './layout.scss'
import userimg from '../../assets/users/1.jpg'

export default function AppBar() {
    return (
        <div className="app-bar">
            <div className="app-bar-lhs"></div>
            <div className="app-bar-rhs">
                <div className="loggedin-user">
                    <div className="liu-name">Aiyk Ekwe</div>
                    <div className="liu-img">
                        <img src={userimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
