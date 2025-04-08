export interface SpotifyTokenResponse {
  access_token: string;
  expires_in: number;
}

export interface SpotifyAlbum {
  id: string;
  name: string;
  album_type: string;
  release_date: string;
  images: { url: string }[];
  external_urls: { [key: string]: string };
  artists: { id: string; name: string; external_urls: string }[];
}

export interface SpotifyNewReleasesResponse {
  albums: {
    items: SpotifyAlbum[];
  };
}

export interface SpotifyArtistDetails {
  images: { url: string }[];
}