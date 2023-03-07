<template>
	<el-row 
  :class="class"
	:gutter="gutter"
	:justify="justify"
	:align="align"
	:tag="tag"
	>
		<slot name="default"></slot>
	</el-row>
</template>

<script setup lang="ts">
const props = defineProps({
  //类名
  class: {
    type: String,
    default: ""
  },
  //栅格间隔
  gutter: {
    type: Number,
    default: 0
  },
  //flex 布局下的水平排列方式，取值:'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'
  justify: {
    type: String,
    default: "start"
  },
  //flex 布局下的垂直排列方式，取值：'top' | 'middle' | 'bottom'
  align: {
    type: String,
    default: "top"
  },
  //自定义元素标签
  tag: {
    type: String,
    default: "div"
  }
})
</script>