import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ImageBuilder from './views/ImageBuilder.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: ImageBuilder
    },
    {
      path: '/builders/playoftheday',
      name: 'ibuilder',
      component: ImageBuilder
    }
  ]
})
