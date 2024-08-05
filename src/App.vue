<script setup lang="ts">
import {ref} from 'vue';
import {api} from './environment.js';
const isLoading  = ref<boolean>(true);
const msg  = ref<string>("");

async function getData()
{
  try {
    const response = (await fetch(api));
    const text = await response.text();
    msg.value = text;
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
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <p v-if="!isLoading">{{msg}}</p>
    </div>
  </header>

  <main>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
