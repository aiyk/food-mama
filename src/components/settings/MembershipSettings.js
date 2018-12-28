import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Spinner from '../common/Spinner'
import { getMemberships } from '../../store/actions/settingsActions'
import Table from '../common/Table'
import CreateMembership from './CreateMembership'
import '../users/users.scss'

class MembershipSettings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openPopup: false
        }
    }

    componentDidMount() {
        this.props.getMemberships();
    }
    toggle_modal = () => {
        this.setState({
            openPopup: !this.state.openPopup
        })
    }
    render() {
        const { membership, loading } = this.props;

        return (
            <div>
                <Table payload={membership} loading={loading} toggle_modal={this.toggle_modal} />
                {
                    this.state.openPopup
                        ? (<CreateMembership toggle_modal={this.toggle_modal} />)
                        : (null)
                }

            </div>
        )
    }
}

MembershipSettings.propTypes = {
    getMemberships: PropTypes.func.isRequired,
    membership: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    membership: state.settings.settings.membershipPlan
});

export default connect(mapStateToProps, { getMemberships })(MembershipSettings)