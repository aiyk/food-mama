import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Spinner from '../common/Spinner'
import { getOrders, createOrder, deleteOrder } from '../../store/actions/orderActions'
import Table from '../common/Table'
import CreateOrder from './CreateOrder'
import '../users/users.scss'

import EditIco from '../../assets/icons/edit.svg'
import TrashRedIco from '../../assets/icons/trash-red.svg'
import ElipsisHIco from '../../assets/icons/elipsis-h.svg'

class Orders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openPopup: false,

            tableActions: [
                {
                    label: "Detail",
                    iconLink: ElipsisHIco
                }
            ]
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
        const { orders, loading } = this.props.order;

        return (
            <div>
                <Table
                    payload={orders}
                    loading={loading}
                    toggle_modal={this.toggle_modal}
                    handle_create={this.props.createOrder}
                    handle_delete={this.props.deleteOrder}
                />
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