export default {
  path: "/user",
  redirect: "/user/userList",
  meta: {
    icon: "icon-yonghurenxiang",
    title: "用户管理",
    // showLink: false,
    rank: 2
  },
  children: [
    {
      path: "/user/userList",
      name: "UserList",
      component: () => import("@/views/user/user-list/index.vue"),
      meta: {
        title: "用户列表",
        showParent: true
      }
    },
    {
      path: "/user/orgList",
      name: "CustomerOrganizationList",
      component: () => import("@/views/user/customer-organization-list/index.vue"),
      meta: {
        title: "客户机构列表",
        showParent: true
      }
    }
  ]
} as RouteConfigsTable;
