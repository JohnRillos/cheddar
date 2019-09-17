function submitSceneForm(formInput) {
  console.log('values', JSON.stringify(formInput, null, 2));
  alert(`Submitted scene "${formInput.sceneName}"`);
}

function loadScene(sceneId) {
  return fetch(`http://localhost:3000/scenes/${sceneId || '1'}`)
      .then(response => response.json())
}

module.exports = { submitSceneForm, loadScene };