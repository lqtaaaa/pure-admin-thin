import { http } from "@/utils/http";
import { baseUrlSystem } from "@/api/util";
/*Children*/
export class Children {
  id: string;
  name: string;
  url: string;
}

/*RolePermis*/
export class RolePermis {
  children: Children[];
  iconCls: string;
  id: string;
  name: string;
  url: string;
}

/*Data*/
export type Data  = {
  id: string;
  password: string;
  roleName: string;
  rolePermis: RolePermis[];
  roleid: string;
  state: number;
  type: number;
  username: string;
}

export type UserResult = {
  msg: string;
  data: Data;
  status: number;
};
export type RefreshTokenResult = {
  success: boolean;
  data: {
    /** `token` */
    accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;
  };
};

/** 登录 */
export const getLogin = (params?: object) => {
  return http.request<UserResult>("get", baseUrlSystem("LoginApi/v1/login"), { params });
};
// 退出登录
export const loginSysOut = (params?: object) => {
  return http.request<UserResult>("get", baseUrlSystem("LoginApi/v1/loginSysOut"), { params });
};

/** 刷新token */
export const refreshTokenApi = (data?: object) => {
  return http.request<RefreshTokenResult>("post", "/refreshToken", { data });
};
