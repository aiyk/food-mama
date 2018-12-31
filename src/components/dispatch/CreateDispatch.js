import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createDispatch } from '../../store/actions/dispatchActions';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup'
import CheckboxFieldGroup from '../common/CheckboxFieldGroup'
import UploadFieldGroup from '../common/UploadFieldGroup'
import SelectListGroup from '../common/SelectListGroup'
import TimesIco from '../../assets/icons/times.svg'

class CreateDispatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalTitle: "Assign Order To Rider",

            order: '',
            rider: '',

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

        const dispatchData = {
            order: this.state.order,
            rider: this.state.rider
        };

        this.props.createDispatch(dispatchData, this.props.history);
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        const { toggle_modal } = this.props;

        // Select options for order
        const orderOptions = [
            { label: '* Select Order', value: 0 },
            { label: '11th Street Lagos', value: 'AA2100CA' }
        ];

        // Select options for rider
        const riderOptions = [
            { label: '* Select Rider', value: 0 },
            { label: 'Jonah Sam', value: 'AA2100CA' }
        ];
        return (
            <div className="modal-overlay">
                <div className="modal-wrap shadow">
                    <div className="modal-header">
                        <div className="modal-title">{this.state.modalTitle}</div>
                        <img alt="" onClick={toggle_modal} src={TimesIco} />
                    </div>

                    <div className="modal-content">
                        <form onSubmit={this.onSubmit}>
                            <SelectListGroup
                                name="order"
                                value={this.state.order}
                                onChange={this.handleChange}
                                options={orderOptions}
                                error={null}
                                label="Order"
                            />
                            <SelectListGroup
                                name="rider"
                                value={this.state.rider}
                                onChange={this.handleChange}
                                options={riderOptions}
                                error={null}
                                label="rider"
                            />
                            <button className="btn btn-blue">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

CreateDispatch.propTypes = {
    dispatch: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    dispatch: state.dispatch,
    errors: state.errors
});

export default connect(mapStateToProps, { createDispatch })(
    withRouter(CreateDispatch)
);