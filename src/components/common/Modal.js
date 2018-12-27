import React, { Component } from 'react'
import TimesIco from '../../assets/icons/times.svg'

export default class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openPopup: false,
            modalTitle: "New Data Entry"
        }
    }
    toggle_modal = () => {
        this.setState({
            openPopup: !this.openPopup
        })
    }
    updateObj = () => {
        let updatedCollection = [...this.state.collections];
        updatedCollection.payload.name = this.params.name //there isnt no params
        this.setState({
            collection: updatedCollection
        });
        if (this.state.payload.val) {
            this.setState({
                error: null
            });
            this.params._return(this.payload);
        } else {
            this.error = `${this.params.name} is required`;
        }
    }
    render() {
        const { createCollection, collections_keys } = this.props;

        return (
            <div className="modal-overlay">
                <div className="modal-wrap shadow">
                    <div className="modal-header">
                        <div className="modal-title">{this.state.modalTitle}</div>
                        <img alt="" onClick={this.toggle_modal} src={TimesIco} />
                    </div>

                    <div className="modal-content">
                        <form onSubmit={createCollection}>
                            {collections_keys().map(key =>
                                <div className="input-group" key="key">
                                    <div className="input-group-label">{key}</div>
                                    <input className={[{ isInvalid: this.state.error }, 'form-control', 'form-control-lg']} name="key"
                                        type="text" onChange={this.updateObj} value={this.state.payload.val} />
                                    {
                                        this.state.error
                                            ? <div className="invalid-feedback">{this.state.error}</div>
                                            : null
                                    }
                                </div>
                            )}
                            <button className="btn btn-blue">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
