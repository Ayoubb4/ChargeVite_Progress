import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    headers: {
        'Authorization': `Bearer BQCgrWzxzV62c4JSQnrWRdScowFmeKDM69CaNpETq-rDm5ugihmMZuoBY0hb2KRLNA52QyOj-zj3OUOOZex81FofMjw_fqRjMlNfll2_UAiXrfCfHcFZTEm4bBNwSg2VD_VnlVnmLn4`,
    },
});

export const getTopArtists = async () => {
    try {
        const response = await api.get('https://api.spotify.com/v1/artists?ids=0OdUWJ0sBjDrqH6vJ5t5uJ,4gzpq5DPGxSnKTe4kQ1h48,3TVXtAsR1InKkD0b9cQdfp,4rOoJ6Egrf8K2IrywzwOMk');
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Error al obtener datos de Spotify');
    }
};
