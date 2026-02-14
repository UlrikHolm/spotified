import { ReadWriteBaseClient } from '../client/ReadWriteBaseClient.js';
import { GetChapterOptionalParams, Chapter as ChapterDetail } from '../types/index.js';
import joinIdsArrayToString from '../utils.js';

export class Chapter extends ReadWriteBaseClient {
  /**
   * Get Spotify catalog information for a single audiobook chapter. Chapters are only available within
   * the US, UK, Canada, Ireland, New Zealand and Australia markets.
   * https://developer.spotify.com/documentation/web-api/reference/get-a-chapter
   */
  getChapter(id: string, optionalParams?: GetChapterOptionalParams) {
    return this.get<ChapterDetail>(`/chapters/${id}`, optionalParams);
  }
}

export default Chapter;
