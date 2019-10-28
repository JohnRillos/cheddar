import React, { Component } from 'react';
import './App.css';
import BookmarksPanel from './components/BookmarksPanel';
import StoragePanel from './components/StoragePanel';
import SceneForm from './components/SceneForm';
import Footer from './components/Footer';
import FormActionHandler from './modules/FormActionHandler';
import Bookmarker from './modules/Bookmarker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSceneId: undefined,
      bookmarkedScenes: []
    }
  }

  changeScene(nextSceneId) {
    return this.setState({
      currentSceneId: nextSceneId,
    });
  }

  componentDidMount() {
    return this.setState({
      bookmarkedScenes: Bookmarker.getBookmarkedScenes()
    });
  }

  refreshBookmarks() {
    this.setState({
      bookmarkedScenes: Bookmarker.getBookmarkedScenes()
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
