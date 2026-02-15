import { Artist } from './artist.types.js';
import { ExternalUrls, Followers, Image, PaginationParams, PaginationResponseProps } from './shared.types.js';
import { Track } from './track.types.js';

export interface UserProfile {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  type: string;
  uri: string;
}

export type CurrentUserProfile = UserProfile;

export type UsersTopItemsType = 'artists' | 'tracks';

export type FollowedArtistType = 'artist';

export interface TopItemsOptionalParams extends PaginationParams {
  time_range?: 'long_term' | 'medium_term' | 'short_term';
}

export interface UsersTopItems extends PaginationResponseProps {
  items: Artist[] | Track[];
}

export interface FollowedArtistOptionalParams {
  after?: string;
  limit?: number;
}

interface Cursors {
  after?: string;
  before?: string;
}

export interface FollowedArtist {
  artists: {
    href?: string;
    limit?: number;
    next?: string;
    cursors?: Cursors;
    total?: number;
    items?: Artist[];
  };
}
