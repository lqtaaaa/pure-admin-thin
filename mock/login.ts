// 根据角色动态生成路由
import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/login",
    method: "post",
    response: ({ body }) => {
      if (body.username === "admin") {
        return {
          msg: "登陆成功",
          data: {
            id: "jy00001",
            password: "670b14728ad9902aecba32e22fa4f6bd",
            roleName: "admin",
            rolePermis: [
              {
                children: [
                  {
                    id: "6dc99be8da8c474088297a1c389fbeb2",
                    name: "任务转交",
                    url: "/transfer"
                  }
                ],
                iconCls: "icon iconfont icon-ceshi",
                id: "58f5e1e1e432442dbfc294670015c54f",
                name: "任务转交",
                url: "/"
              },
              {
                children: [
                  {
                    id: "3dc0dbab01ba40afbc4cbc0bd6d01159",
                    name: "客户机构",
                    url: "/cusOrglist"
                  },
                  {
                    id: "73d7a6c7ff3e476e95a3bc8c2381406f",
                    name: "用户列表",
                    url: "/userlist"
                  }
                ],
                iconCls: "icon iconfont icon-yonghurenxiang",
                id: "68aa741768154727b252c8c91b743c2c",
                name: "用户管理",
                url: "/"
              },
              {
                children: [
                  {
                    id: "f6e5b4a1040b45409f9c355627b5db15",
                    name: "综合查询",
                    url: "/queryList"
                  }
                ],
                iconCls: "icon iconfont icon-Slice",
                id: "cb8fa8dd917e4c71a696f753e4ed2bb8",
                name: "任务查询",
                url: "/"
              },
              {
                children: [
                  {
                    id: "0edebf3ac9f34f6f8d078b19c459d5c4",
                    name: "字典属性",
                    url: "/dictionaryList"
                  },
                  {
                    id: "461a7aba21f54244bcdc7e20e6ab9e1c",
                    name: "角色管理",
                    url: "/roleList"
                  },
                  {
                    id: "467f6e5713934130ba9a314b91cc3139",
                    name: "菜单列表",
                    url: "/permisList"
                  },
                  {
                    id: "6d9b4dfd99594ce2a0e3f0e55411ece6",
                    name: "统计图表",
                    url: "/statistics"
                  },
                  {
                    id: "ac296fc8b2674eda860d0cd7013fb5fb",
                    name: "登录日志",
                    url: "/loginLog"
                  },
                  {
                    id: "df25cc239db54f628fe73a2a34836045",
                    name: "操作记录",
                    url: "/operatingRecord"
                  }
                ],
                iconCls: "icon iconfont icon-xitongguanli",
                id: "d3485c53d0754764954f6779d05ffa17",
                name: "系统管理",
                url: "/"
              }
            ],
            roleid: "d9908d75b9ee4256805472f3c7e8349d",
            state: 1,
            type: 1,
            username: "精友系统管理员01"
          },
          status: 200
        };
      } else {
        return {
          success: true,
          data: {
            username: "common",
            // 一个用户可能有多个角色
            roles: ["common"],
            accessToken: "eyJhbGciOiJIUzUxMiJ9.common",
            refreshToken: "eyJhbGciOiJIUzUxMiJ9.commonRefresh",
            expires: "2023/10/30 00:00:00"
          }
        };
      }
    }
  }
] as MockMethod[];
