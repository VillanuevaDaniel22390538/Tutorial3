import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/books',
    name: 'Books',
    component: () => import('../views/BooksView.vue')
  },
  {
    path: '/books/create',
    name: 'BookCreate',
    component: () => import('../views/BookCreateView.vue')
  },
  {
    path: '/books/edit/:id',
    name: 'BookEdit',
    component: () => import('../views/BookEditView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;