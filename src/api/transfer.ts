import { http } from "@/utils/http";
import { baseUrlSystem } from "@/api/util";

/*Data*/
type Data = {
  createDate: number;
  dealPersonName: string;
  id: string;
  injureName: string;
  reportCode: string;
  taskState: string;
}

/*tsModel1*/
type Result = {
  msg: string;
  total: number;
  data: Data[];
  status: number;
}

export const findTransferByPage = (params?:object) => {
  return http.request<Result>("get", baseUrlSystem("SysApi/v1/findTransferByPage"), { params });
};
