import React, { Component } from 'react';
import SceneHelper from '../../modules/SceneHelper';
// import ls from 'local-storage';

class NextScenesPanel extends Component {
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

  // renderBookmark = (scene) => (
  //   <button
  //     type="button"
  //     className="control-button"
  //     onClick={() => this.props.changeScene(scene.id)}
  //     key={scene.sceneName}
  //   >
  //     {scene.sceneName}
  //   </button>
  // )

  renderUnlinkedScene = (scene) => {
    return (
    <button
      type="button"
      className="control-button warning"
      // onClick={() => this.props.changeScene(scene.id)}
      key={scene.id}
    >
      {scene.id + ' (?)'}
    </button>
  )}

  renderSceneButton = (scene) => {
    if (scene.error) {
      return this.renderUnlinkedScene(scene);
    }
    return (
    <button
      type="button"
      className="control-button"
      onClick={() => this.props.changeScene(scene.id)}
      key={scene.sceneName}
    >
      {scene.sceneName}
    </button>
  )}

  buildNextSceneButtons() {
    const scenes = SceneHelper.getNextScenes(this.props.currentScene)
    return scenes.map(scene => this.renderSceneButton(scene));
  }

  render = () => (
    <div className="panel">
      <div className="title">Next Scenes</div>
      {/* {this.renderControls()} */}
      {/* {this.props.bookmarkedScenes.map(this.renderBookmark)} */}
      <div>{this.buildNextSceneButtons()}</div>
    </div>
  )
}

export default NextScenesPanel;