<template>
  <div class="app-container">
    <el-card> menu 1-1 </el-card>
    <pro-button type="primary" @click="clickFn" size="default"  icon="Search" link>aa</pro-button>
    <pro-button type="primary"  loading-icon="Eleme" loading>Loading</pro-button>
    <pro-button type="primary" loading>
      <template #loading>
        <div class="custom-loading">
          <svg class="circular" viewBox="-10, -10, 50, 50">
            <path
              class="path"
              d="
              M 30 15
              L 28 17
              M 25.61 25.61
              A 15 15, 0, 0, 1, 15 30
              A 15 15, 0, 1, 1, 27.99 7.5
              L 15 15
            "
              style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"
            />
          </svg>
        </div>
      </template>
      Loading1111
    </pro-button>
    <el-button  type="primary">
      <el-icon class="el-icon--right"><Upload /></el-icon>Upload
    </el-button >
    <pro-tabs v-model="a" type="border-card" @tab-click="handleClick">
      <pro-tab-pane label="User">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><calendar /></el-icon>
            <span>Route</span>
          </span>
        </template>
        User
      </pro-tab-pane>
      <pro-tab-pane label="Config">Config</pro-tab-pane>
      <pro-tab-pane label="Role" name="Role">Role11</pro-tab-pane>
      <pro-tab-pane label="Task" name="fourth">Task</pro-tab-pane>  
    </pro-tabs>
    <pro-row class="my-4">
      <pro-button size="large" round>Large</pro-button>
      <pro-button round>Default</pro-button>
      <pro-button size="small" round>Small</pro-button>
      <pro-button size="large" icon="Search" round>Search</pro-button>
      <pro-button icon="Search" round>Search</pro-button>
      <pro-button size="small" icon="Search" round>Search</pro-button>
    </pro-row>
  </div>
</template>
<script setup lang="ts">
import {  watch } from "vue"
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
const tabData=ref([
  {label:"Route",name:"1"},
  {label:"Config",name:"2"},
  {label:"Role",name:"3"},
  {label:"Task",name:"4"}
])
const a = ref()
const clickFn=()=>{
  console.log("11111")
}

const stop=watch(a,()=>{console.log(a.value)})

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>


<style lang="scss" scoped>
.el-button .custom-loading .circular {
  margin-right: 6px;
  width: 18px;
  height: 18px;
  animation: loading-rotate 2s linear infinite;
}
.el-button .custom-loading .circular .path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: var(--el-button-text-color);
  stroke-linecap: round;
}
</style>
