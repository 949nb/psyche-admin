import Vue from 'vue';
import Router from 'vue-router';
import {MainLayout, LoginLayout} from '@/layout/index';

Vue.use(Router);

const buildCrumb = (list: any) => {
  return {
    breadcrumb: list,
  };
};

const routes: any = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/post/new',
    name: 'postsAdd',
    meta: buildCrumb([
      {
        name: '管理文章',
      },
      {
        name: '添加文章',
      },
    ]),
    component: () => import('@/views/post/add.vue'),
  },
  {
    path: '/post/edit',
    name: 'postsEdit',
    meta: buildCrumb([
      {
        name: '管理文章',
      },
      {
        name: '编辑文章',
      },
    ]),
    component: () => import('@/views/post/edit.vue'),
  },
  {
    path: '/post/list',
    name: 'postsList',
    meta: buildCrumb([
      {
        name: '管理文章',
      },
    ]),
    component: () => import('@/views/post/list.vue'),
  },
  {
    path: '/tag/manager',
    name: 'tagsManager',
    meta: buildCrumb([
      {
        name: '管理文章',
      },
      {
        name: '标签管理',
      },
    ]),
    component: () => import('@/views/tag/index.vue'),
  },
  {
    path: '/category/manager',
    name: 'CategoryManager',
    meta: buildCrumb([
      {
        name: '管理文章',
      },
      {
        name: '分类管理',
      },
    ]),
    component: () => import('@/views/category/index.vue'),
  },
  {
    path: '/page/new',
    name: 'pagesAdd',
    meta: buildCrumb([
      {
        name: '管理页面',
      },
      {
        name: '创建页面',
      },
    ]),
    component: () => import('@/views/page/add.vue'),
  },
  {
    path: '/page/edit',
    name: 'pagesEdit',
    meta: buildCrumb([
      {
        name: '管理页面',
      },
      {
        name: '编辑页面',
      },
    ]),
    component: () => import('@/views/page/edit.vue'),
  },
  {
    path: '/page/list',
    name: 'pagesList',
    meta: buildCrumb([
      {
        name: '管理页面',
      },
    ]),
    component: () => import('@/views/page/list.vue'),
  },
  {
    path: '/setting/base',
    name: 'baseSetting',
    meta: buildCrumb([
      {
        name: '设置',
      },
      {
        name: '基本设置',
      },
    ]),
    component: () => import('@/views/setting/base.vue'),
  },
  {
    path: '/setting/mail',
    name: 'settingMail',
    meta: buildCrumb([
      {
        name: '设置',
      },
      {
        name: '邮件设置',
      },
    ]),
    component: () => import('@/views/setting/mail.vue'),
  },
  {
    path: '/setting/navigation',
    name: 'settingNavigation',
    meta: buildCrumb([
      {
        name: '设置',
      },
      {
        name: '导航设置',
      },
    ]),
    component: () => import('@/views/navigation/index.vue'),
  },
  {
    path: '/setting/user',
    name: 'userManager',
    meta: buildCrumb([
      {
        name: '设置',
      },
      {
        name: '用户管理',
      },
    ]),
    component: () => import('@/views/user/index.vue'),
  },
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainLayout,
      children: routes,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginLayout,
      children: [
        {
          path: '',
          redirect: '/login/index',
        },
        {
          path: '/login/index',
          name: 'loginIndex',
          component: () => import('@/views/login/index.vue'),
        },
      ],
    },
  ],
});
