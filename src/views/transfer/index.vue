<script setup lang="ts">
import { useTransfer } from "@/views/transfer/hook";
import { ref } from "vue";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import Search from "@iconify-icons/ep/search";
import DialogTable from "./components/dialogTable.vue";
defineOptions({
  name: "Transfer"
});
const transferFormRef = ref(null);
const visible = ref(false);
const selectId = ref();
const {
  form,
  handleSearch,
  Loading,
  dataList,
  columns,
  pagination,
  handleSelectionChange,
  handleSizeChange,
  handleCurrentChange
} = useTransfer();
function handleTaskTransfer(row) {
  visible.value = true;
  selectId.value = row.id;
}
</script>

<template>
  <div class="main">
    <el-form
      ref="transferFormRef"
      :model="form"
      :inline="true"
      class="bg-bg_color w-[99/100] pl-8 pt-4"
    >
      <el-form-item label="报案号" prop="reportCode">
        <el-input
          v-model="form.reportCode"
          placeholder="请输入报案号"
          clearable
          class="!w-[200px]"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="handleSearch"
          :icon="useRenderIcon(Search)"
          :loading="Loading"
        >查询</el-button>
      </el-form-item>
    </el-form>
    <div class="w-[99/100] mt-6 p-2 bg-bg_color">
      <pure-table
        border
        align-whole="center"
        showOverflowTooltip
        table-layout="auto"
        :loading="Loading"
        :data="dataList"
        :columns="columns"
        :pagination="pagination"
        @selection-change="handleSelectionChange"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      >
        <template #action="{row}">
          <el-button type="success" round @click="handleTaskTransfer">任务转交</el-button>
        </template>
      </pure-table>
    </div>
    <DialogTable v-model:visible="visible" :select-id="selectId"></DialogTable>
  </div>
</template>

<style lang="scss" scoped></style>
