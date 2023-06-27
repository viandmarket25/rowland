import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Home from './views/home'

import About from './views/aboutus'
import News from './views/news'
import Contact from './views/contact'
import Products from './views/products'

import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [

    {
      name: 'Home',
      path: '/',
      component: Home,
    },
      
    {
      name: 'About',
      path: '/about',
      component: About,
    },
      
    {
      name: 'News',
      path: '/news',
      component: News,
    },

      
    {
      name: 'Contact',
      path: '/contact',
      component: Contact,
    },
      
    {
      name: 'Products',
      path: '/products',
      component: Products,
    },
  ],
})
