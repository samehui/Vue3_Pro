<template>
  <h2 class='title'>Row 属性</h2>
	<pro-table :data="rowAttrData" border style="width: 100%">
		<pro-table-column prop="attrName" label="属性名" width="180" />
		<pro-table-column prop="attrInfo" label="说明" />
		<pro-table-column prop="attrType" label="类型" width="150" />
		<pro-table-column prop="attrDefault" label="默认值" width="150" />
	</pro-table>
  <h2 class='title'>col 属性</h2>
	<pro-table :data="colAttrData" border style="width: 100%">
		<pro-table-column prop="attrName" label="属性名" width="180" />
		<pro-table-column prop="attrInfo" label="说明" />
		<pro-table-column prop="attrType" label="类型" width="150" />
		<pro-table-column prop="attrDefault" label="默认值" width="150" />
	</pro-table>
  <h2 class='title'>基于断点的隐藏类</h2>
  <pro-table :data="classData" border style="width: 100%">
		<pro-table-column prop="className" label="class名" width="180" />
		<pro-table-column prop="calssInfo" label="说明" />
	</pro-table>
</template>
<script setup lang="ts">
const rowAttrData = [
  {
    attrName: 'gutter',
    attrInfo: '栅格间隔',
    attrType: 'number',
    attrDefault:'0'
  },
  {
    attrName: 'justify',
    attrInfo: 'flex 布局下的水平排列方式,取值:"start" | "end" | "center" | "space-around" | "space-between" | "space-evenly"',
    attrType: 'string',
    attrDefault:'start'
  },
  {
    attrName: 'align',
    attrInfo: 'flex 布局下的垂直排列方式,取值:"top" | "middle" | "bottom"',
    attrType: 'string',
    attrDefault:'top'
  },
  {
    attrName: 'tag',
    attrInfo: '自定义元素标签',
    attrType: 'string',
    attrDefault:'div'
  }
]

const colAttrData = [
  {
    attrName: 'span',
    attrInfo: '栅格占据的列数',
    attrType: 'number',
    attrDefault:'24'
  },
  {
    attrName: 'offset',
    attrInfo: '栅格左侧的间隔格数',
    attrType: 'number',
    attrDefault:'0'
  },
  {
    attrName: 'push',
    attrInfo: '栅格向右移动格数',
    attrType: 'number',
    attrDefault:'0'
  },
  {
    attrName: 'pull',
    attrInfo: '栅格向左移动格数',
    attrType: 'number',
    attrDefault:'0'
  },
  {
    attrName: 'xs',
    attrInfo: '<768px 响应式栅格数或者栅格属性对象,如取值为对象,格式为:{span?: number, offset?: number, pull?: number, push?: number}',
    attrType: 'number / object',
    attrDefault:''
  },
  {
    attrName: 'sm',
    attrInfo: '≥768px 响应式栅格数或者栅格属性对象,如取值为对象,格式为:{span?: number, offset?: number, pull?: number, push?: number}',
    attrType: 'number / object',
    attrDefault:''
  },
  {
    attrName: 'md',
    attrInfo: '≥992px 响应式栅格数或者栅格属性对象,如取值为对象,格式为:{span?: number, offset?: number, pull?: number, push?: number}',
    attrType: 'number / object',
    attrDefault:''
  },
  {
    attrName: 'lg',
    attrInfo: '≥1200px 响应式栅格数或者栅格属性对象,如取值为对象,格式为:{span?: number, offset?: number, pull?: number, push?: number}',
    attrType: 'number / object',
    attrDefault:''
  },
  {
    attrName: 'xl',
    attrInfo: '≥1920px 响应式栅格数或者栅格属性对象,如取值为对象,格式为:{span?: number, offset?: number, pull?: number, push?: number}',
    attrType: 'number / object',
    attrDefault:''
  },
  {
    attrName: 'tag',
    attrInfo: '自定义元素标签',
    attrType: 'string',
    attrDefault:'div'
  }
]

const classData = [
  {
    className: 'hidden-xs-only',
    calssInfo: '当视口在 xs 尺寸时隐藏',
  },
  {
    className: 'hidden-sm-only',
    calssInfo: '当视口在 sm 尺寸时隐藏',
  },
  {
    className: 'hidden-sm-and-down',
    calssInfo: '当视口在 sm 及以下尺寸时隐藏',
  },
  {
    className: 'hidden-sm-and-up',
    calssInfo: '当视口在 sm 及以上尺寸时隐藏',
  },
  {
    className: 'hidden-md-only',
    calssInfo: '当视口在 md 尺寸时隐藏',
  },
  {
    className: 'hidden-md-and-down',
    calssInfo: ' 当视口在 md 及以下尺寸时隐藏',
  },
  {
    className: 'hidden-md-and-up',
    calssInfo: '当视口在 md 及以上尺寸时隐藏',
  },
  {
    className: 'hidden-lg-only',
    calssInfo: '当视口在 lg 尺寸时隐藏',
  },
  {
    className: 'hidden-lg-and-down',
    calssInfo: '当视口在 lg 及以下尺寸时隐藏',
  },
  {
    className: 'hidden-lg-and-up',
    calssInfo: '当视口在 lg 及以上尺寸时隐藏',
  },
  {
    className: 'hidden-xl-only',
    calssInfo: '当视口在 xl 尺寸时隐藏',
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