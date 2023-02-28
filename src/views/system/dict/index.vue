<script setup lang="ts">
defineOptions({
  name: "DictionaryProperties"
});
import { reactive } from "vue";

const state = reactive({});
</script>

<template>
  <h1>DictionaryProperties</h1>
  <el-button @click="$router.push({ name: 'TransferList' })">
    跳转无Layout的空白页面
  </el-button>
</template>

<style lang="scss" scoped>

</style>
