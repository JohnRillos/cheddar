const LocalStorage = require('local-storage');
const demo = require('../dev/demo.json');

function getScene(sceneId = 'start') {
  const localScenes = LocalStorage.get('scenes');
  if (!localScenes) {
    LocalStorage.set('scenes', demo.scenes);
    return demo.scenes['start'];
  }
  if (localScenes && localScenes[sceneId]) {
    return localScenes[sceneId];
  }
  throw new Error(`Scene '${sceneId}' not found!`);
}

function getNextSceneIds(currentScene = {}) {
  return (currentScene.choices || []).map(choice => choice.nextScene);
}

function getNextScenes(currentScene) {
  const sceneIds = getNextSceneIds(currentScene);
  return sceneIds.map(id => {
    try {
      return getScene(id);
    } catch (error) {
      return { id, error};
    }
  })
}

// function getScene(sceneId = 'start') {
//   const localScenes = LocalStorage.get('scenes');
//   if (!localScenes) {
//     LocalStorage.set('scenes', demo.scenes);
//     return demo.scenes['start'];
//   }
//   if (localScenes && localScenes[sceneId]) {
//     return localScenes[sceneId];
//   }
//   throw new Error(`Scene '${sceneId}' not found!`);
// }

export default { getScene, getNextScenes };