import { createRouter, createWebHistory } from 'vue-router'

import CoachDetail from './pages/coaches/CoachDetail'
import CoachesList from './pages/coaches/CoachesList'
import CoachRegistration from './pages/coaches/CoachRegistration'
import ContactCoach from './pages/requests/ContactCoach'
import RequestsReceived from './pages/requests/RequestsReceived'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    paths: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id',
            component: CoachDetail,
            children: [
                { path: 'contact', component: ContactCoach }
            ]
        },
        { path: '/regıster', component: CoachRegistration },
        { path: '/requests', component: RequestsReceived },
        { path: '/:notFound(.*)', component: NotFound },

    ]
})

export default router