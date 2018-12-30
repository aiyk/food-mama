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
                            <div key={valKey} className="flex-modal-content">
                                <div className="modal-item-key">{valValue}</div>
                                {
                                    typeof this.state.data[valValue] === "object"
                                        ? (
                                            <div className="modal-obj-val">
                                                {Object.entries(this.state.data[valValue]).map(nestedValue =>
                                                    <div key={nestedValue[0]} className="postValWrap">
                                                        <div className="modal-item-key">
                                                            {
                                                                nestedValue[0].includes(0)
                                                                    ? (null)
                                                                    : (<span>{nestedValue[0]}</span>)
                                                            }
                                                        </div>
                                                        <div className="modal-item-val">{nestedValue[1]}</div>
                                                    </div>
                                                )}
                                            </div>
                                        )
                                        : (<div className="modal-item-val">{this.state.data[valValue]}</div>)
                                }
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
