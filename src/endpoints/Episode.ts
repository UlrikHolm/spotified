import { ReadWriteBaseClient } from '../client/ReadWriteBaseClient.js';
import {
  GetEpisodeParams,
  GetSavedEpisodeParams,
  Episode as EpisodeDetail,
  UserSavedEpisodes,
} from '../types/index.js';

export class Episode extends ReadWriteBaseClient {
  /**
   * Get Spotify catalog information for a single episode identified by its unique Spotify ID.
   * https://developer.spotify.com/documentation/web-api/reference/get-an-episode
   */
  getEpisode(id: string, optionalParams?: GetEpisodeParams) {
    return this.get<EpisodeDetail>(`/episodes/${id}`, optionalParams);
  }

  /**
   * Get a list of the episodes saved in the current Spotify user's library
   * https://developer.spotify.com/documentation/web-api/reference/get-users-saved-episodes
   */
  getUserSavedEpisodes(optionalParams?: GetSavedEpisodeParams) {
    return this.get<UserSavedEpisodes>(`/me/episodes`, optionalParams);
  }
}

export default Episode;
