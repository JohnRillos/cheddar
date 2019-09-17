import React from 'react';
import SimpleButton from '../SimpleButton';
import './styles.css';

const renderExitButton = () => {
  return <SimpleButton text='x' styles='exit'/>;
}

const TopNavBar = () => (
  <div className='TopNavBar'>
    <div className='left'>Left</div>
    <div className='center'><text>Cheddar</text></div>
    <div className='right'>{renderExitButton()}</div>
  </div>
)

export default TopNavBar;