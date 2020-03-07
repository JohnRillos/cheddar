const LocalStorage = require('local-storage');

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

export default { submitSceneForm };