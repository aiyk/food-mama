import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Spinner from '../common/Spinner'
import { getUsers } from '../../store/actions/userActions'
import Table from '../common/Table'
import CreateUser from './CreateUser'
import './users.scss'

class Users extends Component {

    state = {
        openPopup: false,
        dataset: []
    }

    componentDidMount() {
        this.props.getUsers();
    }
    toggle_modal = () => {
        this.setState({
            openPopup: !this.state.openPopup
        })
    }
    render() {
        const { metaData, actions, collections, loading } = this.props.user;
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
                        ? (<CreateUser toggle_modal={this.toggle_modal} />)
                        : (null)
                }

            </div>
        )
    }
}

Users.propTypes = {
    getUsers: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps, { getUsers })(Users)