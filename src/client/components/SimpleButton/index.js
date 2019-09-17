import React, { Component } from 'react';
import "./styles.css"

class SimpleButton extends Component {
  render = () => (
    <button type={this.props.type || "button"} className={`button ${this.props.styles}`} onClick={this.props.onClick} >
      {this.props.text}
    </button>
  )
}

export default SimpleButton;