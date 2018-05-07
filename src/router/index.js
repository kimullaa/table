import Vue from 'vue'
import Router from 'vue-router'
import Table from '@/components/Table'
import Name from '@/components/Name'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/table',
      name: 'Table',
      component: Table,
      props: (route) => ({
        name: route.query.name ? route.query.name : ''
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
