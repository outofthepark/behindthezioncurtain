import Vue from 'vue'
import VueRouter from 'vue-router'
import Contact from './components/Pages/Contact'
import FAQ from './components/Pages/FAQ'
import Home from './components/Pages/Home'
import Resources from './components/Pages/Resources'
import ApplicationInfo from './components/Pages/ApplicationInfo'
import RSVP from './components/Pages/RSVP'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    }, 
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/faq',
        name: 'FAQ',
        component: FAQ
    },
    {
      path: '/applicationinfo',
      name: 'Application Information',
      component: ApplicationInfo
    },
    {
      path: '/rsvp',
      name: 'RSVP',
      component: RSVP
    },
    {
      path: '/communityresources',
      name: 'Resources',
      component: Resources
  }
  ]
})