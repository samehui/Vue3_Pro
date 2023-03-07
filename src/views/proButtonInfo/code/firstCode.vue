<template>
<pro-collapse>
<pro-collapse-item title="代码" name="1">
	
<pre><textarea class="codeText" disabled rows="53" v-pre>
<template>
<!-- 默认样式 -->
  <pro-row class="mb-4">
    <pro-button>Default</pro-button>
    <pro-button type="primary">Primary</pro-button>
    <pro-button type="success">Success</pro-button>
    <pro-button type="info">Info</pro-button>
    <pro-button type="warning">Warning</pro-button>
    <pro-button type="danger">Danger</pro-button>
  </pro-row>

<!-- pain的样式 -->
  <pro-row class="mb-4">
    <pro-button plain>Plain</pro-button>
    <pro-button type="primary" plain>Primary</pro-button>
    <pro-button type="success" plain>Success</pro-button>
    <pro-button type="info" plain>Info</pro-button>
    <pro-button type="warning" plain>Warning</pro-button>
    <pro-button type="danger" plain>Danger</pro-button>
  </pro-row>

<!-- round的样式 -->
  <pro-row class="mb-4">
    <pro-button round>Round</pro-button>
    <pro-button type="primary" round>Primary</pro-button>
    <pro-button type="success" round>Success</pro-button>
    <pro-button type="info" round>Info</pro-button>
    <pro-button type="warning" round>Warning</pro-button>
    <pro-button type="danger" round>Danger</pro-button>
  </pro-row>

<!-- link的样式 -->
  <pro-row class="mb-4">
    <pro-button link>Round</pro-button>
    <pro-button type="primary" link>Primary</pro-button>
    <pro-button type="success" link>Success</pro-button>
    <pro-button type="info" link>Info</pro-button>
    <pro-button type="warning" link>Warning</pro-button>
    <pro-button type="danger" link>Danger</pro-button>
  </pro-row>

<!-- circle的样式 -->
  <pro-row class="mb-4">
    <pro-button icon="Search" circle />
    <pro-button type="primary" icon="Edit" circle />
    <pro-button type="success" icon="Check" circle />
    <pro-button type="info" icon="Message" circle />
    <pro-button type="warning" icon="Star" circle />
    <pro-button type="danger" icon="Delete" circle />
  </pro-row>
</template>
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
