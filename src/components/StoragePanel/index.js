import React, { Component } from 'react';
import './styles.scss';
import ls from 'local-storage';
import { exportProject } from '../../modules/FileHandler';

class StoragePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderButton = (label, action, style) => (
    <button
      type="button"
      className={`control-button ${style}`}
      onClick={action}
      key={label}
    >
      {label}
    </button>
  )

  render = () => (
    <div className="panel">
      <div className="title">Data</div>
      {this.renderButton('Export to File', () => exportProject())}
      {this.renderButton('Reset', () => ls.clear(), 'danger')}
    </div>
  )
}

export default StoragePanel;