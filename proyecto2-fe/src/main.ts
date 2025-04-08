import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';

const language = navigator.language.split('-')[0] || 'es';

const messages = {
    es: {
        loading: 'Cargando artistas...',
        topArtistsTitle: 'Top Artists',
        goToSpotify: 'Ir a Spotify',
        latestRelease: 'Última publicación',
        type: 'Tipo',
        releaseDate: 'Fecha de lanzamiento',
        goToRelease: 'Ir a la publicación',
    },
    en: {
        loading: 'Loading artists...',
        topArtistsTitle: 'Top Artists',
        goToSpotify: 'Go to Spotify',
        latestRelease: 'Latest Release',
        type: 'Type',
        releaseDate: 'Release Date',
        goToRelease: 'Go to Release',
    },
};

const i18n = createI18n({
    locale: language,
    messages,
});

const app = createApp(App);

app.use(i18n);

app.mount('#app');
