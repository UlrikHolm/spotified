import { Track } from '../../src/endpoints/Track';
import { UserSavedTracks } from '../../src/types';

jest.mock('../../src/client/ReadWriteBaseClient');
jest.mock('../../src/utils');

describe('Track', () => {
  let track: Track;

  beforeEach(() => {
    track = new Track({} as any);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getTrack', () => {
    it('should call get method with correct params and return expected result', async () => {
      const mockId = '1234';
      const mockParams = { market: 'US' };
      const mockResponse = {
        id: '1234',
        name: 'Track Name',
        artists: [],
        album: {} as any,
        duration_ms: 200000,
      };
      (track['get'] as jest.Mock).mockResolvedValue(mockResponse);

      const result = await track.getTrack(mockId, mockParams);

      expect(track['get']).toHaveBeenCalledWith(`/tracks/${mockId}`, mockParams);
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getUsersSavedTracks', () => {
    it('should call get method with correct params and return expected result', async () => {
      const mockParams = { limit: 10, offset: 0 };
      const mockResponse: UserSavedTracks = {
        href: 'https://api.spotify.com/v1/me/tracks?offset=0&limit=10',
        items: [],
        limit: 10,
        next: 'https://api.spotify.com/v1/me/tracks?offset=0&limit=10',
        offset: 0,
        previous: 'https://api.spotify.com/v1/me/tracks?offset=0&limit=10',
        total: 0,
      };
      (track['get'] as jest.Mock).mockResolvedValue(mockResponse);

      const result = await track.getUsersSavedTracks(mockParams);

      expect(track['get']).toHaveBeenCalledWith('/me/tracks', mockParams);
      expect(result).toEqual(mockResponse);
    });
  });
});
