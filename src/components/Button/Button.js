import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Button = (props) => {
    const StyleButton = styled.button`
        background: palevioletred;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
    `

    const { text, onPress, size } = props
    const styles = {
        color: '#333',
        size: Button.size[size],
    }

    return (
        <>
            <StyleButton onClick={onPress} type="button" style={styles}>
                {text}
            </StyleButton>
        </>
    )
}

Button.displayName = 'Button'
Button.propTypes = {
    /**
     *  text.
     */
    text: PropTypes.string,
    onPress: PropTypes.func,
    size: PropTypes.oneOf(['small', 'normal', 'large']),
}
Button.defaultProps = {
    onPress: () => {},
    text: 'Button',
    size: 'normal',
}
Button.size = {
    small: '10px',
    normal: '14px',
    large: '18px',
}
export default Button
