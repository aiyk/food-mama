import React from 'react'
import PropTypes from 'prop-types'

const UploadFieldGroup = ({
    name,
    value,
    label,
    error,
    info,
    onChange,
    disabled
}) => {
    return (
        <div className="input-group">
            <label>{label}</label>
            <input
                type='file'
                name={name}
                className="site-input"
                onChange={onChange}
                disabled={disabled}
                value={value}
            />
            {info && <small className="input-info">{info}</small>}
            {error && (<div className="input-err">{error}</div>)}
        </div>
    )
}

UploadFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string,
    label: PropTypes.string
}

export default UploadFieldGroup;