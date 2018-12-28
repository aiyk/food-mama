import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createUser } from '../../store/actions/userActions';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup'
import TimesIco from '../../assets/icons/times.svg'

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalTitle: "Create New User",

            firstname: '',
            lastname: '',
            mobileNo: '',
            email: '',
            address: '',

            errors: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            mobileNo: this.state.mobileNo,
            email: this.state.email,
            address: this.state.address,
        };

        this.props.createUser(userData, this.props.history);
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        const { toggle_modal } = this.props;
        return (
            <div className="modal-overlay">
                <div className="modal-wrap shadow">
                    <div className="modal-header">
                        <div className="modal-title">{this.state.modalTitle}</div>
                        <img alt="" onClick={toggle_modal} src={TimesIco} />
                    </div>

                    <div className="modal-content">
                        <form onSubmit={this.onSubmit}>
                            <TextFieldGroup
                                name='firstname'
                                value={this.state.firstname}
                                label='First Name'
                                error={null}
                                type='text'
                                onChange={this.handleChange}
                            />
                            <TextFieldGroup
                                name='lastname'
                                value={this.state.lastname}
                                label='Last Name'
                                error={null}
                                type='text'
                                onChange={this.handleChange}
                            />
                            <TextFieldGroup
                                name='mobileNo'
                                value={this.state.mobileNo}
                                label='Mobile Number'
                                error={null}
                                type='text'
                                onChange={this.handleChange}
                            />
                            <TextFieldGroup
                                name='email'
                                value={this.state.email}
                                label='Email Address'
                                error={null}
                                type='email'
                                onChange={this.handleChange}
                            />
                            <TextFieldGroup
                                name='address'
                                value={this.state.address}
                                label='Address'
                                error={null}
                                type='text'
                                onChange={this.handleChange}
                            />
                            <button className="btn btn-blue">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

CreateUser.propTypes = {
    user: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    user: state.user,
    errors: state.errors
});

export default connect(mapStateToProps, { createUser })(
    withRouter(CreateUser)
);