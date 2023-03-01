<template>
	<el-button 
		:size="size"
		:type="type"
		:plain="plain"
		:text="text"
		:bg="bg"	
		:link="link"
		:round="round"
		:circle="circle"
		:loading="loading"
		:loadingIcon="loadingIcon"
		:disabled="disabled"
		:icon="icon"
		:autofocus="autofocus"
		:native-type="nativeType"
		:auto-insert-space="autoInsertSpace"
		:color="color"
		:dark="dark"
		>
      <template #loading v-if="userLoadingSlot&&loading">
        <slot name="loading"></slot>
      </template>
			<slot name="default"></slot>
      
	</el-button>
</template>
<script setup lang="ts">
const props = defineProps({
  //尺寸，取值：'large'| 'default'| 'small'
  size: {
    type: String,
    default: ""
  },
  //类型，取值:'primary'| 'success'| 'warning'| 'danger'| 'info'
  type: {
    type: String,
    default: ""
  },
  //是否为朴素按钮，取值：true|false
  plain: {
    type: Boolean,
    default: false
  },
  //是否为文字按钮，取值：true|false
  text: {
    type: Boolean,
    default: false
  },
  //是否显示文字按钮背景颜色，取值：true|false
  bg: {
    type: Boolean,
    default: false
  },
  //是否为链接按钮，取值：true|false
  link: {
    type: Boolean,
    default: false
  },
  //是否为圆角按钮，取值：true|false
  round: {
    type: Boolean,
    default: false
  },
  //是否为圆形按钮，取值：true|false
  circle: {
    type: Boolean,
    default: false
  },
  //是否为加载中状态，取值：true|false
  loading: {
    type: Boolean,
    default: false
  },
  //自定义加载中状态图标组件
  loadingIcon: {
    type: String,
    default: "Loading"
  },
  //按钮是否为禁用状态，取值：true|false
  disabled: {
    type: Boolean,
    default: false
  },
  //图标组件
  icon: {
    type: String,
    default: null
  },
  //原生 autofocus 属性，取值：true|false
  autofocus: {
    type: Boolean,
    default: false
  },
  //原生 type 属性，取值：'button'| 'submit'| 'reset'
  nativeType: {
    type: String,
    default: "button"
  },
  //自动在两个中文字符之间插入空格，取值：true|false
  autoInsertSpace: {
    type: Boolean,
    default: false
  },
  //自定义按钮颜色, 并自动计算 hover 和 active 触发后的颜色
  color: {
    type: String,
    default: null
  },
  //dark 模式, 意味着自动设置 color 为 dark 模式的颜色
  dark: {
    type: Boolean,
    default: false
  },
  //是否使用自定义loading插槽
  userLoadingSlot: {
    type: Boolean,
    default: false
  }
})
</script>