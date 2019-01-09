import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createMembership } from '../../store/actions/settingsActions';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup'
import TimesIco from '../../assets/icons/times.svg'

class CreateMembership extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalTitle: "Create New Membership Plan",
            membership: '',
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

        const membershipData = {
            membership: this.state.membership
        };

        this.props.createRole(membershipData, this.props.history);
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
                                name='membership'
                                value={this.state.membership}
                                label='Membership Plan'
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

CreateMembership.propTypes = {
    membership: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    membership: state.settings.membershipPlan,
    errors: state.errors
});

export default connect(mapStateToProps, { createMembership })(
    withRouter(CreateMembership)
);