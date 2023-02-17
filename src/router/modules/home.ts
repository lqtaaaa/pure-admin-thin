const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "Home",
  component: Layout,
  redirect: "/main",
  meta: {
    icon: "homeFilled",
    title: "首页",
    rank: 0,
    showLink: false
  },
  children: [
    {
      path: "/main",
      name: "Main",
      component: () => import("@/views/main/index.vue"),
      meta: {
        title: "首页"
      }
    }
  ]
} as RouteConfigsTable;
