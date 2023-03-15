<template>
  <h2 class='title'>基础用法</h2> 
  <pro-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <pro-button class="button" text>Operation button</pro-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </pro-card>
<firstCode/>
</template>

<script lang="ts" setup>
  import firstCode from "./code/firstCode.vue"
</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>