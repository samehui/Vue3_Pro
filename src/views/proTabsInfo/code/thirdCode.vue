<template>
<pro-collapse>
<pro-collapse-item title="代码" name="1">
	
<pre><textarea class="codeText" disabled rows="30" v-pre>
<template>
  <pro-row class="my-4">
    <pro-button @click="tabPosition = 'top'">top</pro-button>
    <pro-button @click="tabPosition = 'right'">right</pro-button>
    <pro-button @click="tabPosition = 'bottom'">bottom</pro-button>
    <pro-button @click="tabPosition = 'left'">left</pro-button>
  </pro-row>
  <pro-tabs :tab-position="tabPosition" style="height: 200px" class="demo-tabs">
    <pro-tab-pane label="User">User</pro-tab-pane>
    <pro-tab-pane label="Config">Config</pro-tab-pane>
    <pro-tab-pane label="Role">Role</pro-tab-pane>
    <pro-tab-pane label="Task">Task</pro-tab-pane>
  </pro-tabs>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const tabPosition = ref('left')
</script>

<style lang="scss" scoped>
.demo-tabs >::v-deep .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
</textarea></pre>
</pro-collapse-item>
</pro-collapse>
</template>

<style lang="scss" scoped>
.codeText{
	line-height: 1.5;
	color: #ccc;
	background: #4a4a4a;
	width: 100%;
  resize: none;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
