export default {
  path: "/system",
  redirect: "/system/dict",
  meta: {
    icon: "icon-xitongguanli",
    title: "系统管理",
    // showLink: false,
    rank: 4
  },
  children: [
    {
      path: "/system/dict",
      name: "DictionaryProperties",
      component: () => import("@/views/system/dict/index.vue"),
      meta: {
        title: "字典属性",
        showParent: true
      }
    },
    {
      path: "/system/role",
      name: "RoleManagement",
      component: () => import("@/views/system/role/index.vue"),
      meta: {
        title: "角色管理",
        showParent: true
      }
    },
    {
      path: "/system/menu",
      name: "MenuList",
      component: () => import("@/views/system/menu/index.vue"),
      meta: {
        title: "菜单列表",
        showParent: true
      }
    },
    {
      path: "/system/chart",
      name: "StatisticsChart",
      component: () => import("@/views/system/chart/index.vue"),
      meta: {
        title: "统计图表",
        showParent: true
      }
    },
    {
      path: "/system/log",
      name: "LoginLog",
      component: () => import("@/views/system/log/index.vue"),
      meta: {
        title: "登录日志",
        showParent: true
      }
    },
    {
      path: "/system/record",
      name: "OperationRecord",
      component: () => import("@/views/system/record/index.vue"),
      meta: {
        title: "操作记录",
        showParent: true
      }
    }
  ]
} as RouteConfigsTable;
