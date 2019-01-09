import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Spinner from '../common/Spinner'
import { getFoods, createFood, deleteFood } from '../../store/actions/foodActions'
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
        const { metaData, actions, collections, loading } = this.props.food;
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

export default connect(mapStateToProps, { getFoods, createFood, deleteFood })(Foods)