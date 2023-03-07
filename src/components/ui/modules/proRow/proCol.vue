<template>
	<el-col 
	:gutter="gutter"
	:justify="justify"
	:align="align"
	:tag="tag"
	>
		<slot name="default"></slot>
	</el-col>
</template>

<script setup lang="ts">
const props = defineProps({
  //栅格占据的列数
  span: {
    type: Number,
    default: 24
  },
  //栅格左侧的间隔格数
  offset: {
    type: Number,
    default: 0
  },
  //栅格向右移动格数
  push: {
    type: Number,
    default: 0
  },
  //栅格向左移动格数
  pull: {
    type: Number,
    default: 0
  },
  //<768px 响应式栅格数或者栅格属性对象,如取值为对象：{span?: number, offset?: number, pull?: number, push?: number}
  xs: {
    type: Number,
    default: 0
  },
  //≥768px 响应式栅格数或者栅格属性对象,如取值为对象：{span?: number, offset?: number, pull?: number, push?: number}
  sm: {
    type: Number,
    default: 0
  },
  //≥992px 响应式栅格数或者栅格属性对象,如取值为对象：{span?: number, offset?: number, pull?: number, push?: number}
  md: {
    type: Number,
    default: 0
  },
  //≥1200px 响应式栅格数或者栅格属性对象,如取值为对象：{span?: number, offset?: number, pull?: number, push?: number}
  lg: {
    type: Number,
    default: 0
  },
  //≥1920px 响应式栅格数或者栅格属性对象,如取值为对象：{span?: number, offset?: number, pull?: number, push?: number}
  xl: {
    type: Number,
    default: 0
	},
	//自定义元素标签
  tag: {
    type: String,
    default: "div"
  }
})
</script>