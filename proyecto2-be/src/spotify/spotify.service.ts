import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'; // Importar ConfigService
import axios from 'axios';

interface SpotifyTokenResponse {
  access_token: string;
  expires_in: number;
}

interface SpotifyAlbum {
  id: string;
  name: string;
  album_type: string;
  release_date: string;
  images: { url: string }[];
  external_urls: { [key: string]: string };
  artists: { id: string; name: string; external_urls: string }[];
}

interface SpotifyNewReleasesResponse {
  albums: {
    items: SpotifyAlbum[];
  };
}

interface SpotifyArtistDetails {
  images: { url: string }[];
}

@Injectable()
export class SpotifyService {
  private readonly clientId: string;
  private readonly clientSecret: string;
  private readonly logger = new Logger('SpotifyService');
  private accessToken = '';
  private accessTokenExpiryTime = 0;

  constructor(private configService: ConfigService) {
    this.clientId = this.configService.get<string>('SPOTIFY_CLIENT_ID')!;
    this.clientSecret = this.configService.get<string>(
      'SPOTIFY_CLIENT_SECRET',
    )!;
  }

  private async fetchAccessToken() {
    try {
      const response = await axios.post<SpotifyTokenResponse>(
        'https://accounts.spotify.com/api/token',
        null,
        {
          params: {
            grant_type: 'client_credentials',
            client_id: this.clientId,
            client_secret: this.clientSecret,
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      this.accessToken = response.data.access_token;
      this.accessTokenExpiryTime =
        Date.now() + (response.data.expires_in - 60) * 1000;

      this.logger.log('Nuevo token de acceso obtenido');
      this.logger.debug('Access Token:', this.accessToken);
    } catch (error) {
      this.logger.error('Error obteniendo el access token de Spotify:', error);
      throw new Error('No se pudo obtener el access token');
    }
  }

  private async getValidAccessToken() {
    if (Date.now() > this.accessTokenExpiryTime) {
      await this.fetchAccessToken();
    }
    return this.accessToken;
  }

  async getTopArtists() {
    try {
      const accessToken = await this.getValidAccessToken();
      const url = 'https://api.spotify.com/v1/browse/new-releases';

      const response = await axios.get<SpotifyNewReleasesResponse>(url, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const albums = response.data.albums.items;
      const artists = await Promise.all(
        albums.map(async (album) => {
          const artist = album.artists[0];

          const artistDetails = await axios.get<SpotifyArtistDetails>(
            `https://api.spotify.com/v1/artists/${artist.id}`,
            {
              headers: { Authorization: `Bearer ${accessToken}` },
            },
          );

          return {
            id: artist.id,
            name: artist.name,
            external_urls: artist.external_urls,
            image: artistDetails.data.images.length
              ? artistDetails.data.images[0].url
              : null,
            release: {
              id: album.id,
              name: album.name,
              type: album.album_type,
              release_date: album.release_date,
              image: album.images.length ? album.images[0].url : null,
              external_urls: album.external_urls,
            },
          };
        }),
      );

      return { artists };
    } catch (error) {
      this.logger.error('Error obteniendo los artistas desde Spotify:', error);
      throw new Error('Error obteniendo los artistas desde Spotify');
    }
  }
}
