import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createEnterprise } from '../../store/actions/enterpriseActions';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup'
import TimesIco from '../../assets/icons/times.svg'

class CreateEnterprise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalTitle: "Create New Enterprise",

            name: '',
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

        const enterpriseData = {
            name: this.state.firstname,
            mobileNo: this.state.mobileNo,
            email: this.state.email,
            address: this.state.address,
        };

        this.props.createEnterprise(enterpriseData, this.props.history);
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
                                name='name'
                                value={this.state.name}
                                label='Enterprise'
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

CreateEnterprise.propTypes = {
    enterprise: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    enterprise: state.enterprise,
    errors: state.errors
});

export default connect(mapStateToProps, { createEnterprise })(
    withRouter(CreateEnterprise)
);