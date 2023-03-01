<template>
  <div class="app-container">
    <el-card> menu 1-1 </el-card>
    <pro-button type="primary" @click="clickFn" size="default"  icon="Search" link>aa</pro-button>
    <pro-button type="primary"  loading-icon="Eleme" loading>Loading</pro-button>
    <pro-button type="primary" loading userLoadingSlot>
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
    <pro-tabs v-model:activeValue="a" :tabData="tabData">
      <template v-for="item in tabData" #[item.name]>

        <!-- <template #label>
          <span class="custom-tabs-label">
            <el-icon><calendar /></el-icon>
            <span>Route</span>
          </span>
        </template> -->
        <pro-button v-if="item.name=='1'" type="primary" @click="clickFn" size="default"  icon="Search" link>aa</pro-button>
      </template>
       <template #2>
        <!-- <template #label>
          <span class="custom-tabs-label">
            <el-icon><calendar /></el-icon>
            <span>Route</span>
          </span>
        </template> -->
        Config
      </template>
    </pro-tabs>
    <el-tabs type="border-card" class="demo-tabs">
    <el-tab-pane label="Route">
      <template #label>
        <span class="custom-tabs-label">
          <el-icon><calendar /></el-icon>
          <span>Route</span>
        </span>
      </template>
      Route
    </el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>

  </div>
</template>
<script setup lang="ts">
import {  watch } from "vue"
import { ref } from 'vue'
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
