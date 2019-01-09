import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Spinner from '../common/Spinner'
import { getFoodCategories } from '../../store/actions/settingsActions'
import Table from '../common/Table'
import CreateFoodCategory from './CreateFoodCategory'
import '../users/users.scss'

class FoodCategorySettings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openPopup: false
        }
    }

    componentDidMount() {
        this.props.getFoodCategories();
    }
    toggle_modal = () => {
        this.setState({
            openPopup: !this.state.openPopup
        })
    }
    render() {
        const { metaData, actions, collections, loading } = this.props.foodCategory;
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
                        ? (<CreateFoodCategory toggle_modal={this.toggle_modal} />)
                        : (null)
                }

            </div>
        )
    }
}

FoodCategorySettings.propTypes = {
    getFoodCategories: PropTypes.func.isRequired,
    foodCategory: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    foodCategory: state.settings.foodCategory
});

export default connect(mapStateToProps, { getFoodCategories })(FoodCategorySettings)