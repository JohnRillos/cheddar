import React, { Component } from 'react';
import './styles.css';

class ErrorBanner extends Component {
  constructor(props) {
    super(props);
  }

  render = () => (
    <div className="ErrorBanner">{this.props.message}</div>
  )
}

export default ErrorBanner;