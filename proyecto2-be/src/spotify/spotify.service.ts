import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SpotifyService {
    private readonly clientId = '6dce5344f6e04e0abbe54fd999550c57';
    private readonly clientSecret = '5aed754c049245f9b2682e58add974d3';
    private accessToken: string = '';
    private accessTokenExpiryTime: number = 0;

    private async fetchAccessToken() {
        try {
            const response = await axios.post('https://accounts.spotify.com/api/token', null, {
                params: {
                    grant_type: 'client_credentials',
                    client_id: this.clientId,
                    client_secret: this.clientSecret,
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            this.accessToken = response.data.access_token;
            this.accessTokenExpiryTime = Date.now() + (response.data.expires_in - 60) * 1000;

            console.log('Nuevo token de acceso obtenido');
            console.log('Access Token:', this.accessToken);
        } catch (error) {
            console.error('Error obteniendo el access token de Spotify:', error);
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

            const response = await axios.get(url, {
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            const albums = response.data.albums.items;
            const artists = await Promise.all(
                albums.map(async (album) => {
                    const artist = album.artists[0];
                    const artistDetails = await axios.get(`https://api.spotify.com/v1/artists/${artist.id}`, {
                        headers: { Authorization: `Bearer ${accessToken}` },
                    });

                    return {
                        id: artist.id,
                        name: artist.name,
                        external_urls: artist.external_urls,
                        image: artistDetails.data.images.length ? artistDetails.data.images[0].url : null,
                        release: {
                            id: album.id,
                            name: album.name,
                            type: album.album_type,
                            release_date: album.release_date,
                            image: album.images.length ? album.images[0].url : null,
                            external_urls: album.external_urls
                        }
                    };
                })
            );
            return { artists };
        } catch (error) {
            console.error('Error obteniendo los artistas desde Spotify:', error);
            throw new Error('Error obteniendo los artistas desde Spotify');
        }
    }
}
