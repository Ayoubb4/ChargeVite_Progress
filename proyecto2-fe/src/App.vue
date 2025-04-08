<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const topArtists = ref([]);
const loading = ref(false);

const getTopArtists = async () => {
  loading.value = true;
  try {
    const response = await axios.get('http://localhost:3000/services/top-artists');
    topArtists.value = response.data.artists;
  } catch (error) {
    console.error('Error al obtener los artistas', error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getTopArtists();
});
</script>

<template>
  <main>
    <div v-if="loading" class="loading">{{ $t('loading') }}</div>
    <div v-else>
      <h2 class="section-title">{{ $t('topArtistsTitle') }}</h2>
      <ul class="artist-list">
        <li v-for="(artist, index) in topArtists" :key="index" class="artist-item">
          <div class="artist-info">
            <img v-if="artist.image" :src="artist.image" alt="Artist Image" class="artist-image" />
            <img v-else src="https://via.placeholder.com/50" alt="Artist Image" class="artist-image" />
            <div class="artist-details">
              <span class="artist-name">{{ artist.name }}</span>
              <a :href="artist.external_urls.spotify" target="_blank" class="spotify-link">{{ $t('goToSpotify') }}</a>
            </div>
          </div>

          <div v-if="artist.release" class="release-info">
            <h3 class="release-title">{{ $t('latestRelease') }}</h3>
            <div class="release-details">
              <img v-if="artist.release.image" :src="artist.release.image" alt="Release Image" class="release-image" />
              <div class="release-text">
                <h4 class="release-name">{{ artist.release.name }}</h4>
                <p class="release-type">{{ $t('type') }}: {{ artist.release.type }}</p>
                <p class="release-date">{{ $t('releaseDate') }}: {{ artist.release.release_date }}</p>
                <a :href="artist.release.external_urls.spotify" target="_blank" class="spotify-link">{{ $t('goToRelease') }}</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
body {
  font-family: 'Roboto', sans-serif;
  background-color: #121212;
  color: #fff;
  margin: 0;
  padding: 0;
}

.loading {
  text-align: center;
  font-size: 1.2rem;
  color: #1db954;
}

h2.section-title {
  text-align: left;
  font-size: 2rem;
  color: #1db954;
  margin-left: 20px;
  margin-bottom: 20px;
}

.artist-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
  list-style: none;
  margin: 0;
}

.artist-item {
  background-color: #181818;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease-in-out;
}

.artist-item:hover {
  transform: scale(1.05);
}

.artist-info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 15px;
}

.artist-image {
  border-radius: 50%;
  width: 70px;
  height: 70px;
  object-fit: cover;
  margin-right: 15px;
}

.artist-details {
  display: flex;
  flex-direction: column;
}

.artist-name {
  font-size: 1.1rem;
  font-weight: bold;
  text-align: left;
}

.spotify-link {
  margin-top: 8px;
  color: #1db954;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
}

.spotify-link:hover {
  text-decoration: underline;
}

.release-info {
  background-color: #282828;
  border-top: 1px solid #1db954;
  padding: 20px;
}

.release-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  text-align: left;
}

.release-details {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
}

.release-image {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  margin-right: 15px;
}

.release-text {
  max-width: 250px;
}

.release-name {
  font-size: 1rem;
  color: #fff;
  font-weight: bold;
  text-align: left;
}

.release-type, .release-date {
  font-size: 0.9rem;
  color: #b3b3b3;
  margin: 5px 0;
  text-align: left;
}

.release-type {
  background-color: rgba(29, 185, 84, 0.2);
  color: #1db954;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 4px;
}

.release-date {
  font-size: 0.8rem;
  color: #b3b3b3;
}

a {
  text-decoration: none;
}

ul {
  padding: 0;
}

button {
  background-color: transparent;
  color: #1db954;
  border: 2px solid #1db954;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

button:hover {
  background-color: #1db954;
  color: black;
}
</style>