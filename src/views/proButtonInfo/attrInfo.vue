<template>
	<h2 class='title'>Button 属性</h2>
	<pro-table :data="tableData" border style="width: 100%">
		<pro-table-column prop="attrName" label="属性名" width="180" />
		<pro-table-column prop="attrInfo" label="说明" />
		<pro-table-column prop="attrType" label="类型" width="100" />
		<pro-table-column prop="attrDefault" label="默认值" width="100" />
	</pro-table>
	<h2 class='title'>Button 插槽</h2>
	<pro-table :data="sloteData" border style="width: 100%">
		<pro-table-column prop="sloteName" label="插槽名" width="180" />
		<pro-table-column prop="sloteInfo" label="说明" />
	</pro-table>
</template>
<script setup lang="ts">
const tableData = [
  {
    attrName: 'size',
    attrInfo: '尺寸，取值："large" | "default" | "small"',
    attrType: 'string',
    attrDefault:''
  },
  {
    attrName: 'type',
    attrInfo: '类型，取值:"primary"| "success"| "warning"| "danger"| "info"',
    attrType: 'string',
    attrDefault:''
  },
  {
    attrName: 'plain',
    attrInfo: '是否为朴素按钮，取值：true|false',
    attrType: 'boolean',
    attrDefault:'false'
  },
  {
    attrName: 'text',
    attrInfo: '是否为文字按钮，取值：true|false',
    attrType: 'boolean',
    attrDefault:'false'
	},
	{
    attrName: 'bg',
    attrInfo: '是否显示文字按钮背景颜色，取值：true|false',
    attrType: 'boolean',
    attrDefault:'false'
  },
  {
    attrName: 'link',
    attrInfo: '是否为链接按钮，取值：true|false',
    attrType: 'boolean',
    attrDefault:'false'
	},
	{
    attrName: 'round',
    attrInfo: '是否为圆角按钮，取值：true|false',
    attrType: 'boolean',
    attrDefault:'false'
  },
  {
    attrName: 'circle',
    attrInfo: '是否为圆形按钮，取值：true|false',
    attrType: 'boolean',
    attrDefault:'false'
	},
	{
    attrName: 'loading',
    attrInfo: '是否为加载中状态，取值：true|false',
    attrType: 'boolean',
    attrDefault:'false'
	},
	{
    attrName: 'disabled',
    attrInfo: '按钮是否为禁用状态，取值：true|false',
    attrType: 'boolean',
    attrDefault:'false'
	},
	{
    attrName: 'icon',
    attrInfo: '图标组件',
    attrType: 'string',
    attrDefault:''
	},
	{
    attrName: 'autofocus',
    attrInfo: '原生 autofocus 属性，取值：true|false',
    attrType: 'boolean',
    attrDefault:'false'
	},
	{
    attrName: 'nativeType',
    attrInfo: '原生 type 属性，取值："button"| "submit" | "reset"',
    attrType: 'string',
    attrDefault:'button'
	},
	{
    attrName: 'autoInsertSpace',
    attrInfo: '自动在两个中文字符之间插入空格，取值：true|false',
    attrType: 'boolean',
    attrDefault:'false'
	},
	{
    attrName: 'color',
    attrInfo: '自定义按钮颜色, 并自动计算 hover 和 active 触发后的颜色',
    attrType: 'string',
    attrDefault:''
	},
	{
    attrName: 'dark',
    attrInfo: 'dark 模式, 意味着自动设置 color 为 dark 模式的颜色',
    attrType: 'boolean',
    attrDefault:''
	}
]
const sloteData = [
	{
		sloteName: 'default',
    sloteInfo: '自定义默认内容',
	},
	{
		sloteName: 'loading',
    sloteInfo: '自定义加载中组件,userLoadingSlot为true时方可使用',
	}
]
</script>