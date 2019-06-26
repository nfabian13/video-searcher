import React from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'

const SearchInput = (props) => {
    const { style, onChange } = props
    return (
        <TextField
            style={style}
            margin="normal"
            placeholder="Video name"
            onChange={onChange}
        />
    );
}

SearchInput.protoTypes = {
    style: PropTypes.object,
    onChange: PropTypes.func
}

SearchInput.defaultProps = {
    onChange: () => {}
}

export default SearchInput