import FileSaver from 'file-saver';
import LocalStorage from 'local-storage';
import { version } from '../../package.json';

function getLocalStorageItems(itemNames = []) {
  const localStorageMap = {};
  itemNames.forEach(name => localStorageMap[name] = LocalStorage.get(name));
  return localStorageMap;
}

function toBlob(json) {
  return new Blob([JSON.stringify(json, null, 2)], { type: "text/plain;charset=utf-8" })
}

function getExportBlob() {
  return toBlob({
    editorVersion: version,
    ...getLocalStorageItems(['currentSceneId', 'bookmarkedScenes', 'scenes'])
  });
}

function exportProject() {
  FileSaver.saveAs(getExportBlob(), "cheddar-project.json");
}

export { exportProject }