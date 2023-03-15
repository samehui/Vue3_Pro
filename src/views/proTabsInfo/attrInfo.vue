<template>
	<h2 class='title'>Tabs 属性</h2>
	<pro-table :data="tabsAttrData" border style="width: 100%">
		<pro-table-column prop="attrName" label="属性名" width="180" />
		<pro-table-column prop="attrInfo" label="说明" />
		<pro-table-column prop="attrType" label="类型" width="100" />
		<pro-table-column prop="attrDefault" label="默认值" width="100" />
	</pro-table>
  <h2 class='title'>Tabs 事件</h2>
	<pro-table :data="tabsEventData" border style="width: 100%">
		<pro-table-column prop="eventName" label="事件名" width="180" />
		<pro-table-column prop="eventInfo" label="说明" />
		<pro-table-column prop="callbackParams" label="回调参数" width="250" />
	</pro-table>
  <h2 class='title'>Tab-pane 属性</h2>
	<pro-table :data="tabPaneAttrData" border style="width: 100%">
		<pro-table-column prop="attrName" label="属性名" width="180" />
		<pro-table-column prop="attrInfo" label="说明" />
		<pro-table-column prop="attrType" label="类型" width="100" />
		<pro-table-column prop="attrDefault" label="默认值" width="240" />
	</pro-table>
	<h2 class='title'>Tab-pane 插槽</h2>
	<pro-table :data="tabPanesloteData" border style="width: 100%">
		<pro-table-column prop="sloteName" label="插槽名" width="180" />
		<pro-table-column prop="sloteInfo" label="说明" />
	</pro-table>
</template>
<script setup lang="ts">
const tabsAttrData = [
  {
    attrName: 'v-model',
    attrInfo: '绑定值，选中选项卡的 name',
    attrType: 'string / number',
    attrDefault:'第一个选项卡的 name'
  },
  {
    attrName: 'type',
    attrInfo: '风格类型，取值：card|border-card',
    attrType: 'string',
    attrDefault:''
  },
  {
    attrName: 'closable',
    attrInfo: '标签是否可关闭，取值：true|false',
    attrType: 'boolean',
    attrDefault:'false'
  },
  {
    attrName: 'addable',
    attrInfo: '标签是否可增加，取值：true|false',
    attrType: 'boolean',
    attrDefault:'false'
  },
  {   
    attrName: 'editable',
    attrInfo: '标签是否同时可增加和关闭，取值：true|false',
    attrType: 'boolean',
    attrDefault:'false'
  },
  {
    attrName: 'tab-position',
    attrInfo: '选项卡所在位置，取值：top|right|bottom|left',
    attrType: 'string',
    attrDefault:'top'
	},
	{
    attrName: 'stretch',
    attrInfo: '标签的宽度是否自撑开，取值：true|false',
    attrType: 'boolean',
    attrDefault:'false'
  },
  {
    attrName: 'before-leave',
    attrInfo: '切换标签之前的钩子函数， 若返回 false  或者返回被 reject 的 Promise，则阻止切换。',
    attrType: 'Function(activeName, oldActiveName)',
    attrDefault:''
	}
]

const tabsEventData = [
	{
		eventName: 'tab-click',
    eventInfo: 'tab 被选中时触发',
    callbackParams:'(pane: TabsPaneContext, ev: Event)'
	},
  {
		eventName: 'tab-change',
    eventInfo: 'activeName 改变时触发',
    callbackParams:'(name: TabPaneName)'
	},
  {
		eventName: 'tab-remove',
    eventInfo: '点击 tab 移除按钮时触发',
    callbackParams:'(name: TabPaneName)'
	},
  {
		eventName: 'tab-add',
    eventInfo: '点击 tab 新增按钮时触发',
    callbackParams:''
  },
  {
		eventName: 'edit',
    eventInfo: '点击 tab 的新增或移除按钮后触发',
    callbackParams:'(paneName: TabPaneName | undefined, action: "remove" | "add")'
	}
]

const tabPaneAttrData = [
  {
    attrName: 'label',
    attrInfo: '选项卡标题',
    attrType: 'string',
    attrDefault:''
  },
  {
    attrName: 'disabled',
    attrInfo: '是否禁用',
    attrType: 'boolean',
    attrDefault:'false'
  },
  {
    attrName: 'name',
    attrInfo: '与选项卡绑定值 value 对应的标识符，表示选项卡别名',
    attrType: 'string / number',
    attrDefault:'该选项卡在选项卡列表中的序数值，第一个选项卡为 "0"'
  },
  {
    attrName: 'closable',
    attrInfo: '标签是否可关闭，取值：true|false',
    attrType: 'boolean',
    attrDefault:'false'
  }
]

const tabPanesloteData = [
	{
		sloteName: 'default',
    sloteInfo: 'Tab-pane 的内容',
	},
	{
		sloteName: 'label',
    sloteInfo: 'Tab-pane 的标题内容',
	}
]
</script>