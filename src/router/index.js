import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { projectMeta } from "../components/projects/projectMeta";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/project/:projectId',
      name: 'project',
      component: () => import('../views/ProjectDetail.vue'),
      props: route => {
        const project = projectMeta[route.params.projectId]
        return project ?? {}
      }
    },
    {
      path: '/project/walkingvibe',
      name: 'project-walkingvibe',
      component: () => import('../views/ProjectDetail.vue'),
      props: projectMeta.walkingvibe
    },
  ]
})

export default router
