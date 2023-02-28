// 模拟后端动态生成路由
import { MockMethod } from "vite-plugin-mock";

/**
 * roles：页面级别权限，这里模拟二种 "admin"、"common"
 * admin：管理员角色
 * common：普通角色
 */

const systemRouter = {
  path: "/system",
  redirect: "/system/dict",
  meta: {
    icon: "icon-xitongguanli",
    title: "系统管理",
    rank: 4
  },
  children: [
    {
      path: "/system/dict",
      name: "DictionaryProperties",
      meta: {
        title: "字典属性",
      }
    },
    {
      path: "/system/role",
      name: "RoleManagement",
      meta: {
        title: "角色管理",
      }
    },
    {
      path: "/system/menu",
      name: "MenuList",
      meta: {
        title: "菜单列表",
      }
    },
    {
      path: "/system/chart",
      name: "StatisticsChart",
      meta: {
        title: "统计图表",
      }
    },
    {
      path: "/system/log",
      name: "LoginLog",
      meta: {
        title: "登录日志",
      }
    },
    {
      path: "/system/record",
      name: "OperationRecord",
      meta: {
        title: "操作记录",
      }
    }
  ]
};
const taskRouter = {
  path: "/task",
  redirect: "/task/index",
  meta: {
    icon: "icon-Slice",
    title: "任务查询",
    rank: 3
  },
  children: [
    {
      path: "/task/index",
      name: "TaskQuery",
      meta: {
        title: "综合查询",
        showParent: true
      }
    }
  ]
};
const transferRouter = {
  path: "/transfer",
  redirect: "/transfer/index",
  meta: {
    icon: "icon-ceshi",
    title: "任务转交",
    rank: 1,
  },
  children: [
    {
      path: "/transfer/index",
      name: "任务转交",
      meta: {
        title: "任务转交",
        showParent: true
      }
    }
  ]
};
const userRouter = {
  path: "/user",
  redirect: "/user/userList",
  meta: {
    icon: "icon-yonghurenxiang",
    title: "用户管理",
    rank: 2
  },
  children: [
    {
      path: "/user/userList",
      name: "UserList",
      meta: {
        title: "用户列表",
      }
    },
    {
      path: "/user/orgList",
      name: "CustomerOrganizationList",
      meta: {
        title: "客户机构列表",
      }
    }
  ]
}

export default [
  {
    url: "/getAsyncRoutes",
    method: "get",
    response: () => {
      return {
        success: true,
        data: [systemRouter,taskRouter,transferRouter,userRouter]
      };
    }
  }
] as MockMethod[];
