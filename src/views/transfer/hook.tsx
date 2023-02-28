import { onMounted, reactive, ref } from "vue";
import { type PaginationProps } from "@pureadmin/table";
import dayjs from "dayjs";
import { findTransferByPage } from "@/api/transfer";
export function useTransfer() {
  // 查询条件
  const form = reactive({
    reportCode: ''
  })
  // table数据
  const dataList = ref([])
  // pagination
  const pagination = reactive<PaginationProps>({
    total: 0,
    pageSize: 10,
    currentPage: 1,
    background: true
  })
  // tableColumns
  const columns: TableColumnList = [
    {
      type: "selection",
      width: 55,
      align: "left",
    },
    {
      label: "报案号",
      prop: "reportCode"
    },
    {
      label: "任务状态",
      prop: "taskState"
    },{
      label: "伤者姓名",
      prop: "injureName"
    },{
      label: "发起人姓名",
      prop: "submiterName"
    },{
      label: "处理人姓名",
      prop: "dealPersonName"
    },
    {
      label: "创建时间",
      prop: "createDate",
      formatter: ({createDate}) =>
        dayjs(createDate).format('YYYY-MM-DD HH:mm:ss')
    },
    {
      label: "操作",
      fixed: "right",
      width: 180,
      slot: "action"
    },
  ]
  const Loading = ref(true)
  /**
  * @Function: handleSearch
  * @Description: 通过报案号查询任务
  * @Author LiuQingTong
  * @Date 21/2/2023
  */
  async function handleSearch() {
    Loading.value = true
    form.reportCode = form.reportCode.trim()
    const params = {
      reportCode: form.reportCode,
      startPage: pagination.currentPage,
      pageSize: pagination.pageSize,
    }
    const res = await findTransferByPage(params)
    dataList.value = [
      {
        "createDate": 1578881633000,
        "dealPersonName": "法医内部测试",
        "id": "cff5b6967eed42e2b500298ecfff48e5",
        "injureName": "测试",
        "reportCode": "1",
        "taskState": "已受理"
      }
    ]
    pagination.total = 1
    setTimeout(() => {
      Loading.value = false
    },500)
  }
  function handleSelectionChange(val) {
    console.log("-> val", val);
  }
  function handleSizeChange(val) {
    console.log("-> val", val);
  }
  function handleCurrentChange(val) {
    console.log("-> val", val);
  }
  onMounted(() => {
    handleSearch()
  })
  // 查询
  return {
    form,
    dataList,
    pagination,
    columns,
    handleSearch,
    Loading,
    handleSelectionChange,
    handleSizeChange,
    handleCurrentChange
  }
}
