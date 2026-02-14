import { SimplifiedAlbum } from './album.types.js';
import { SimplifiedArtist } from './artist.types.js';
import {
  Restrictions,
  ExternalUrls,
  ExternalIds,
  PaginationParams,
  OptionalParams,
  PaginationResponseProps,
} from './shared.types.js';

export type GetTrackParams = OptionalParams;

export interface OptionalUserSavedTrackParams extends PaginationParams {
  market?: string;
}

export interface SimplifiedTrack {
  artists?: SimplifiedArtist[];
  disc_number?: number;
  duration_ms?: number;
  explicit?: boolean;
  external_urls?: ExternalUrls;
  href?: string;
  id?: string;
  is_playable?: boolean;
  restrictions?: Restrictions;
  name?: string;
  track_number?: number;
  type?: string;
  uri?: string;
  is_local?: boolean;
}

export interface Track extends SimplifiedTrack {
  album?: SimplifiedAlbum;
  external_ids?: ExternalIds;
  popularity?: number;
}

export interface TrackParams {
  id: string;
  market?: string;
}

export interface TracksParams {
  ids: string[];
  market?: string;
}

interface SavedTrack {
  added_at: string;
  track: Track;
}

export interface UserSavedTracks extends PaginationResponseProps {
  items: SavedTrack[];
}

export interface TimeConfidenceInfo {
  start?: number;
  duration?: number;
  confidence?: number;
}

export interface Meta {
  analyzer_version?: string;
  platform?: string;
  detailed_status?: string;
  status_code?: number;
  timestamp?: number;
  analysis_time?: number;
  input_process?: string;
}

export interface Section {
  start?: number;
  duration?: number;
  confidence?: number;
  loudness?: number;
  tempo?: number;
  tempo_confidence?: number;
  key?: number;
  key_confidence?: number;
  mode?: number;
  mode_confidence?: number;
  time_signature?: number;
  time_signature_confidence?: number;
}

export interface Segment {
  start?: number;
  duration?: number;
  confidence?: number;
  loudness_start?: number;
  loudness_max?: number;
  loudness_max_time?: number;
  loudness_end?: number;
  pitches?: number[];
  timbre?: number[];
}

export interface TrackAudioAnalysisDetail {
  num_samples?: number;
  duration?: number;
  sample_md5?: string;
  offset_seconds?: number;
  window_seconds?: number;
  analysis_sample_rate?: number;
  analysis_channels?: number;
  end_of_fade_in?: number;
  start_of_fade_out?: number;
  loudness?: number;
  tempo?: number;
  tempo_confidence?: number;
  time_signature?: number;
  time_signature_confidence?: number;
  key?: number;
  key_confidence?: number;
  mode?: number;
  mode_confidence?: number;
  codestring?: string;
  code_version?: number;
  echoprintstring?: string;
  echoprint_version?: number;
  synchstring?: string;
  synch_version?: number;
  rhythmstring?: string;
  rhythm_version?: number;
}

interface RecommendationSeeds {
  afterFilteringSize: number;
  afterRelinkingSize: number;
  href: string;
  id: string;
  initialPoolSize: number;
  type: string;
}
