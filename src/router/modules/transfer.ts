export default {
  path: "/transfer",
  redirect: "/transfer/index",
  meta: {
    icon: "icon-ceshi",
    title: "任务转交",
    // showLink: false,
    rank: 1,
    // extraIcon: {
    //   name: "icon-ceshi"
    // }
  },
  children: [
    {
      path: "/transfer/index",
      name: "任务转交",
      component: () => import("@/views/transfer/index.vue"),
      meta: {
        title: "任务转交",
        showParent: true
      }
    }
  ]
} as RouteConfigsTable;
