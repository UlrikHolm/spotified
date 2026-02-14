import { joinIdsArrayToString, generateQueryParametersString } from '../utils.js';
import { ReadWriteBaseClient } from '../client/ReadWriteBaseClient.js';
import {
  CurrentUserProfile,
  FollowedArtist,
  FollowedArtistOptionalParams,
  FollowedArtistType,
  TopItemsOptionalParams,
  UsersTopItems,
  UsersTopItemsType,
} from '../types/index.js';

export class User extends ReadWriteBaseClient {
  /**
   * Get detailed profile information about the current user (including the current user's username).
   * https://developer.spotify.com/documentation/web-api/reference/get-current-users-profile
   */
  getCurrentUserProfile() {
    return this.get<CurrentUserProfile>('/me');
  }

  /**
   * Get the current user's top artists or tracks based on calculated affinity.
   * https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
   */
  getUserTopItems(type: UsersTopItemsType, optionalParams?: TopItemsOptionalParams) {
    return this.get<UsersTopItems>(`/me/top/${type}`, optionalParams);
  }

  /**
   * Get the current user's followed artists.
   * https://developer.spotify.com/documentation/web-api/reference/get-followed
   */
  getFollowedArtists(type: FollowedArtistType, optionalParams?: FollowedArtistOptionalParams) {
    return this.get<FollowedArtist>(`/me/following`, { type, ...optionalParams });
  }
}

export default User;
