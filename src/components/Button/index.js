import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

/**
    
    * @function Button
* */

const Button = (props) => {
    const { text, onPress } = props

    return (
        <button onClick={onPress} type="button" className="button">
            {text}
        </button>
    )
}
Button.propTypes = {
    /**
     *  text.
     */
    text: PropTypes.string,
    onPress: PropTypes.func,
}
Button.defaultProps = {
    onPress: () => {},
    text: 'Button',
}
export default Button
