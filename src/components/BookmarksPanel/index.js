import React, { Component } from 'react';
import './styles.scss';
import Bookmarker from '../../modules/Bookmarker';

class BookmarksPanel extends Component {
  constructor(props) {
    super(props);
  }

  isPermanent() {
    return ['start', 'end'].includes(this.props.currentSceneId);
  }

  renderControls = () => (
    <div className="button-row">
      <button
        type="button"
        className={`control-button ${this.isPermanent() ? 'disabled-hover' : 'danger'}`}
        onClick={() => this.isPermanent() ? {} : this.props.removeBookmark(this.props.currentSceneId)}
      >
        -
      </button>
      <button
        type="button"
        className='control-button'
        onClick={() => this.props.addBookmark(this.props.currentSceneId)}
      >
        +
      </button>
    </div>
  )

  renderBookmark = (scene) => (
    <button
      type="button"
      className="control-button"
      onClick={() => this.props.changeScene(scene.id)}
      key={scene.sceneName}
    >
      {scene.sceneName}
    </button>
  )

  render = () => (
    <div className="panel">
      <div className="title">Bookmarks</div>
      {this.renderControls()}
      {this.props.bookmarkedScenes.map(this.renderBookmark)}
    </div>
  )
}

export default BookmarksPanel;