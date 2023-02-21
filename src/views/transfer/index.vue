<script setup lang="ts">
import { useTransfer } from "@/views/transfer/hook";
import { ref } from "vue";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import Search from "@iconify-icons/ep/search";
import { PureTableBar } from "@/components/RePureTableBar";
import { columns } from "stylelint-order/rules/shorthandData";
defineOptions({
  name: "Transfer"
});
const transferFormRef = ref(null);
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
        <el-button type="success" round>任务转交</el-button>
      </template>
    </pure-table>
  </div>
</template>

<style lang="scss" scoped></style>
