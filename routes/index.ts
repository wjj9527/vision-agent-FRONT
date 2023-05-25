export default [
  {
    path: '/main',
    component: '@/pages/index/index',
    routes: [
      { path: '/main/editor', component: '@/pages/Editor' },
      { path: '/main/privilege', component: '@/pages/Privilege' },
    ],
  },
  {
    path: '/',
    component: '@/pages/Login',
  },
  {
    path: '/preview/:id',
    component: '@/pages/Preview',
  },
]
