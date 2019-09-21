import React from 'react';
import ls from 'local-storage';
import './App.css';
import SceneForm from './components/SceneForm';
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
      <SceneForm 
        sceneId={ls.get("currentSceneId")}
      />
      <Footer/>
    </div>
  );
}

export default App;
