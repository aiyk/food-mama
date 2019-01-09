import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Spinner from '../common/Spinner'
import { getWallets } from '../../store/actions/settingsActions'
import Table from '../common/Table'
import CreateWalletType from './CreateWalletType'
import '../users/users.scss'

class WalletSettings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openPopup: false
        }
    }

    componentDidMount() {
        this.props.getWallets();
    }
    toggle_modal = () => {
        this.setState({
            openPopup: !this.state.openPopup
        })
    }
    render() {
        const { metaData, actions, collections, loading } = this.props.wallet;
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
                        ? (<CreateWalletType toggle_modal={this.toggle_modal} />)
                        : (null)
                }

            </div>
        )
    }
}

WalletSettings.propTypes = {
    getWallets: PropTypes.func.isRequired,
    wallet: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    wallet: state.settings.walletTypes
});

export default connect(mapStateToProps, { getWallets })(WalletSettings)