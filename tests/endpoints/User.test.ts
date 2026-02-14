import { User } from '../../src/endpoints/User';
import { CurrentUserProfile, UsersTopItemsType, FollowedArtistType, TopItemsOptionalParams } from '../../src/types';

jest.mock('../../src/client/ReadWriteBaseClient');
jest.mock('../../src/utils');

describe('User', () => {
  let user: User;

  beforeEach(() => {
    user = new User({} as any);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('getCurrentUserProfile', () => {
    it('should call get method with correct params and return expected result', async () => {
      const mockResponse: CurrentUserProfile = {
        external_urls: { spotify: 'https://open.spotify.com/user/testuser' },
        href: 'https://api.spotify.com/v1/users/testuser',
        id: 'testuser',
        images: [],
        type: 'user',
        uri: 'spotify:user:testuser',
      };
      (user['get'] as jest.Mock).mockResolvedValue(mockResponse);

      const result = await user.getCurrentUserProfile();

      expect(user['get']).toHaveBeenCalledWith('/me');
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getUserTopItems', () => {
    it('should call get method with correct params and return expected result', async () => {
      const mockType: UsersTopItemsType = 'tracks';
      const mockParams: TopItemsOptionalParams = { time_range: 'medium_term', limit: 10 };
      const mockResponse = {
        items: [],
        total: 0,
        limit: 10,
        offset: 0,
        href: 'https://api.spotify.com/v1/me/top/tracks',
        next: null,
        previous: null,
      };
      (user['get'] as jest.Mock).mockResolvedValue(mockResponse);

      const result = await user.getUserTopItems(mockType, mockParams);

      expect(user['get']).toHaveBeenCalledWith(`/me/top/${mockType}`, mockParams);
      expect(result).toEqual(mockResponse);
    });
  });

  describe('getFollowedArtists', () => {
    it('should call get method with correct params and return expected result', async () => {
      const mockType: FollowedArtistType = 'artist';
      const mockParams = { limit: 20, after: 'lastArtistId' };
      const mockResponse = {
        artists: {
          items: [],
          next: null,
          total: 0,
          cursors: { after: null },
          limit: 20,
          href: 'https://api.spotify.com/v1/me/following?type=artist',
        },
      };
      (user['get'] as jest.Mock).mockResolvedValue(mockResponse);

      const result = await user.getFollowedArtists(mockType, mockParams);

      expect(user['get']).toHaveBeenCalledWith('/me/following', { type: mockType, ...mockParams });
      expect(result).toEqual(mockResponse);
    });
  });
});
