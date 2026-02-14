import { SimplifiedAlbum } from './album.types.js';
import { ExternalUrls, Image, PaginationParams, PaginationResponseProps } from './shared.types.js';

export interface SimplifiedArtist {
  external_urls?: ExternalUrls;
  href?: string;
  id?: string;
  name?: string;
  type?: string;
  uri?: string;
}

export interface Artist extends SimplifiedArtist {
  images?: Image[];
}

export interface OptionalArtistAlbumParams extends PaginationParams {
  include_groups?: string;
  market?: string;
}

export interface ArtistAlbumResult extends PaginationResponseProps {
  items: (SimplifiedAlbum & { album_group: string })[];
}
