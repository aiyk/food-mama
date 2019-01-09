import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Spinner from '../common/Spinner'
import { getEnterprises } from '../../store/actions/enterpriseActions'
import Table from '../common/Table'
import CreateEnterprise from './CreateEnterprise'
import '../users/users.scss'

class Enterprises extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openPopup: false
        }
    }

    componentDidMount() {
        this.props.getEnterprises();
    }
    toggle_modal = () => {
        this.setState({
            openPopup: !this.state.openPopup
        })
    }
    render() {
        const { metaData, actions, collections, loading } = this.props.enterprise;
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
                        ? (<CreateEnterprise toggle_modal={this.toggle_modal} />)
                        : (null)
                }

            </div>
        )
    }
}

Enterprises.propTypes = {
    getEnterprises: PropTypes.func.isRequired,
    enterprise: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    enterprise: state.enterprise
});

export default connect(mapStateToProps, { getEnterprises })(Enterprises)