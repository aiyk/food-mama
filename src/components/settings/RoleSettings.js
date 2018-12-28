import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Spinner from '../common/Spinner'
import { getRoles } from '../../store/actions/settingsActions'
import Table from '../common/Table'
import CreateRole from './CreateRole'
import '../users/users.scss'

class RoleSettings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openPopup: false
        }
    }

    componentDidMount() {
        this.props.getRoles();
    }
    toggle_modal = () => {
        this.setState({
            openPopup: !this.state.openPopup
        })
    }
    render() {
        const { role, loading } = this.props;

        return (
            <div>
                <Table payload={role} loading={loading} toggle_modal={this.toggle_modal} />
                {
                    this.state.openPopup
                        ? (<CreateRole toggle_modal={this.toggle_modal} />)
                        : (null)
                }

            </div>
        )
    }
}

RoleSettings.propTypes = {
    getRoles: PropTypes.func.isRequired,
    role: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    role: state.settings.settings.roles
});

export default connect(mapStateToProps, { getRoles })(RoleSettings)