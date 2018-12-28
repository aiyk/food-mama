import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createFood } from '../../store/actions/foodActions';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup'
import CheckboxFieldGroup from '../common/CheckboxFieldGroup'
import UploadFieldGroup from '../common/UploadFieldGroup'
import SelectListGroup from '../common/SelectListGroup'
import TimesIco from '../../assets/icons/times.svg'

class CreateFood extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalTitle: "Create New Food",

            food: '',
            category: '',
            preorder: '',
            price: '',
            img: '',

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

        const foodData = {
            food: this.state.food,
            category: this.state.category,
            preorder: this.state.preorder,
            price: this.state.price,
            img: this.state.img,
        };

        this.props.createFood(foodData, this.props.history);
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        const { toggle_modal } = this.props;
        // Select options for food category
        const options = [
            { label: '* Select Professional Status', value: 0 },
            { label: 'Developer', value: 'Developer' },
            { label: 'Junior Developer', value: 'Junior Developer' },
            { label: 'Senior Developer', value: 'Senior Developer' },
            { label: 'Manager', value: 'Manager' },
            { label: 'Student or Learning', value: 'Student or Learning' },
            { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
            { label: 'Intern', value: 'Intern' },
            { label: 'Other', value: 'Other' }
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
                            <TextFieldGroup
                                name='food'
                                value={this.state.food}
                                label='Food'
                                error={null}
                                type='text'
                                onChange={this.handleChange}
                            />
                            <SelectListGroup
                                name="category"
                                value={this.state.category}
                                onChange={this.handleChange}
                                options={options}
                                error={null}
                                label="Category"
                            />
                            <CheckboxFieldGroup
                                name='preorder'
                                value={this.state.preorder}
                                label='Pre Order'
                                onChange={this.handleChange}
                            />
                            <TextFieldGroup
                                name='price'
                                value={this.state.price}
                                label='Price'
                                error={null}
                                type='number'
                                onChange={this.handleChange}
                            />
                            <UploadFieldGroup
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

CreateFood.propTypes = {
    food: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    food: state.food,
    errors: state.errors
});

export default connect(mapStateToProps, { createFood })(
    withRouter(CreateFood)
);