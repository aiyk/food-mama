import React from 'react'
import PropTypes from 'prop-types'

const TextFieldGroup = ({
    name,
    placeholder, 
    value,
    label,
    error,
    info,
    type,
    onChange,
    disabled
}) => {
  return (
    <div className="input-group">
        <label>{label}</label>
        <input
            type={type}
            name={name}
            className="site-input"
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
            value={value}
        />
        {info && <small className="input-info">{info}</small>}
        {error && (<div className="input-err">{error}</div>)}
    </div>
  )
}

TextFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    info: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string,
    label: PropTypes.string
}

TextFieldGroup.defaultProps = {
    type: 'text'
}

export default TextFieldGroup;