import axios from "axios";
import type { BackendResponse } from '@/types/backend';

// Crear instancia de Axios
const api = axios.create({
    baseURL: 'http://localhost:3000/',
});

api.interceptors.request.use(
    (config) => {
        console.log(`Enviando solicitud a: ${config.url}`);

        // Puedes agregar encabezados personalizados si es necesario
        config.headers['Custom-Header'] = 'MiAplicación';

        return config;
    },
    (error) => {
        console.error('Error en la solicitud:', error);
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        console.log(`Respuesta recibida desde ${response.config.url}`, response.data);
        return response;
    },
    (error) => {
        if (error.response) {
            console.error(`Error en la API (status ${error.response.status}):`, error.response.data);

            if (error.response.status === 401) {
                console.warn('🔄 Token expirado, intenta refrescarlo.');
            }
        } else {
            console.error('Error desconocido:', error.message);
        }
        return Promise.reject(error);
    }
);

export const getBackendData = async (): Promise<BackendResponse> => {
    try {
        const response = await api.get<BackendResponse>('/data');
        console.log('Datos obtenidos correctamente:', response.data);
        return response.data;
    } catch (error) {
        console.error('No se pudo conectar con el backend:', error);
        throw new Error('Error al conectar con el backend');
    }
};

getBackendData().then((data) => console.log(`Datos finales:`, data));
