import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'intro',
    component: () => import('../views/Intro.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '',
        name: 'thong-tin-ca-nhan',
        component: () => import('../views/InfoCustomer.vue')
      },
      {
        path: 'chuyen-tien-noi-ngan-hang',
        name: 'chuyen-tien-noi',
        component: () => import('../views/InternalTransfer.vue')
      },
      {
        path: 'chuyen-tien-lien-ngan-hang',
        name: 'chuyen-tien-ngoai',
        component: () => import('../views/ForeignTransfer.vue')
      },
      {
        path: 'lich-su-giao-dich',
        name: 'lịch-su',
        component: () => import('../views/HistoryTransfer.vue')
      },
      {
        path: 'doi-mat-khau',
        name: 'doi-mat-khau',
        component: () => import('../views/ChangePassword.vue')
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
