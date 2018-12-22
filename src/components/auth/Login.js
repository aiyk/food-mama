import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../../store/actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import './auth.scss'

class Login extends Component {

    state = {
        email: "",
        password: "",
        errors: {}
    };

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }
    componentWillReceiveProps = nextProps => {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }

        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }
    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginUser(userData);
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="login-frm-wrap">
                <form onSubmit={this.handleSubmit} >
                    <TextFieldGroup
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleInputChange}
                        error={errors.email}
                    />
                    <TextFieldGroup
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleInputChange}
                        error={errors.password}
                    />
                    <button className="btn btn-x2 btn-default">Sign In</button>
                </form>
            </div>
        );
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);