export default {
  path: "/task",
  redirect: "/task/index",
  meta: {
    icon: "icon-Slice",
    title: "任务查询",
    // showLink: false,
    rank: 3
  },
  children: [
    {
      path: "/task/index",
      name: "TaskQuery",
      component: () => import("@/views/task-query/index.vue"),
      meta: {
        title: "综合查询",
        showParent: true
      }
    }
  ]
} as RouteConfigsTable;
