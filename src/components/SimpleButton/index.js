import React, { Component } from 'react';
import "./styles.css"

class SimpleButton extends Component {
  getFontWeight = () => {
    return this.props.text.length === 1 ? "bold" : null;
  }

  render = () => (
    <button
      type={this.props.type || "button"}
      className={`button ${this.getFontWeight()} ${this.props.styles}`} onClick={this.props.onClick}
    >
      {this.props.text}
    </button>
  )
}

export default SimpleButton;