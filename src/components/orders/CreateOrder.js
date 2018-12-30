import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createOrder } from '../../store/actions/orderActions';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup'
import CheckboxFieldGroup from '../common/CheckboxFieldGroup'
import UploadFieldGroup from '../common/UploadFieldGroup'
import SelectListGroup from '../common/SelectListGroup'
import TimesIco from '../../assets/icons/times.svg'

class CreateOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalTitle: "Place An Order",

            category: '',
            food: '',
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

        const orderData = {
            order: this.state.order,
            category: this.state.category,
            preorder: this.state.preorder,
            price: this.state.price,
            img: this.state.img,
        };

        this.props.createOrder(orderData, this.props.history);
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        const { toggle_modal } = this.props;
        // Select options for food category
        const options = [
            { label: '* Select Food Category', value: 0 },
            { label: 'Interconttinental Dishes', value: 'Interconttinental Dishes' },
            { label: 'Pastriesr', value: 'Pastriesr' },
            { label: 'Bevrages', value: 'Senior Developer' },
            { label: 'African Cousins', value: 'African Cousins' },
            { label: 'Sea Food', value: 'Sea Food' }
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
                                value={this.state.img}
                                label='Address'
                                error={null}
                                type='file'
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

CreateOrder.propTypes = {
    order: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    order: state.order,
    errors: state.errors
});

export default connect(mapStateToProps, { createOrder })(
    withRouter(CreateOrder)
);