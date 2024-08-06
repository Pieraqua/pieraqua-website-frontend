<script setup lang="ts">
import {ref} from 'vue';
import {api} from './environment.js';
const isLoading  = ref<boolean>(true);
const blogs  = ref<Array<string>>([]);

async function getData()
{
  try {
    const response = (await fetch(api + '/blogs'));
    const text : string = await response.text();
    blogs.value = JSON.parse(text);
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
    <h1>Bem vindo ao meu site pessoal!</h1>
    <div>
    </div>
  </header>

  <main>
    <div v-if="!isLoading">
      <div v-for="item in blogs">
        <h3>{{ item }}</h3>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>
