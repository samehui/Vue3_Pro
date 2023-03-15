<template>
  <h2 class='title'>Card 属性</h2>
	<pro-table :data="cardAttrData" border style="width: 100%">
		<pro-table-column prop="attrName" label="属性名" width="180" />
		<pro-table-column prop="attrInfo" label="说明" />
		<pro-table-column prop="attrType" label="类型" width="150" />
		<pro-table-column prop="attrDefault" label="默认值" width="150" />
	</pro-table>
  <h2 class='title'>Card 插槽</h2>
	<pro-table :data="sloteData" border style="width: 100%">
		<pro-table-column prop="sloteName" label="插槽名" width="180" />
		<pro-table-column prop="sloteInfo" label="说明" />
	</pro-table>
</template>
<script setup lang="ts">
const cardAttrData = [
  {
    attrName: 'header',
    attrInfo: '卡片的标题 你既可以通过设置 header 来修改标题，也可以通过 slot#header 传入 DOM 节点',
    attrType: 'string',
    attrDefault:''
  },
  {
    attrName: 'body-style',
    attrInfo: 'body 的 CSS 样式',
    attrType: 'object',
    attrDefault:''
  },
  {
    attrName: 'shadow',
    attrInfo: '设置阴影显示时机,取值:always | never | hover',
    attrType: 'string',
    attrDefault:'always'
  }
]
const sloteData = [
	{
		sloteName: 'default',
    sloteInfo: '自定义默认内容',
	},
	{
		sloteName: 'header',
    sloteInfo: '卡片标题内容',
	}
]
</script>

<style lang="scss" scoped>
.marginTop10 {
  margin-top: 10px;
  width: 100%;
}
.iconBox{
  width: 100%;
  height: 100%;
}
</style>