import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import {
  SpotifyTokenResponse,
  SpotifyAlbum,
  SpotifyNewReleasesResponse,
  SpotifyArtistDetails,
} from 'src/interfaces/spotify.interfaces';

@Injectable()
export class SpotifyService {
  private readonly logger = new Logger('SpotifyService');
  private accessToken = '';
  private accessTokenExpiryTime = 0;

  constructor(private configService: ConfigService) {}

  private async fetchAccessToken() {
    try {
      const { data } = await axios.post<SpotifyTokenResponse>(
        'https://accounts.spotify.com/api/token',
        null,
        {
          params: {
            grant_type: 'client_credentials',
            client_id: this.configService.get<string>('SPOTIFY_CLIENT_ID')!,
            client_secret: this.configService.get<string>('SPOTIFY_CLIENT_SECRET')!,
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      this.accessToken = data.access_token;
      this.accessTokenExpiryTime = Date.now() + (data.expires_in - 60) * 1000;
      this.logger.log('Nuevo token de acceso obtenido');
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
      const { data } = await axios.get<SpotifyNewReleasesResponse>(url, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      const artists = await Promise.all(
        data.albums.items.map(async (album: SpotifyAlbum) => { // Usamos la interfaz SpotifyAlbum
          const artist = album.artists[0];

          const { data: artistDetails } = await axios.get<SpotifyArtistDetails>(
            `https://api.spotify.com/v1/artists/${artist.id}`,
            {
              headers: { Authorization: `Bearer ${accessToken}` },
            },
          );

          return {
            id: artist.id,
            name: artist.name,
            external_urls: artist.external_urls,
            image: artistDetails.images.length ? artistDetails.images[0].url : null,
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
