const LocalStorage = require('local-storage');
const demo = require('../dev/demo.json');

function submitSceneForm(sceneFormInput) {
  const currentSceneId = sceneFormInput.id;
  const localScenes = LocalStorage.get('scenes');
  const updatedScenes = {
    ...localScenes,
    [currentSceneId]: sceneFormInput
  }
  LocalStorage.set('scenes', updatedScenes);
  console.info(`Submitted scene "${sceneFormInput.sceneName}"`);
}

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

export default { submitSceneForm, getScene };