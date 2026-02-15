import { ReadWriteBaseClient } from '../client/ReadWriteBaseClient.js';
import { GetTrackParams, OptionalUserSavedTrackParams, Track as TrackDetail, UserSavedTracks } from '../types/index.js';

export class Track extends ReadWriteBaseClient {
  /**
   * Get Spotify catalog information for a single track identified by its unique Spotify ID
   * https://developer.spotify.com/documentation/web-api/reference/get-track
   */
  getTrack(id: string, optionalParams?: GetTrackParams) {
    return this.get<TrackDetail>(`/tracks/${id}`, optionalParams);
  }

  /**
   * Get a list of the songs saved in the current Spotify user's 'Your Music' library
   * https://developer.spotify.com/documentation/web-api/reference/get-users-saved-tracks
   */
  getUsersSavedTracks(optionalParams?: OptionalUserSavedTrackParams) {
    return this.get<UserSavedTracks>(`/me/tracks`, optionalParams);
  }
}

export default Track;
