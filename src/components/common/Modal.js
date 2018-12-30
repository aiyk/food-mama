import React, { Component } from 'react'
import TimesIco from '../../assets/icons/times.svg'

export default class Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            openPopup: this.props.openPopup,
            modalTitle: this.props.modalTitle
        }
    }
    render() {
        const { toggle_modal } = this.props;

        return (
            <div className="modal-overlay">
                <div className="modal-wrap shadow">
                    <div className="modal-header">
                        <div className="modal-title">{this.state.modalTitle} {'Detailed View'}</div>
                        <img alt="" onClick={toggle_modal} src={TimesIco} />
                    </div>

                    <div className="modal-content">
                        {Object.keys(this.state.data).map((valValue, valKey) =>
                            typeof valValue === "object"
                                ? (
                                    <div key={valKey}>
                                        {Object.keys(valValue).map((nestedValue, nestedKey) =>
                                            <div key={nestedKey} className="flex-modal-content">
                                                <div className="modal-item-key">{nestedValue}</div>
                                                <div className="modal-item-val">{valValue[nestedValue]}</div>
                                            </div>
                                        )}
                                    </div>
                                )
                                : (
                                    <div key={valKey} className="flex-modal-content">
                                        <div className="modal-item-key">{valValue}</div>
                                        <div className="modal-item-val">{this.state.data[valKey]}</div>
                                    </div>
                                )
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
