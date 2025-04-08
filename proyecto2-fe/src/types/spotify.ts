export interface ExternalUrls {
    spotify: string;
}

export interface ArtistImage {
    url: string;
}

export interface Artist {
    id: string;
    name: string;
    external_urls: ExternalUrls;
    images?: ArtistImage[];
}

export interface SpotifyResponse {
    artists: Artist[];
}
