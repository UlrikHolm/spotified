import { Album } from '../../src/endpoints/Album';
import {
  Album as AlbumDetail,
  AlbumTracks,
  GetAlbumOptionalParams,
  GetUserSavedAlbumsOptionalParams,
  GetAlbumTracksOptionalParams,
  UserSavedAlbum,
} from '../../src/types';

jest.mock('../../src/client/ReadWriteBaseClient');
jest.mock('../../src/utils');

describe('Album', () => {
  let album: Album;

  beforeEach(() => {
    album = new Album({} as any);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getAlbum', () => {
    it('should call get method with correct params and return expected result', async () => {
      const mockId = 'album123';
      const mockParams: GetAlbumOptionalParams = { market: 'US' };
      const mockResponse: AlbumDetail = {
        id: 'album123',
        name: 'Test Album',
        type: 'album',
        artists: [],
        tracks: {
          items: [],
          total: 0,
          limit: 20,
          offset: 0,
          next: null,
          previous: null,
          href: 'https://api.spotify.com/v1/albums/album123/tracks',
        },
        uri: 'spotify:album:album123',
        href: 'https://api.spotify.com/v1/albums/album123',
        images: [],
        album_type: 'album',
        external_urls: {
          spotify: 'https://open.spotify.com/album/album123',
        },
        release_date: '2021-01-01',
        release_date_precision: 'day',
        total_tracks: 0,
        copyrights: [],
      };
      (album['get'] as jest.Mock).mockResolvedValue(mockResponse);

      const result = await album.getAlbum(mockId, mockParams);

      expect(album['get']).toHaveBeenCalledWith(`/albums/${mockId}`, mockParams);
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getAlbumTracks', () => {
    it('should call get method with correct params and return expected result', async () => {
      const mockId = 'album123';
      const mockParams: GetAlbumTracksOptionalParams = { limit: 20, offset: 0, market: 'US' };
      const mockResponse: AlbumTracks = {
        href: 'https://api.spotify.com/v1/albums/album123/tracks',
        items: [],
        limit: 20,
        next: null,
        offset: 0,
        previous: null,
        total: 10,
      };
      (album['get'] as jest.Mock).mockResolvedValue(mockResponse);

      const result = await album.getAlbumTracks(mockId, mockParams);

      expect(album['get']).toHaveBeenCalledWith(`/albums/${mockId}/tracks`, mockParams);
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getUserSavedAlbum', () => {
    it('should call get method with correct params and return expected result', async () => {
      const mockParams: GetUserSavedAlbumsOptionalParams = { limit: 20, offset: 0, market: 'US' };
      const mockResponse: UserSavedAlbum = {
        href: 'https://api.spotify.com/v1/me/albums',
        items: [],
        limit: 20,
        next: null,
        offset: 0,
        previous: null,
        total: 3,
      };
      (album['get'] as jest.Mock).mockResolvedValue(mockResponse);

      const result = await album.getUserSavedAlbum(mockParams);

      expect(album['get']).toHaveBeenCalledWith('/me/albums', mockParams);
      expect(result).toEqual(mockResponse);
    });
  });
});
