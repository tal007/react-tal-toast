import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Success extends Component {
  render (){
    const { className, text, type, position } = this.props
    return (
      <div id="react-toast" className={`react-toast react-toast-${type} react-toast-${position} animated ${className}`}>
        {text}
      </div>
    )
  }
}

Success.defaultProps = {
  className: "",
  text: "info",
  type: "info",
  position: "bottom"
}

Success.propTypes = {
  text: PropTypes.string.isRequired
}

export default Success