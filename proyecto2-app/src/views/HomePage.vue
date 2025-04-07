<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ t('Últimos lanzamientos más escuchados') }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list v-if="artists.length">
        <ion-item v-for="artist in artists" :key="artist.id">
          <ion-avatar slot="start">
            <ion-img :src="artist.image" alt="Imagen del artista"></ion-img>
          </ion-avatar>
          <ion-label>
            <h2>{{ artist.name }}</h2>
            <p class="release-info">
              <ion-chip color="success" class="release-type">
                {{ formatReleaseType(artist.release.type) }}
              </ion-chip>
              <span>{{ artist.release.name }}</span>
            </p>
            <p class="release-date">
              {{ formatDate(artist.release.release_date) }}
            </p>
            <div class="buttons-container">
              <ion-button fill="clear" size="small" :href="artist.external_urls.spotify" target="_blank">
                {{ t('Escuchar artista') }}
                <ion-icon slot="end" :icon="personOutline"></ion-icon>
              </ion-button>
              <ion-button fill="clear" size="small" :href="artist.release.external_urls.spotify" target="_blank">
                {{ t('Ver lanzamiento') }}
                <ion-icon slot="end" :icon="albumsOutline"></ion-icon>
              </ion-button>
            </div>
          </ion-label>
        </ion-item>
      </ion-list>

      <ion-text color="medium" v-if="!artists.length && !loading">
        <p class="ion-text-center ion-padding">{{ t('No hay artistas disponibles.') }}</p>
      </ion-text>

      <ion-spinner v-if="loading" class="ion-margin-top ion-text-center" name="crescent"></ion-spinner>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonAvatar,
  IonImg,
  IonLabel,
  IonButton,
  IonIcon,
  IonText,
  IonSpinner,
  IonChip, loadingController
} from '@ionic/vue';
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import api from "@/services/api.js";
import {albumsOutline, personOutline} from "ionicons/icons";
import { toastController } from '@ionic/vue';


const { t } = useI18n();

const artists = ref([]);
const loading = ref(true);

const formatReleaseType = (type) => {
  const types = {
    'album': 'Álbum',
    'single': 'Single',
    'compilation': 'Compilación',
    'ep': 'EP'
  };
  return types[type.toLowerCase()] || type;
};

function formatDate(dateString) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(dateString).toLocaleDateString('es-ES', options);
}

const fetchTopArtists = async () => {
  loading.value = true;

  try {
    const response = await api.get('');
    console.log('Respuesta de la API:', response.data);
    artists.value = response.data.artists;
  } catch (error) {
    console.error('Error al obtener los artistas:', error);
    await presentToast('Error al cargar los artistas');
  } finally {
    loading.value = false;
  }
};

const presentToast = async (message) => {
  const toast = await toastController.create({
    message: message,
    duration: 2000,
    position: 'bottom'
  });
  await toast.present();
};


onMounted(() => {
  fetchTopArtists();
});
</script>


<style scoped>
ion-toolbar {
  --background: #1db954;
  --color: white;
  font-weight: bold;
  text-align: center;
}

ion-content {
  --background: #121212;
  color: white;
}

ion-list {
  padding: 10px;
}

ion-item {
  --background: #181818;
  border-radius: 10px;
  margin: 8px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease-in-out;
}

ion-item:hover {
  transform: scale(1.02);
}

ion-avatar {
  border: 2px solid #1db954;
}

ion-label h2 {
  font-size: 18px;
  font-weight: bold;
  color: white;
}

.release-info {
  display: flex;
  align-items: center;
  margin: 8px 0;
}

.release-info span {
  margin-left: 8px;
  font-weight: 500;
}

.release-date {
  font-size: 12px;
  color: #b3b3b3;
  margin-top: 0;
}

.release-type {
  --background: rgba(29, 185, 84, 0.2);
  --color: #1db954;
  height: 20px;
  font-size: 10px;
  padding: 0 8px;
}

.buttons-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
}

ion-button {
  --color: #1db954;
  --color-hover: white;
  --border-radius: 8px;
  --background: transparent;
  font-weight: bold;
  margin-right: 8px;
}

ion-button:hover {
  --background: #1db954;
  --color: black;
}

ion-spinner {
  display: flex;
  justify-content: center;
  margin: 20px auto;
}

.ion-text-center {
  text-align: center;
}
</style>