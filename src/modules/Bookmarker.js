import ls from 'local-storage';
import demo from '../dev/demo.json';

function getBookmarkedSceneIds() {
  return ls.get("bookmarkedSceneIds") || demo.bookmarkedSceneIds;
}

function getBookmarkedScenes() {
  const bookmarkedIds = getBookmarkedSceneIds();
  const allScenes = ls.get("scenes") || {};
  const bookmarkedScenes = bookmarkedIds.map(id => allScenes[id]).filter(Boolean);
  return bookmarkedScenes;
}

function addBookmark(sceneId) {
  const bookmarkedIds = new Set(getBookmarkedSceneIds());
  bookmarkedIds.add(sceneId);
  ls.set("bookmarkedSceneIds", Array.from(bookmarkedIds));
}

function removeBookmark(sceneId) {
  const bookmarkedIds = new Set(getBookmarkedSceneIds());
  bookmarkedIds.delete(sceneId);
  ls.set("bookmarkedSceneIds", Array.from(bookmarkedIds));
}

export default { getBookmarkedScenes, addBookmark, removeBookmark }