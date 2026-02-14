import {
  ExternalUrls,
  Image,
  OptionalParams,
  PaginationParams,
  PaginationResponseProps,
  Restrictions,
  ResumePoint,
} from './shared.types.js';
import { SimplifiedShow } from './show.types.js';

export interface SimplifiedEpisode {
  description: string;
  html_description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  is_externally_hosted: boolean;
  is_playable: boolean;
  name: string;
  release_date: string;
  release_date_precision: string;
  resume_point?: ResumePoint;
  type: 'episode';
  uri: string;
  restrictions?: Restrictions;
}

export interface Episode extends SimplifiedEpisode {
  show: SimplifiedShow;
}

interface SavedEpisode {
  added_at: string;
  episode: Episode;
}

export interface UserSavedEpisodes extends PaginationResponseProps {
  items: SavedEpisode[];
}

export type GetEpisodeParams = OptionalParams;

export interface GetSavedEpisodeParams extends PaginationParams {
  market?: string;
}
