import React from 'react'

import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = (props) => {
    // const wrapper = styled.button`
    //  color: ${props => props.fg};
    //  border: 2px solid ${props => props.fg};
    //     background: ${props => props.bg};

    //     font-size: 1em;
    //     margin: 1em;
    //     padding: 0.25em 1em;
    //     border-radius: 3px;
    // `;

    const Btn = styled.button`
        text-transform: uppercase;
        font-size: 1.5em;
        font-weight: bold;
        letter-spacing: 4px;

        background: #5cdb95;
        color: #05385b;

        border: none;
        border-radius: 5px;
        padding: 10px 20px;
    `
  const { text } = props;
  return (<Btn>{text}</Btn>);
}
Button.propTypes = {
    /**
     * Label text.
     */
    text: PropTypes.string,
}
Button.defaultProps = {
    text: 'Button',
}

export default Button
