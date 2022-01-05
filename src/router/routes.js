export default [
  {
    path:'/home',
    component:()=>import('@/pages/Home'),
  },
  {
    path:'/search',
    component:()=>import('@/pages/Search'),
  },
  {
    path:'/me',
    component:()=>import('@/pages/Me'),
  },
  {
    path:'/order',
    component:()=>import('@/pages/Order'),
  },

  //重定向
  {
    path:'/',
    redirect:'/home',
  },
]