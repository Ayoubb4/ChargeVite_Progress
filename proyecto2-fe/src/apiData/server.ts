import axios from "axios";
import type { BackendResponse } from "@/types/backend";

// Agregar interceptors globales para solicitudes y respuestas
axios.interceptors.request.use(
    (config) => {
        console.log(`Enviando solicitud a: ${config.url}`);
        // Se añade un encabezado personalizado, por ejemplo
        config.headers["Custom-Header"] = "MiAplicación";
        return config;
    },
    (error) => {
        console.error("Error en la solicitud:", error);
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        console.log(`Respuesta recibida desde ${response.config.url}`, response.data);
        return response;
    },
    (error) => {
        if (error.response) {
            console.error(
                `Error en la API (status ${error.response.status}):`,
                error.response.data
            );
            if (error.response.status === 401) {
                console.warn("Token expirado, intenta refrescarlo.");
            }
        } else {
            console.error("Error desconocido:", error.message);
        }
        return Promise.reject(error);
    }
);

export const getBackendData = async (): Promise<BackendResponse> => {
    try {
        const response = await axios.get<BackendResponse>("http://localhost:3000/data");
        console.log("Datos obtenidos correctamente:", response.data);
        return response.data;
    } catch (error) {
        console.error("No se pudo conectar con el backend:", error);
        throw new Error("Error al conectar con el backend");
    }
};

// Se llama a la función para que se ejecute
getBackendData().then((data) => console.log("Datos finales:", data));
