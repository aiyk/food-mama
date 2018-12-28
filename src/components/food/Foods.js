import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Spinner from '../common/Spinner'
import { getFoods } from '../../store/actions/foodActions'
import Table from '../common/Table'
import CreateFood from './CreateFood'
import '../users/users.scss'

class Foods extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openPopup: false
        }
    }

    componentDidMount() {
        this.props.getFoods();
    }
    toggle_modal = () => {
        this.setState({
            openPopup: !this.state.openPopup
        })
    }
    render() {
        const { foods, loading } = this.props.food;

        return (
            <div>
                <Table payload={foods} loading={loading} toggle_modal={this.toggle_modal} />
                {
                    this.state.openPopup
                        ? (<CreateFood toggle_modal={this.toggle_modal} />)
                        : (null)
                }

            </div>
        )
    }
}

Foods.propTypes = {
    getFoods: PropTypes.func.isRequired,
    food: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    food: state.food
});

export default connect(mapStateToProps, { getFoods })(Foods)