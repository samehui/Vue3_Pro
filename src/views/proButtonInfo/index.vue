<template>
  <div class="app-container">
    <pro-tabs  type="border-card">
      <pro-tab-pane label="属性说明"><attrInfo/></pro-tab-pane>
      <pro-tab-pane label="示例"><examples/></pro-tab-pane> 
    </pro-tabs>
  </div>
</template>
<script setup lang="ts">
import attrInfo from "./attrInfo.vue"
import examples from "./examples.vue"
</script>