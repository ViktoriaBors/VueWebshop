import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailsView from "../views/DetailsView.vue"
import ProductsView from "../views/ProductsView.vue"


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component : ProductsView,
    props: true
  },
  {
    path: '/products/:id',
    name: 'details',
    component : DetailsView,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
