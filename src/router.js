import Binding from './componentes/Binding.vue'
import Estructura from './componentes/Estructura.vue'
import Atributos  from './componentes/Atributos.vue'
import Contadores  from './componentes/Contadores.vue'
import Formulario  from './componentes/Formulario/index.vue'
import Api  from './componentes/Api.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: Binding   },
    { path: '/binding', component: Binding   },
    { path: '/binding/:id', component: Binding   },
    { path: '/estructura', component: Estructura   },
    { path: '/atributos', component: Atributos   },
    { path: '/contadores', component: Contadores   },
    { path: '/api', component: Api   },
    { path: '/formulario', component: Formulario   },
    { path: '/:pathmatch(.*)*', redirect: '/binding'   },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router