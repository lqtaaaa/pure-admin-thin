<script setup lang="ts">

import { useTransferList } from "@/views/web/transferList/hook";

defineOptions({
  name: "TransferList"
});
const { tableData,columns } = useTransferList();
</script>

<template>
  <div class="container p-4">
    <div class="title font-bold">伤残咨询记录</div>
    <div class="list">
      <pure-table
        table-layout="auto"
        border
        :data="tableData"
        :columns="columns"
      ></pure-table>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
