import { http } from "@/utils/http";
import { baseUrlSystem } from "@/api/util";

/*Data*/
export type Data = {
  createDate: number;
  dealPersonName: string;
  id: string;
  injureName: string;
  reportCode: string;
  taskState: string;
}

/*tsModel1*/
export type Result = {
  msg: string;
  total: number;
  data: Data[];
  status: number;
}
/*Data*/
export type FindTransferDetailByPageData = {
  id: string;
  idOrgName?: string;
  userCode: string;
  userName: string;
  personOrgId?: string
  personOrgName?: string
}

/*tsModel1*/
export type FindTransferDetailByPage = {
  msg: string;
  total: number;
  data: FindTransferDetailByPageData[];
  status: number;
}
export type DealPerson = {
  msg: string;
  status: number;
}
export const findTransferByPage = (params?:object) => {
  return http.request<Result>("get", baseUrlSystem("SysApi/v1/findTransferByPage"), { params });
};
export const findTransferDetailByPage = (params?:object) => {
  return http.request<FindTransferDetailByPage>("get", baseUrlSystem("SysApi/v1/findTransferDetailByPage"), { params });
};
export const dealPerson = (data?:object) => {
  return http.request<DealPerson>("post", baseUrlSystem("/SysApi/v1/dealPerson"), { data });
};
