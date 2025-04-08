export interface ExternalUrls {
    spotify: string;
}

export interface ArtistImage {
    url: string;
}

export interface ArtistRelease {
    name: string;
    type: string;
    release_date: string;
    external_urls: ExternalUrls;
    images?: ArtistImage[];
}

export interface Artist {
    id: string;
    name: string;
    external_urls: ExternalUrls;
    images?: ArtistImage[];
    release?: ArtistRelease;
}

export interface TopArtistsResponse {
    artists: Artist[];
}
