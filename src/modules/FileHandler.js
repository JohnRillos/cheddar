import FileSaver from 'file-saver';
import LocalStorage from 'local-storage';

function getBlob(localItemName) {
  const jsonString = JSON.stringify(LocalStorage.get(localItemName), null, 2);
  return new Blob([jsonString], { type: "text/plain;charset=utf-8" });
}

function saveFile(fileName) {
  FileSaver.saveAs(getBlob('scenes'), fileName);
}

export { saveFile }