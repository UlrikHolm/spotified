import { ReadWriteBaseClient } from '../client/ReadWriteBaseClient.js';
import {
  Album as AlbumDetail,
  AlbumTracks,
  GetAlbumOptionalParams,
  GetUserSavedAlbumsOptionalParams,
  GetAlbumTracksOptionalParams,
  UserSavedAlbum,
} from '../types/index.js';

export class Album extends ReadWriteBaseClient {
  /**
   * Get Spotify catalog information for a single album.
   * https://developer.spotify.com/documentation/web-api/reference/get-an-album
   */
  getAlbum(id: string, optionalParams?: GetAlbumOptionalParams) {
    return this.get<AlbumDetail>(`/albums/${id}`, optionalParams);
  }

  /**
   * Get Spotify catalog information about an album’s tracks.
   * Optional parameters can be used to limit the number of tracks returned.
   * https://developer.spotify.com/documentation/web-api/reference/get-an-albums-tracks
   */
  getAlbumTracks(id: string, optionalParams?: GetAlbumTracksOptionalParams) {
    return this.get<AlbumTracks>(`/albums/${id}/tracks`, optionalParams);
  }

  /**
   * Get a list of the albums saved in the current Spotify user's 'Your Music' library.
   * https://developer.spotify.com/documentation/web-api/reference/get-users-saved-albums
   */
  getUserSavedAlbum(optionalParams?: GetUserSavedAlbumsOptionalParams) {
    return this.get<UserSavedAlbum>(`/me/albums`, optionalParams);
  }
}

export default Album;
