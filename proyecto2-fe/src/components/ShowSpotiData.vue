<script setup lang="ts">
import { defineProps, ref } from 'vue';
import type { ExternalUrls, ArtistImage, Artist } from '@/types/spotify';

const props = defineProps<{
  artists: Artist[];
}>();

const defaultImage = ref<string>('https://via.placeholder.com/50');
</script>

<template>
  <div>
    <h1>Top Artists</h1>
    <ul v-if="artists.length">
      <li v-for="artist in artists" :key="artist.id">
        <img :src="artist.images?.[0].url || defaultImage" alt="Artist Image" width="50" height="50" />
        <span>{{ artist.name }}</span>
        <a :href="artist.external_urls.spotify" target="_blank">Go to Spotify</a>
      </li>
    </ul>
    <p v-else>Loading...</p>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

img {
  border-radius: 50%;
  margin-right: 1rem;
}

a {
  margin-left: 10px;
  font-size: 0.9rem;
  color: blue;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
