import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { IonicVue } from '@ionic/vue';
import { createI18n } from 'vue-i18n';

import '@ionic/vue/css/core.css';

import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

const language = navigator.language.split('-')[0] || 'es';

const messages = {
  es: {
    'Últimos lanzamientos más escuchados': 'Últimos lanzamientos más escuchados',
    'No hay artistas disponibles.': 'No hay artistas disponibles.',
    'Escuchar artista': 'Escuchar artista',
    'Ver lanzamiento': 'Ver lanzamiento',
  },
  en: {
    'Últimos lanzamientos más escuchados': 'Latest top releases',
    'No hay artistas disponibles.': 'No artists available.',
    'Escuchar artista': 'Listen artist',
    'Ver lanzamiento': 'View release',
  },
};

const i18n = createI18n({
  locale: language,
  messages,
});

const app = createApp(App)
    .use(IonicVue)
    .use(router)
    .use(i18n);

router.isReady().then(() => {
  app.mount('#app');
});
