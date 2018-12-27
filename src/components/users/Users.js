import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Spinner from '../common/Spinner'
import { getUsers } from '../../store/actions/userActions'
import Table from '../common/Table'
import './users.scss'

class Users extends Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        const { users, loading } = this.props.user;

        return (
            <div>
                <Table payload={users} loading={loading} />
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