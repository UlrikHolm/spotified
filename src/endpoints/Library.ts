import { joinUrisArrayToString } from '../utils.js';
import { ReadWriteBaseClient } from '../client/ReadWriteBaseClient.js';

export class Library extends ReadWriteBaseClient {
  /**
   * Add one or more items to the current user's library.
   * https://developer.spotify.com/documentation/web-api/reference/save-library-items
   */
  saveItemsToLibrary(uris: string[]) {
    return this.put(`/me/library`, { uris: joinUrisArrayToString(uris) });
  }

  /**
   * Remove one or more items from the current user's library.
   * https://developer.spotify.com/documentation/web-api/reference/remove-library-items
   */
  removeItemsFromLibrary(uris: string[]) {
    return this.delete(`/me/library`, { uris: joinUrisArrayToString(uris) });
  }

  /**
   * Check if one or more items are already saved in the current user's library.
   * https://developer.spotify.com/documentation/web-api/reference/check-library-contains
   */
  checkSavedLibraryItems(uris: string[]) {
    return this.get<Array<boolean>>(`/me/library/contains`, { uris: joinUrisArrayToString(uris) });
  }
}

export default Library;
