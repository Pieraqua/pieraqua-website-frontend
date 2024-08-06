//import './assets/main.css'
import { createMemoryHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

import HomeView from './components/views/HomeView.vue'
import Blog from './components/views/Blog.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/blog', component: Blog },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App)
  .use(router)
  .mount('#app')
