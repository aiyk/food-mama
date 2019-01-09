import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Spinner from '../common/Spinner'
import { getBranches } from '../../store/actions/branchActions'
import Table from '../common/Table'
import CreateBranch from './CreateBranch'
import '../users/users.scss'

class Branches extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openPopup: false
        }
    }

    componentDidMount() {
        this.props.getBranches();
    }
    toggle_modal = () => {
        this.setState({
            openPopup: !this.state.openPopup
        })
    }
    render() {
        const { metaData, actions, collections, loading } = this.props.branch;
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
                        ? (<CreateBranch toggle_modal={this.toggle_modal} />)
                        : (null)
                }

            </div>
        )
    }
}

Branches.propTypes = {
    getBranches: PropTypes.func.isRequired,
    branch: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    branch: state.branch
});

export default connect(mapStateToProps, { getBranches })(Branches)