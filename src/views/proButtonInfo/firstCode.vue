<template>
<el-collapse >
<el-collapse-item title="代码" name="1">
	
<pre><textarea class="codeText" disabled rows="30">
<template>
 <pro-button>Default</pro-button>
 <pro-button type="primary">Primary</pro-button>
 <pro-button type="success">Success</pro-button>
 <pro-button type="info">Info</pro-button>
 <pro-button type="warning">Warning</pro-button>
 <pro-button type="danger">Danger</pro-button>

 <pro-button plain>Plain</pro-button>
 <pro-button type="primary" plain>Primary</pro-button>
 <pro-button type="success" plain>Success</pro-button>
 <pro-button type="info" plain>Info</pro-button>
 <pro-button type="warning" plain>Warning</pro-button>
 <pro-button type="danger" plain>Danger</pro-button>

 <pro-button round>Round</pro-button>
 <pro-button type="primary" round>Primary</pro-button>
 <pro-button type="success" round>Success</pro-button>
 <pro-button type="info" round>Info</pro-button>
 <pro-button type="warning" round>Warning</pro-button>
 <pro-button type="danger" round>Danger</pro-button>

 <pro-button :icon="Search" circle />
 <pro-button type="primary" :icon="Edit" circle />
 <pro-button type="success" :icon="Check" circle />
 <pro-button type="info" :icon="Message" circle />
 <pro-button type="warning" :icon="Star" circle />
 <pro-button type="danger" :icon="Delete" circle />
</template>
</textarea></pre>
</el-collapse-item>
</el-collapse>
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
	resize: none
}
</style>
