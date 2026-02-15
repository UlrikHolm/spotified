import { ReadWriteBaseClient } from '../client/ReadWriteBaseClient.js';
import { Artist as ArtistProfile, OptionalArtistAlbumParams, ArtistAlbumResult } from '../types/index.js';

export class Artist extends ReadWriteBaseClient {
  /**
   * Get Spotify catalog information for a single artist identified by their unique Spotify ID
   * https://developer.spotify.com/documentation/web-api/reference/get-an-artist
   */
  getArtist(id: string) {
    return this.get<ArtistProfile>(`/artists/${id}`);
  }

  /**
   * Get Spotify catalog information about an artist's albums
   * https://developer.spotify.com/documentation/web-api/reference/get-an-artists-albums
   */
  getArtistAlbums(artistId: string, optionalParams?: OptionalArtistAlbumParams) {
    return this.get<ArtistAlbumResult>(`/artists/${artistId}/albums`, optionalParams);
  }
}

export default Artist;
