import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createRole } from '../../store/actions/settingsActions';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup'
import TimesIco from '../../assets/icons/times.svg'

class CreateRole extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalTitle: "Create New Role",
            role: '',
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

        const roleData = {
            role: this.state.role
        };

        this.props.createRole(roleData, this.props.history);
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
                                name='role'
                                value={this.state.role}
                                label='Role'
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

CreateRole.propTypes = {
    role: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    role: state.settings.roles,
    errors: state.errors
});

export default connect(mapStateToProps, { createRole })(
    withRouter(CreateRole)
);