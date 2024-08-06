<script setup lang="ts">
import {ref} from 'vue';
import {api} from './environment.js';
import { RouterView } from 'vue-router';
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
  <div class="app">
    <nav>
      <RouterLink to="/"><p>Sobre</p></RouterLink>
      <RouterLink to="/blog"><p>Blogs</p></RouterLink>
    </nav>
    <RouterView/>
  </div>
</template>

<style scoped>
nav p
{
  padding-right: 20px;
  display: inline-block;
}
.app
{
  background-color: lightgray;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding-left: 5%;
}
</style>
