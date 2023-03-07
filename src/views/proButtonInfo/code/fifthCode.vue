<template>
<pro-collapse>
<pro-collapse-item title="代码" name="1">
	
<pre><textarea class="codeText" disabled rows="27" v-pre>
<template>
  <pro-row class="my-4">
    <pro-button size="large">Large</pro-button>
    <pro-button>Default</pro-button>
    <pro-button size="small">Small</pro-button>
    <pro-button size="large" icon="Search">Search</pro-button>
    <pro-button icon="Search">Search</pro-button>
    <pro-button size="small" icon="Search">Search</pro-button>
  </pro-row>

  <pro-row class="my-4">
    <pro-button size="large" round>Large</pro-button>
    <pro-button round>Default</pro-button>
    <pro-button size="small" round>Small</pro-button>
    <pro-button size="large" icon="Search" round>Search</pro-button>
    <pro-button icon="Search" round>Search</pro-button>
    <pro-button size="small" icon="Search" round>Search</pro-button>
  </pro-row>

  <pro-row class="my-4">
    <pro-button icon="Search" size="large" circle />
    <pro-button icon="Search" circle />
    <pro-button icon="Search" size="small" circle />
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
