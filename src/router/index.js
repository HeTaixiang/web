import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Collection from '@/components/Collection'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'hello',
          name: 'Hello',
          component: Hello
        },
        {
          path: 'collection',
          name: 'collection',
          component: Collection
        }
      ]
    }

  ]
})
