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
        const { metaData, actions, collections, loading } = this.props.role;
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
    role: state.settings.roles
});

export default connect(mapStateToProps, { getRoles })(RoleSettings)