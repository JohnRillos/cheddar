import React, { Component } from 'react';
import './styles.scss';
import ls from 'local-storage';

function getBookmarkedScenes() {
  const bookmarkedIds = ls.get("bookmarkedSceneIds") || ["start", "end"];
  const allScenes = ls.get("scenes") || {};
  const bookmarkedScenes = bookmarkedIds.map(id => allScenes[id]).filter(Boolean);
  return bookmarkedScenes;
}

class BookmarksPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarkedScenes: []
    };
  }

  componentDidMount() {
    return this.setState({
      bookmarkedScenes: getBookmarkedScenes()
    });
  }

  renderBookmark = (scene) => (
    <button
      type="button"
      className="scene"
      onClick={() => this.props.changeScene(scene.id)}
      key={scene.sceneName}
    >
      {scene.sceneName}
    </button>
  )

  render = () => (
    <div className="panel">
      <div className="title">Bookmarks</div>
      {this.state.bookmarkedScenes.map(this.renderBookmark)}
    </div>
  )
}

export default BookmarksPanel;