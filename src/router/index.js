import {
  createRouter,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/404.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'

const routes = [{
  path: '/',
  name: 'Home',
  component: Home
},
{
  path: '/about',
  name: 'About',
  component: About
},
{
  path: '/jobs',
  name: 'Jobs',
  component: Jobs
},
{
  path: '/jobs/:id',
  name: 'JobDetails',
  component: JobDetails,
  props: true
},
// Redirect
{
  path: '/all-jobs',
  redirect: '/jobs'
},
// catchall 404
{
  path: '/:catchAll(.*)',
  name: 'NotFound',
  component: NotFound
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router