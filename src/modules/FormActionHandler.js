const LocalStorage = require('local-storage');
const demo = require('../dev/demo.json');

function submitSceneForm(sceneFormInput) {
  console.log('sceneFormInput', sceneFormInput);
  const currentSceneId = sceneFormInput.id;
  const localScenes = LocalStorage.get('scenes');
  const updatedScenes = {
    ...localScenes,
    [currentSceneId]: sceneFormInput
  }
  LocalStorage.set('scenes', updatedScenes);

  alert(`Submitted scene "${sceneFormInput.sceneName}"`);
}

function getScene(sceneId) {
  const localScenes = LocalStorage.get('scenes');
  console.log('scenes:', localScenes);
  console.log('sceneId', sceneId);
  if (!sceneId) {
    return demo.scenes['0'];
  }
  if (localScenes && localScenes[sceneId]) {
    return localScenes[sceneId];
  }
  throw new Error(`Scene '${sceneId}' not found!`);
}

function loadScene(sceneId) {
  const scene = getScene(sceneId);
  LocalStorage.set("currentSceneId", scene.id);
  return scene;
}

export default { submitSceneForm, getScene, loadScene };