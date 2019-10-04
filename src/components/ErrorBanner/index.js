import React, { Component } from 'react';
import './styles.css';

class ErrorBanner extends Component {
  render = () => (
    <div className="ErrorBanner">{this.props.message}</div>
  )
}

export default ErrorBanner;