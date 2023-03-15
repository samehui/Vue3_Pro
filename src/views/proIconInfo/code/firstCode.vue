<template>
<pro-collapse>
<pro-collapse-item title="代码" name="1">
	
<pre><textarea class="codeText" disabled rows="16" v-pre>
<template>
  <pro-row class="my-4">
    <pro-icon icon="Search" class="icon-margin-rigth"/>
    <pro-icon icon="Search" :size="20" color="#409EFC" class="icon-margin-rigth"/>
    <pro-icon icon="Edit" :size="25" class="icon-margin-rigth"/>
    <pro-icon icon="Delete" :size="20" class="icon-margin-rigth"/>
  </pro-row>
</template>

<style lang="scss" scoped>
.icon-margin-rigth{
  margin-right: 20px
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
