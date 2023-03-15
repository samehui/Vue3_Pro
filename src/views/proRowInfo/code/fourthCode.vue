<template>
<pro-collapse>
<pro-collapse-item title="代码" name="1">
	
<pre><textarea class="codeText" disabled rows="34" v-pre>
<template>
  <pro-row :gutter="20">
    <pro-col :span="6"><div class="grid-content ep-bg-purple" /></pro-col>
    <pro-col :span="6" :offset="6"><div class="grid-content ep-bg-purple"/></pro-col>
  </pro-row>
  <pro-row :gutter="20">
    <pro-col :span="6" :offset="6"><div class="grid-content ep-bg-purple"/></pro-col>
    <pro-col :span="6" :offset="6"><div class="grid-content ep-bg-purple"/></pro-col>
  </pro-row>
  <pro-row :gutter="20">
    <pro-col :span="12" :offset="6"><div class="grid-content ep-bg-purple"/></pro-col>
  </pro-row>
</template>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.ep-bg-purple {
  background: #d3dce6;
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
