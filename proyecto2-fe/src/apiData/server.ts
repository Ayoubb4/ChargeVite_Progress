import axios from "axios";
import type { BackendResponse } from '../types/backend';

const api = axios.create({
    baseURL: 'http://localhost:3000/',
});

export const getBackendData = async (): Promise<BackendResponse> => {
    try {
        const response = await api.get<BackendResponse>('/data');
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Error al conectar con el backend');
    }
};
