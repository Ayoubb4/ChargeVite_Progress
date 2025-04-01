import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/',
});

export const getBackendData = async () =>{
    try {
        const response = await api.get('/data');
        return response.data;
    }catch(error){
        console.error(error);
        throw new Error('Error al conectar con el backend ');
    }
}