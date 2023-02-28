<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import type { FormInstance } from "element-plus";
import Search from "@iconify-icons/ep/search";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { PaginationProps } from "@pureadmin/table";
import { dealPerson, FindTransferDetailByPage, findTransferDetailByPage } from "@/api/transfer";
defineOptions({
  name: "dialogTable"
});
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  selectId: {
    type: String,
    default: ""
  }
})
const form = reactive({
  userCode: '',
  userName: ''
})
const formRef = ref<FormInstance>()
const tableData = ref([])
const loading = ref(false)
const submitData = ref([])
const pagination = reactive<PaginationProps>({
  total: 0,
  pageSize: 10,
  currentPage: 1,
  background: true
})
const columns: TableColumnList = [
  {
    type: "selection",
    width: 55,
    align: "left",
  },
  {
    label: "用户工号",
    prop: "userCode"
  },
  {
    label: "用户姓名",
    prop: "userName"
  },{
    label: "鉴定机构",
    prop: "idOrgName"
  }
]
const tableVisible = ref(false)
const emits = defineEmits(["update:visible"])
watch(
  () => props.visible,
  val => {
    tableVisible.value = val
  }
)
watch(
  () => tableVisible.value,
  val => {
    emits("update:visible", val)
  }
)
async function handleSearch() {
  loading.value = true
  const params = {
    keyword: form.userCode,
    paramName: form.userName,
    pageSize: pagination.pageSize,
    startPage: pagination.currentPage
  }
  const res = await findTransferDetailByPage(params) as FindTransferDetailByPage
  tableData.value = res.data
  pagination.total = res.total
  setTimeout(() => {
    loading.value = false
  },500)
}
function handleSelectionChange(val) {
  submitData.value.push(val)
  console.log("-> val", val);
}
function handleSizeChange(val) {
  pagination.pageSize = val
  handleSearch()
  console.log("-> val", val);
}
function handleCurrentChange(val) {
  pagination.currentPage = val
  handleSearch()
  console.log("-> val", val);
}
async function handleSubmit() {
  loading.value = true
  const data = {
    uuid: submitData.value[0].id,
    id: props.selectId,
    userCode: submitData.value[0].userCode,
    userName: submitData.value[0].userName,
    personOrgId: submitData.value[0].personOrgId,
    personOrgName: submitData.value[0].personOrgName
  }
  const res = await dealPerson(data)
  if (res.status === 200) {
    this.$message({
      message: res.msg,
      type: "success"
    })
  }
  setTimeout(() => {
    loading.value = false
  },500)
}
</script>

<template>
  <el-dialog
    v-model="tableVisible"
    title="任务转交"
  >
    <el-form
      ref="formRef"
      :model="form"
      :inline="true"
      class="bg-bg_color w-[99/100] pl-8 pt-4"
    >
      <el-form-item label="用户工号" prop="userCode">
        <el-input v-model="form.userCode" placeholder="请输入用户工号" />
      </el-form-item>
      <el-form-item label="用户名称" prop="userName">
        <el-input v-model="form.userName" placeholder="请输入用户名称" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :icon="useRenderIcon(Search)" @click="handleSearch">查询</el-button>
        <el-button type="primary" @click="handleSubmit">提交</el-button>
      </el-form-item>
    </el-form>
    <pure-table
      border
      align-whole="center"
      showOverflowTooltip
      table-layout="auto"
      :columns="columns"
      :data="tableData"
      :pagination="pagination"
      :loading="loading"
      @selection-change="handleSelectionChange"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </pure-table>
  </el-dialog>
</template>

<style lang="scss" scoped>

</style>
