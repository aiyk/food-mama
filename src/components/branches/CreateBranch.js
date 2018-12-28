import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createBranch } from '../../store/actions/branchActions';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup'
import TimesIco from '../../assets/icons/times.svg'

class CreateBranch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalTitle: "Create New Branch",

            branch: '',
            address: '',
            latitude: '',
            longitude: '',

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

        const branchData = {
            branch: this.state.branch,
            address: this.state.address,
            latitude: this.state.latitude,
            longitude: this.state.longitude,
        };

        this.props.createBranch(branchData, this.props.history);
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
                                name='branch'
                                value={this.state.branch}
                                label='Branch Name'
                                error={null}
                                type='text'
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
                            <TextFieldGroup
                                name='latitude'
                                value={this.state.latitude}
                                label='Latitude'
                                error={null}
                                type='text'
                                onChange={this.handleChange}
                            />
                            <TextFieldGroup
                                name='longitude'
                                value={this.state.longitude}
                                label='Longitude'
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

CreateBranch.propTypes = {
    branch: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    branch: state.branch,
    errors: state.errors
});

export default connect(mapStateToProps, { createBranch })(
    withRouter(CreateBranch)
);