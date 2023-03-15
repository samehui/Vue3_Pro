<template>
<pro-collapse>
<pro-collapse-item title="代码" name="1">
	
<pre><textarea class="codeText" disabled rows="30" v-pre>
<template>
  <pro-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <pro-tab-pane label="User" name="first">User</pro-tab-pane>
    <pro-tab-pane label="Config" name="second">Config</pro-tab-pane>
    <pro-tab-pane label="Role" name="third">Role</pro-tab-pane>
    <pro-tab-pane label="Task" name="fourth">Task</pro-tab-pane>
  </pro-tabs>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import type { TabsPaneContext } from 'element-plus'

  const activeName = ref('first')

  const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
  }
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
.paddingLeft10{
	width: 100%
}
.codeText{
	line-height: 1.5;
	color: #ccc;
	background: #4a4a4a;
	width: 100%;
  resize: none;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
