<template>
<pro-collapse>
<pro-collapse-item title="代码" name="1">
	
<pre><textarea class="codeText" disabled rows="33" v-pre>
<template>
<!-- 默认禁用的样式 -->
  <pro-row class="mb-4">
    <pro-button disabled>Default</pro-button>
    <pro-button type="primary" disabled>Primary</pro-button>
    <pro-button type="success" disabled>Success</pro-button>
    <pro-button type="info" disabled>Info</pro-button>
    <pro-button type="warning" disabled>Warning</pro-button>
    <pro-button type="danger" disabled>Danger</pro-button>
  </pro-row>

<!-- plain禁用的样式 -->
  <pro-row class="mb-4">
    <pro-button plain disabled>Plain</pro-button>
    <pro-button type="primary" plain disabled>Primary</pro-button>
    <pro-button type="success" plain disabled>Success</pro-button>
    <pro-button type="info" plain disabled>Info</pro-button>
    <pro-button type="warning" plain disabled>Warning</pro-button>
    <pro-button type="danger" plain disabled>Danger</pro-button>
  </pro-row>

<!-- link禁用的样式 -->
  <pro-row class="mb-4">
    <pro-button link disabled>link</pro-button>
    <pro-button type="primary" link disabled>Primary</pro-button>
    <pro-button type="success" link disabled>Success</pro-button>
    <pro-button type="info" link disabled>Info</pro-button>
    <pro-button type="warning" link disabled>Warning</pro-button>
    <pro-button type="danger" link disabled>Danger</pro-button>
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
