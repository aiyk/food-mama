import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Spinner from '../common/Spinner'
import { getOrders, createOrder, deleteOrder } from '../../store/actions/orderActions'
import Table from '../common/Table'
import CreateOrder from './CreateOrder'
import '../users/users.scss'

class Orders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: this.props.order.orders,
            loading: this.props.order.loading,
            openPopup: false
        }
    }

    componentDidMount() {
        this.props.getOrders();
    }
    toggle_modal = () => {
        this.setState({
            openPopup: !this.state.openPopup
        })
    }
    render() {
        const { metaData, actions, collections, loading } = this.props.order;
        let renderer;

        renderer = <Table
            dataset={collections}
            metaData={metaData}
            actions={actions}
            loading={loading}
            toggle_modal={this.toggle_modal}
        />

        return (
            <div>
                {renderer}

                {
                    this.state.openPopup
                        ? (<CreateOrder toggle_modal={this.toggle_modal} />)
                        : (null)
                }

            </div>
        )
    }
}

Orders.propTypes = {
    getOrders: PropTypes.func.isRequired,
    order: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    order: state.orders
});

export default connect(mapStateToProps, { getOrders, createOrder, deleteOrder })(Orders)