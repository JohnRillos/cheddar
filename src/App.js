import React from 'react';
import './App.css';
import FrameForm from './components/FrameForm';
// import TopNavBar from './components/TopNavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <TopNavBar/> */}
      <header className="App-header">
        <h1 className="App-h1">Cheddar</h1>
        <p className="App-p">Choose Your Own Adventure Editor</p>
      </header>
      <FrameForm />
      <Footer/>
    </div>
  );
}

export default App;
