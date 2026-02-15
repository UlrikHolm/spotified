import { ReadWriteBaseClient } from '../client/ReadWriteBaseClient.js';
import {
  Audiobook as AudiobookDetail,
  AudiobookChapters,
  UserSavedAudiobooks,
  GetUsersSavedAudiobooksOptionalParams as GetUserSavedAudiobooksOptionalParams,
  GetAudiobookOptionalParams,
  GetAudiobookChaptersOptionalParams,
} from '../types/index.js';

export class Audiobook extends ReadWriteBaseClient {
  /**
   * Get Spotify catalog information for a single audiobook.
   * Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
   * https://developer.spotify.com/documentation/web-api/reference/get-an-audiobook
   */
  getAudiobook(id: string, optionalParams?: GetAudiobookOptionalParams) {
    return this.get<AudiobookDetail>(`/audiobooks/${id}`, optionalParams);
  }

  /**
   * Get Spotify catalog information about an audiobook's chapters.
   * Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.
   * https://developer.spotify.com/documentation/web-api/reference/get-audiobook-chapters
   */
  getAudiobookChapters(id: string, optionalParams?: GetAudiobookChaptersOptionalParams) {
    return this.get<AudiobookChapters>(`/audiobooks/${id}/chapters`, optionalParams);
  }

  /**
   * Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.
   * https://developer.spotify.com/documentation/web-api/reference/get-users-saved-audiobooks
   */
  getUserSavedAudiobook(optionalParams?: GetUserSavedAudiobooksOptionalParams) {
    return this.get<UserSavedAudiobooks>(`/me/audiobooks`, optionalParams);
  }
}

export default Audiobook;
