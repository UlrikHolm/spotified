import { Show } from '../../src/endpoints/Show';
import {
  Show as ShowDetail,
  ShowEpisodes,
  UserSavedShows,
  GetShowParams,
  GetShowEpisodesOptionalParams,
  GetUsersSavedShowsOptionalParams,
} from '../../src/types';

jest.mock('../../src/client/ReadWriteBaseClient');
jest.mock('../../src/utils');

describe('Show', () => {
  let show: Show;

  beforeEach(() => {
    show = new Show({} as any);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getShow', () => {
    it('should call get method with correct params and return expected result', async () => {
      const mockId = 'show123';
      const mockParams: GetShowParams = { market: 'US' };
      const mockResponse: ShowDetail = {
        copyrights: [],
        description: 'Test show',
        html_description: '<p>Test show</p>',
        explicit: false,
        external_urls: { spotify: 'https://open.spotify.com/show/show123' },
        href: 'https://api.spotify.com/v1/shows/show123',
        id: 'show123',
        images: [],
        is_externally_hosted: false,
        languages: ['en'],
        media_type: 'audio',
        name: 'Test Show',
        type: 'show',
        uri: 'spotify:show:show123',
        total_episodes: 10,
        episodes: {
          href: 'https://api.spotify.com/v1/shows/show123/episodes',
          items: [],
          limit: 50,
          next: null,
          offset: 0,
          previous: null,
          total: 10,
        },
      };
      (show['get'] as jest.Mock).mockResolvedValue(mockResponse);

      const result = await show.getShow(mockId, mockParams);

      expect(show['get']).toHaveBeenCalledWith(`/shows/${mockId}`, mockParams);
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getShowsEpisodes', () => {
    it('should call get method with correct params and return expected result', async () => {
      const mockId = 'show123';
      const mockParams: GetShowEpisodesOptionalParams = { market: 'US', limit: 10, offset: 0 };
      const mockResponse: ShowEpisodes = {
        href: 'https://api.spotify.com/v1/shows/show123/episodes?offset=0&limit=10',
        items: [],
        limit: 10,
        next: null,
        offset: 0,
        previous: null,
        total: 50,
      };
      (show['get'] as jest.Mock).mockResolvedValue(mockResponse);

      const result = await show.getShowsEpisodes(mockId, mockParams);

      expect(show['get']).toHaveBeenCalledWith(`/shows/${mockId}/episodes`, mockParams);
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getUsersSavedShows', () => {
    it('should call get method with correct params and return expected result', async () => {
      const mockParams: GetUsersSavedShowsOptionalParams = { limit: 20, offset: 0 };
      const mockResponse: UserSavedShows = {
        href: 'https://api.spotify.com/v1/me/shows?offset=0&limit=20',
        items: [],
        limit: 20,
        next: null,
        offset: 0,
        previous: null,
        total: 3,
      };
      (show['get'] as jest.Mock).mockResolvedValue(mockResponse);

      const result = await show.getUsersSavedShows(mockParams);

      expect(show['get']).toHaveBeenCalledWith('/me/shows', mockParams);
      expect(result).toEqual(mockResponse);
    });
  });
});
