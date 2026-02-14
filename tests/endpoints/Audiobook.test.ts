import { Audiobook } from '../../src/endpoints/Audiobook';
import {
  Audiobook as AudiobookDetail,
  AudiobookChapters,
  UserSavedAudiobooks,
  GetUsersSavedAudiobooksOptionalParams,
  GetAudiobookOptionalParams,
  GetAudiobookChaptersOptionalParams,
} from '../../src/types';

jest.mock('../../src/client/ReadWriteBaseClient');
jest.mock('../../src/utils');

describe('Audiobook', () => {
  let audiobook: Audiobook;

  beforeEach(() => {
    audiobook = new Audiobook({} as any);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getAudiobook', () => {
    it('should call get method with correct params and return expected result', async () => {
      const mockId = 'audiobook123';
      const mockParams: GetAudiobookOptionalParams = { market: 'US' };
      const mockResponse: AudiobookDetail = {
        id: 'audiobook123',
        name: 'Test Audiobook',
        authors: [{ name: 'Test Author' }],
        narrators: [{ name: 'Test Narrator' }],
        description: 'This is a test audiobook',
        languages: ['en'],
        type: 'audiobook',
        uri: 'spotify:audiobook:audiobook123',
        total_chapters: 10,
        href: 'https://api.spotify.com/v1/audiobooks/audiobook123',
        images: [
          {
            url: 'https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228',
            height: 300,
            width: 300,
          },
        ],
        copyrights: [],
        chapters: {
          href: 'https://api.spotify.com/v1/audiobooks/audiobook123/chapters',
          total: 10,
          items: [],
          limit: 20,
          offset: 0,
          next: null,
          previous: null,
        },
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/audiobook/audiobook123',
        },
        html_description: '<p>This is a test audiobook</p>',
        media_type: 'audio',
      };
      (audiobook['get'] as jest.Mock).mockResolvedValue(mockResponse);

      const result = await audiobook.getAudiobook(mockId, mockParams);

      expect(audiobook['get']).toHaveBeenCalledWith(`/audiobooks/${mockId}`, mockParams);
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getAudiobookChapters', () => {
    it('should call get method with correct params and return expected result', async () => {
      const mockId = 'audiobook123';
      const mockParams: GetAudiobookChaptersOptionalParams = { market: 'US', limit: 20, offset: 0 };
      const mockResponse: AudiobookChapters = {
        href: 'https://api.spotify.com/v1/audiobooks/audiobook123/chapters',
        items: [],
        limit: 20,
        next: null,
        offset: 0,
        previous: null,
        total: 10,
      };
      (audiobook['get'] as jest.Mock).mockResolvedValue(mockResponse);

      const result = await audiobook.getAudiobookChapters(mockId, mockParams);

      expect(audiobook['get']).toHaveBeenCalledWith(`/audiobooks/${mockId}/chapters`, mockParams);
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getUserSavedAudiobook', () => {
    it('should call get method with correct params and return expected result', async () => {
      const mockParams: GetUsersSavedAudiobooksOptionalParams = { limit: 20, offset: 0 };
      const mockResponse: UserSavedAudiobooks = {
        href: 'https://api.spotify.com/v1/me/audiobooks',
        items: [],
        limit: 20,
        next: null,
        offset: 0,
        previous: null,
        total: 3,
      };
      (audiobook['get'] as jest.Mock).mockResolvedValue(mockResponse);

      const result = await audiobook.getUserSavedAudiobook(mockParams);

      expect(audiobook['get']).toHaveBeenCalledWith('/me/audiobooks', mockParams);
      expect(result).toEqual(mockResponse);
    });
  });
});
