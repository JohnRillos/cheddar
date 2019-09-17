import FileSaver from 'file-saver';
import LocalStorage from 'local-storage';

function getBlob(localItemName) {
  return new Blob([JSON.stringify(LocalStorage.get(localItemName))], { type: "text/plain;charset=utf-8" });
}

function saveFile(fileName, localItemName) {
  FileSaver.saveAs(getBlob(localItemName), fileName);
}

export { saveFile }