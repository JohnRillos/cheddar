import React, { Component } from 'react';
import './App.css';
import BookmarksPanel from './components/BookmarksPanel';
import StoragePanel from './components/StoragePanel';
import NextScenesPanel from './components/NextScenesPanel';
import SceneForm from './components/SceneForm';
import Footer from './components/Footer';
import SceneHelper from './modules/SceneHelper';
import Bookmarker from './modules/Bookmarker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSceneId: undefined,
      bookmarkedScenes: [],
      currentScene: {},
    }
  }

  changeScene(nextSceneId) {
    console.log('change scene: ' + nextSceneId);
    return this.setState({
      currentSceneId: nextSceneId,
      currentScene: SceneHelper.getScene(nextSceneId),
    });
  }

  componentDidMount() {
    return this.setState({
      currentScene: SceneHelper.getScene(this.state.currentSceneId),
      bookmarkedScenes: Bookmarker.getBookmarkedScenes(),
    });
  }

  refreshBookmarks() {
    this.setState({
      bookmarkedScenes: Bookmarker.getBookmarkedScenes()
    });
  }

  refresh() {
    console.log('refreshing');
    this.refreshBookmarks();
    this.setState({
      currentScene: SceneHelper.getScene(this.state.currentSceneId),
    })
  }

  render() {
    console.log('currentScene', this.state.currentScene);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-h1">Cheddar</h1>
          <p className="App-p">Choose Your Own Adventure Editor</p>
        </header>
        <div className="main-row">
          <div className="left-panel">
            <BookmarksPanel
              bookmarkedScenes={this.state.bookmarkedScenes}
              currentSceneId={this.state.currentSceneId || 'start'}
              changeScene={(id) => this.changeScene(id)}
              addBookmark={(id) => {
                Bookmarker.addBookmark(id);
                this.refreshBookmarks();
              }}
              removeBookmark={(id) => {
                Bookmarker.removeBookmark(id);
                this.refreshBookmarks();
              }}
            />
          </div>
          <SceneForm
            initialValues={this.state.currentScene}
            onFormSubmit={() => this.refresh()}
          />
          <div className="right-panel">
            <StoragePanel />
            <NextScenesPanel 
              currentScene={this.state.currentScene}
              changeScene={(id) => this.changeScene(id)}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
