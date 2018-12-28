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
        const { branches, loading } = this.props.branch;

        return (
            <div>
                <Table payload={branches} loading={loading} toggle_modal={this.toggle_modal} />
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