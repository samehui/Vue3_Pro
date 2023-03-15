<template>
  <h2 class='title'>Collapse 属性</h2>
	<pro-table :data="collapseAttrData" border style="width: 100%">
		<pro-table-column prop="attrName" label="属性名" width="180" />
		<pro-table-column prop="attrInfo" label="说明" />
		<pro-table-column prop="attrType" label="类型" width="150" />
		<pro-table-column prop="attrDefault" label="默认值" width="150" />
	</pro-table>
  <h2 class='title'>Collapse 事件</h2>
	<pro-table :data="collapseEventData" border style="width: 100%">
		<pro-table-column prop="eventName" label="事件名" width="180" />
		<pro-table-column prop="eventInfo" label="说明" />
		<pro-table-column prop="callbackParams" label="回调参数" width="250" />
	</pro-table>
  <h2 class='title'>Collapse Item 属性</h2>
	<pro-table :data="collapseItemAttrData" border style="width: 100%">
		<pro-table-column prop="attrName" label="属性名" width="180" />
		<pro-table-column prop="attrInfo" label="说明" />
		<pro-table-column prop="attrType" label="类型" width="150" />
		<pro-table-column prop="attrDefault" label="默认值" width="150" />
	</pro-table>
  <h2 class='title'>Collapse Item 插槽</h2>
	<pro-table :data="collapseItemSloteData" border style="width: 100%">
		<pro-table-column prop="sloteName" label="插槽名" width="180" />
		<pro-table-column prop="sloteInfo" label="说明" />
	</pro-table>
</template>
<script setup lang="ts">
const collapseAttrData = [
  {
    attrName: 'v-model',
    attrInfo: '当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)',
    attrType: 'string  / array ',
    attrDefault:''
  },
  {
    attrName: 'accordion',
    attrInfo: '是否手风琴模式',
    attrType: 'boolean',
    attrDefault:'false'
  }
]

const collapseEventData = [
	{
		eventName: 'change',
    eventInfo: '当前激活面板改变时触发(如果是手风琴模式，参数 activeNames 类型为string，否则为array)',
    callbackParams:'(activeNames: array (non-accordion mode) / string (accordion mode))'
	}
]

const collapseItemAttrData = [
  {
    attrName: 'name',
    attrInfo: '唯一标志符',
    attrType: 'string/number',
    attrDefault:''
  },
  {
    attrName: 'title',
    attrInfo: '面板标题',
    attrType: 'string',
    attrDefault:''
  },
  {
    attrName: 'disabled',
    attrInfo: '是否禁用',
    attrType: 'boolean',
    attrDefault:''
  }
]

const collapseItemSloteData = [
	{
		sloteName: 'default',
    sloteInfo: '自定义默认内容',
	},
	{
		sloteName: 'title',
    sloteInfo: '面板标题',
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