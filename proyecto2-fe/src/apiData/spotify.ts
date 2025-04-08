import axios from 'axios';
import type { SpotifyResponse } from '@/types/spotify';

// Crear la instancia de Axios
const api = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
});

// Interceptor de solicitud: Modifica antes de enviar
api.interceptors.request.use(
    (config) => {
        const token = process.env.VUE_APP_SPOTIFY_API_KEY;
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        } else {
            console.warn('No hay un token disponible');
        }
        console.log(`Enviando solicitud a: ${config.url}`);
        return config;
    },
    (error) => {
        console.error('Error en la solicitud:', error);
        return Promise.reject(error);
    }
);

// Interceptor de respuesta: Maneja errores y datos antes de darlos
api.interceptors.response.use(
    (response) => {
        console.log(`Respuesta recibida desde ${response.config.url}`, response.data);
        return response;
    },
    (error) => {
        if (error.response) {
            console.error(`Error en la API (status ${error.response.status}):`, error.response.data);

            if (error.response.status === 401) {
                console.warn('Token expirado, intenta refrescarlo.');
            }
        } else {
            console.error('Error desconocido:', error.message);
        }
        return Promise.reject(error);
    }
);

export const getTopArtists = async (): Promise<SpotifyResponse> => {
    const artistIds = [
        '0OdUWJ0sBjDrqH6vJ5t5uJ',
        '4gzpq5DPGxSnKTe4kQ1h48',
        '3TVXtAsR1InKkD0b9cQdfp',
        '4rOoJ6Egrf8K2IrywzwOMk',
    ];

    try {
        const response = await api.get<SpotifyResponse>(`artists?ids=${artistIds.join(',')}`);
        console.log('Datos de artistas obtenidos correctamente:', response.data);
        return response.data;
    } catch (error) {
        console.error('No se pudo obtener datos de Spotify:', error);
        throw new Error('No se pudo obtener datos de Spotify');
    }
};

// 🔎 Usamos la función para que no quede sin utilizar
getTopArtists().then((data) => console.log(`Artistas obtenidos:`, data));
