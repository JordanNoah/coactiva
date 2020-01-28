import Vue from 'vue'
import VueRouter from 'vue-router'
import Abogados from '../views/abogados.vue'
import Tramites from '../views/tramites.vue'
import Configuracion from '../views/configuracion.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/abogados',
    name:'abogados',
    component:Abogados
  },
  {
    path:'/tramites',
    name:'tramites',
    component:Tramites
  },
  {
    path:'/configuracion',
    name:'configuracion',
    component:Configuracion
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
