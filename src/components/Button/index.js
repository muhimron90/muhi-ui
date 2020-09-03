import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

/**
    
    * @function Button
* */

export const Button = (props) => {
    const { text } = props

    return (
        <button type="button" className="button">
            {text}
        </button>
    )
}
Button.propTypes = {
    /**
     *  text.
     */
    text: PropTypes.string,
}
Button.defaultProps = {
    text: 'Button',
}
