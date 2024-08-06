<script setup lang="ts">
import {ref} from 'vue';
import {api} from '../../environment.js';
const isLoading  = ref<boolean>(true);
const entries  = ref<object>([]);

async function getData()
{
  try {
    const response = (await fetch(api + '/blogs/'));
    const text : string = await response.json();
    entries.value = JSON.parse(text);
  } catch(e) {
    console.error('Failed to retrieve data: ', e);
  }
  finally {
    isLoading.value = false
  }
}

getData()

</script>

<template>
  <header>
    <h1>Blogs</h1>
    <div>
    </div>
  </header>

  <main>
    <div v-if="!isLoading">
      <div v-for="item in entries">
        <h3>{{ item }}</h3>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>