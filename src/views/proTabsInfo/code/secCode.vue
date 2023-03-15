<template>
<pro-collapse>
<pro-collapse-item title="代码" name="1">
	
<pre><textarea class="codeText" disabled rows="33" v-pre>
<template>
  <!-- card样式标签 -->
  <pro-tabs type="card" class="demo-tabs">
    <pro-tab-pane label="User">User</pro-tab-pane>
    <pro-tab-pane label="Config">Config</pro-tab-pane>
    <pro-tab-pane label="Role">Role</pro-tab-pane>
    <pro-tab-pane label="Task">Task</pro-tab-pane>
  </pro-tabs>

  <!-- border-card样式标签 -->
  <pro-tabs type="border-card" class="demo-tabs">
    <pro-tab-pane label="User">
      <template #label>
        <span class="custom-tabs-label">
          <pro-icon icon="calendar"></pro-icon>
          <span>Route</span>
        </span>
      </template>
      User
    </pro-tab-pane>
    <pro-tab-pane label="Config">Config</pro-tab-pane>
    <pro-tab-pane label="Role">Role</pro-tab-pane>
    <pro-tab-pane label="Task">Task</pro-tab-pane>
  </pro-tabs>
</template>

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
