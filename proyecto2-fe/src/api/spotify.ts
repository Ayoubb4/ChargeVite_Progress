import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    headers: {
        'Authorization': `Bearer ${process.env.VUE_APP_SPOTIFY_API_KEY}`,
    },
});

export const getTopArtists = async () => {
    const artistIds = [
        '0OdUWJ0sBjDrqH6vJ5t5uJ',
        '4gzpq5DPGxSnKTe4kQ1h48',
        '3TVXtAsR1InKkD0b9cQdfp',
        '4rOoJ6Egrf8K2IrywzwOMk'
    ];

    try {
        const response = await api.get(`artists?ids=${artistIds.join(',')}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener datos de Spotify');
    }
};
