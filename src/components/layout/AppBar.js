import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Spinner from '../common/Spinner'
import { getUsers } from '../../store/actions/userActions'
import './layout.scss'
import userimg from '../../assets/users/1.jpg'

class AppBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleUserMenu: this.props.usermenu
        }
    }
    componentDidMount() {
        this.props.getUsers();
    }
    toggle_userMenu = ($event) => {
        if ($event.target.className === 'loggedin-user' || $event.target.className === 'liu-img' || $event.target.className === 'liu-name' || $event.target.className === 'liuImg') {
            this.setState({
                toggleUserMenu: !this.state.toggleUserMenu
            })
        }
    }

    render() {
        const { users, loading } = this.props.user;
        return (
            <div className="app-bar" >
                <div className="app-bar-lhs"></div>
                <div className="app-bar-rhs">
                    <div onClick={this.toggle_userMenu} className="loggedin-user">
                        <div className="liu-name">Aiyk Ekwe</div>
                        <div className="liu-img">
                            <img className="liuImg" src={userimg} alt="" />
                        </div>
                    </div>

                    {
                        this.state.toggleUserMenu
                            ? (
                                <ul className="user-menus">
                                    <li>Profile</li>
                                    <li>Settings</li>
                                    <li>Logout</li>
                                </ul>
                            )
                            : (null)
                    }

                </div>
            </div>
        )
    }
}

AppBar.propTypes = {
    getUsers: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps, { getUsers })(AppBar)
