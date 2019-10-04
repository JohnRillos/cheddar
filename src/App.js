import React, { Component } from 'react';
import './App.css';
import BookmarksPanel from './components/BookmarksPanel';
import StoragePanel from './components/StoragePanel';
import SceneForm from './components/SceneForm';
import Footer from './components/Footer';
import FormActionHandler from './modules/FormActionHandler';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSceneId: undefined
    }
  }

  changeScene(nextSceneId) {
    return this.setState({
      currentSceneId: nextSceneId,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-h1">Cheddar</h1>
          <p className="App-p">Choose Your Own Adventure Editor</p>
        </header>
        <div className="main-row">
          <div className="left-panel">
            <BookmarksPanel
              changeScene={(id) => this.changeScene(id)}
            />
          </div>
          <SceneForm
            initialValues={FormActionHandler.getScene(this.state.currentSceneId)}
          />
          <div className="right-panel">
            <StoragePanel/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
