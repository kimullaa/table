import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Name from '@/components/Name'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      props: (route) => ({
        name: route.query.name
      })
    },
    {
      path: '/names/:id',
      name: 'Name',
      component: Name,
      props: true
    }
  ]
})
