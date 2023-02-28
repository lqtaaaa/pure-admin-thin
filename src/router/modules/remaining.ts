const Layout = () => import("@/layout/index.vue");

export default [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录",
      showLink: false,
      rank: 101
    }
  },
  {
    path: "/redirect",
    component: Layout,
    meta: {
      icon: "homeFilled",
      title: "首页",
      showLink: false,
      rank: 104
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        name: "Redirect",
        component: () => import("@/layout/redirect.vue")
      }
    ]
  },
  // 外部跳转页面
  {
    path: "/web/transferList",
    name: "TransferList",
    component: () => import("@/views/web/transferList/index.vue"),
    meta: {
      title: "任务列表",
      showLink: false,
      rank: 103
    }
  }
] as Array<RouteConfigsTable>;
