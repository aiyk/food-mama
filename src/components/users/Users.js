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
        let userItems;

        // if (users === null || loading) {
        //     userItems = <Spinner />;
        // } else {
        //     if (users.length > 0) {
        //         userItems = users.map(user => (
        //             <div className="return-wrap" key={user._id}><ProfileItem profile={profile} /></div>
        //         ))
        //     } else {
        //         userItems = <h4>No users found...</h4>;
        //     }
        // }

        return (
            <div>
                <Table collections_props={this.state.collections} metaData_props={this.state.metaData} />
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