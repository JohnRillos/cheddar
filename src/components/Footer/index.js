import React from 'react';
import { version } from '../../../package.json';
import './styles.css';

const Footer = () => (
  <div className="footer">
    {version}
  </div>
)

export default Footer