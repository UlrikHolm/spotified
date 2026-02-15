import { Artist } from '../../src/endpoints/Artist';
import { Artist as ArtistProfile, ArtistAlbumResult } from '../../src/types';
import * as utils from '../../src/utils';

jest.mock('../../src/client/ReadWriteBaseClient');
jest.mock('../../src/utils');

describe('Artist', () => {
  let artist: Artist;

  beforeEach(() => {
    artist = new Artist({} as any);
    jest.resetAllMocks();
  });

  describe('getArtist', () => {
    it('should call get method with correct params and return expected result', async () => {
      const mockArtistId = '1234';
      const mockResponse: ArtistProfile = {
        id: '1234',
        name: 'Test Artist',
        type: 'artist',
        uri: 'spotify:artist:1234',
      };

      (artist['get'] as jest.Mock).mockResolvedValue(mockResponse);

      const result = await artist.getArtist(mockArtistId);

      expect(artist['get']).toHaveBeenCalledWith(`/artists/${mockArtistId}`);
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getArtistAlbums', () => {
    it('should call get method with correct params and return expected result', async () => {
      const mockArtistId = '1234';
      const mockOptionalParams = { limit: 10, offset: 0 };
      const mockResponse: ArtistAlbumResult = {
        href: 'https://api.spotify.com/v1/artists/1234/albums',
        items: [],
        limit: 10,
        next: 'https://api.spotify.com/v1/me/shows?offset=1&limit=1',
        offset: 0,
        previous: 'https://api.spotify.com/v1/me/shows?offset=1&limit=1',
        total: 0,
      };

      (artist['get'] as jest.Mock).mockResolvedValue(mockResponse);

      const result = await artist.getArtistAlbums(mockArtistId, mockOptionalParams);

      expect(artist['get']).toHaveBeenCalledWith('/artists/1234/albums', mockOptionalParams);
      expect(result).toEqual(mockResponse);
    });
  });
});
