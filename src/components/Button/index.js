import React from 'react'
import PropTypes from 'prop-types'



import './styles.css'

/**
    
    * @function Button
* */

export const Button = (props) => {
 
  const { text } = props;
    // eslint-disable-next-line react/button-has-type
    return (<button className="button">{text}</button>);
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


