import { createRouter, createWebHistory } from 'vue-router'
import ContactManager from '../views/ContactManager'
import EditContact from '../views/EditContact'
import ViewContact from '../views/ViewContact'
import AddContact from '../views/AddContact'
import PageNotFound from '../views/PageNotFound'
const routes = [
   {
    path: '/',
    name: 'ContactManager',
    component: ContactManager
  },
  {
    path: '/AddContact',
    name: 'AddContact',
    component: AddContact
  },
  {
    path: '/view:contactID',
    name: 'ViewContact',
    component: ViewContact
  },
  {
    path: '/edit:contactID',
    name: 'EditContact',
    component: EditContact
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
