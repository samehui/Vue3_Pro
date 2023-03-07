<template>
<pro-collapse>
<pro-collapse-item title="代码" name="1">
	
<pre><textarea class="codeText" disabled rows="10" v-pre>
<template>
  <pro-row class="my-4">
    <pro-button color="#626aef" >Default</pro-button>
    <pro-button color="#626aef" plain>Plain</pro-button>
    <pro-button color="#626aef" disabled>Disabled</pro-button>
    <pro-button color="#626aef" disabled plain>Disabled Plain</pro-button>
  </pro-row>
</template>
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
