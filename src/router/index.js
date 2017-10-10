import Vue from 'vue'
import Router from 'vue-router'
import Vote from '@/pages/Vote/vote.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vote',
      component: Vote
    }
  ]
})
