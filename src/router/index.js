import Vue from 'vue'
import VueRouter from 'vue-router'
import Abogados from '../components/abogados.vue'
import Tramites from '../components/tramites.vue'
import Configuracion from '../components/configuracion.vue'
import Cuenta from '../components/micuenta.vue'
import Login from '../views/login.vue'
import Index from '../views/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/index/',
    name:'index',
    component:Index,
    children : [
      {
        path:'perfil',
        name:'perfil',
        component:Cuenta
      },
      {
        path:'abogados',
        name:'abogados',
        component:Abogados
      },
      {
        path:'tramites',
        name:'tramites',
        component:Tramites
      },
      {
        path:'configuracion',
        name:'configuracion',
        component:Configuracion
      }
    ]
  },
  {
    path:'/login',
    name:'login',
    component:Login  
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
