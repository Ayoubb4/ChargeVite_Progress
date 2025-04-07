<script setup lang="ts">
import { defineProps, ref } from 'vue';

interface Artist {
  id: string;
  name: string;
  external_urls: {
    spotify: string;
  };
}

const props = defineProps<{
  artists: Artist[];
}>();

// Ref de imagen con el tipo adecuado
const defaultImage = ref<string>('https://via.placeholder.com/50');
</script>

<template>
  <div>
    <h1>Top Artists</h1>
    <ul v-if="artists.length">
      <li v-for="(artist, index) in artists" :key="artist.id">
        <img :src="defaultImage.value" alt="Artist Image" width="50" height="50"/>
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
