import joinIdsArrayToString, { generateQueryParametersString } from '../utils.js';
import { ReadWriteBaseClient } from '../client/ReadWriteBaseClient.js';
import {
  GetShowParams,
  Show as ShowDetail,
  ShowEpisodes,
  UserSavedShows,
  GetShowEpisodesOptionalParams,
  GetUsersSavedShowsOptionalParams,
} from '../types/index.js';

export class Show extends ReadWriteBaseClient {
  /**
   * Get Spotify catalog information for a single show identified by its unique Spotify ID.
   * https://developer.spotify.com/documentation/web-api/reference/get-a-show
   */
  getShow(id: string, optionalParams?: GetShowParams) {
    return this.get<ShowDetail>(`/shows/${id}`, optionalParams);
  }

  /**
   * Get Spotify catalog information about an show’s episodes.
   * Optional parameters can be used to limit the number of episodes returned.
   * https://developer.spotify.com/documentation/web-api/reference/get-a-shows-episodes
   */
  getShowsEpisodes(id: string, optionalParams: GetShowEpisodesOptionalParams) {
    return this.get<ShowEpisodes>(`/shows/${id}/episodes`, optionalParams);
  }

  /**
   * Get a list of shows saved in the current Spotify user's library.
   * Optional parameters can be used to limit the number of shows returned.
   * https://developer.spotify.com/documentation/web-api/reference/get-users-saved-shows
   */
  getUsersSavedShows(optionalParams?: GetUsersSavedShowsOptionalParams) {
    return this.get<UserSavedShows>(`/me/shows`, optionalParams);
  }
}

export default Show;
