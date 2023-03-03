<template>
  <el-tab-pane v-if="name" 
		:label="label" 
		:name="name"
		:disabled="disabled"
		:closable="closable"
		:lazy="lazy"
	>
		<template #label v-if="customTabName">
			<slot name="label"></slot>
		</template>
		<slot></slot>
	</el-tab-pane>
	<el-tab-pane v-else 
		:label="label"
		:disabled="disabled"
		:closable="closable"
		:lazy="lazy"
	>
		<template #label v-if="customTabName">
			<slot name="label"></slot>
		</template>
		<slot></slot>
	</el-tab-pane>
</template>
<script setup lang="ts">
const props = defineProps({
	//标签页名称
	label: {
		type: String,
		default: ""
	},
	//标签页唯一标识
	name:{
		type: String,
		default:""
	},
	//是否禁用，取值：true|false
	disabled: {
    type: Boolean,
    default: false
	},
	//标签是否可关闭，取值：true|false
	closable: {
    type: Boolean,
    default: false
	},
	//标签是否延迟渲染，取值：true|false
	lazy: {
    type: Boolean,
    default: false
	},
	//是否自定义标签名，取值：true|false
	customTabName: {
    type: Boolean,
    default: false
	}
})
</script>