import { ref } from "vue";
import dayjs from "dayjs";

export function useTransferList() {
  const tableData = ref([])
  const columns:TableColumnList = [
    {
      label: '报案号',
      prop: 'reportCode',
      minWidth: 50,
      align: 'center',
    },
    {
      label: '伤者姓名',
      prop: 'injureName',
      minWidth: 100,
      align: 'center',
    },
    {
      label: '发起人',
      prop:'submiterName',
      minWidth: 100,
      align: 'center',
    },
    {
      label: '发起时间',
      prop:'submiterDate',
      minWidth: 100,
      align: 'center',
      formatter: ({submiterDate}) =>
        dayjs(submiterDate).format('YYYY-MM-DD HH:mm:ss')
    },
    {
      label: '任务状态',
      prop:'taskState',
      minWidth: 100,
      align: 'center',
      cellRenderer: ({row,props}) => {
        const dict = {
          '01': { label: '发起待处理', type: 'info'},
          '02': { label: '任务池待处理（释放）', type: 'info'},
          '03': { label: '已受理', type: 'info'},
          '04': { label: '驳回', type: 'info'},
          '05': { label: '待结果确认', type: 'info'},
          '06': { label: '待评价', type: 'info'},
          '07': { label: '咨询完成', type: 'info'}
        }
        return <el-tag
          size={props.size}
          type={dict[row.taskState].type}
          effect="plain"
        >
          {dict[row.taskState].label}
        </el-tag>
      }
    },
    {
      label: '操作',
      prop: 'action',
      minWidth: 100,
      align: 'center',
      slot: 'action',
    }
  ]

  return {
    tableData,
    columns
  }
}
