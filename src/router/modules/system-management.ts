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
      component: () => import("@/views/system-management/dictionary-properties/index.vue"),
      meta: {
        title: "字典属性",
        showParent: true
      }
    },
    {
      path: "/system/role",
      name: "RoleManagement",
      component: () => import("@/views/system-management/role-management/index.vue"),
      meta: {
        title: "角色管理",
        showParent: true
      }
    },
    {
      path: "/system/menu",
      name: "MenuList",
      component: () => import("@/views/system-management/menu-list/index.vue"),
      meta: {
        title: "菜单列表",
        showParent: true
      }
    },
    {
      path: "/system/chart",
      name: "StatisticsChart",
      component: () => import("@/views/system-management/statistical-chart/index.vue"),
      meta: {
        title: "统计图表",
        showParent: true
      }
    },
    {
      path: "/system/log",
      name: "LoginLog",
      component: () => import("@/views/system-management/login-log/index.vue"),
      meta: {
        title: "登录日志",
        showParent: true
      }
    },
    {
      path: "/system/record",
      name: "OperationRecord",
      component: () => import("@/views/system-management/operation-record/index.vue"),
      meta: {
        title: "操作记录",
        showParent: true
      }
    }
  ]
} as RouteConfigsTable;
