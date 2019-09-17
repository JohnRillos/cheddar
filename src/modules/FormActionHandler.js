const LocalStorage = require('local-storage');
const demo = require('../dev/demo.json');

function submitSceneForm(formInput) {
  LocalStorage.set('formInput', formInput);
  console.log('localStorage formInput', LocalStorage.get('formInput'));

  console.log('values', JSON.stringify(formInput, null, 2));
  alert(`Submitted scene "${formInput.sceneName}"`);
}

function loadScene(sceneId) {
  const localScene = LocalStorage.get('formInput');
  if (localScene) {
    return Promise.resolve(localScene);
  }
  return Promise.resolve(demo.scenes[0]);
}

module.exports = { submitSceneForm, loadScene };