<template>
  <el-tabs v-model="_activeValue" class="demo-tabs" >
    <el-tab-pane v-for="item in tabData" :label="item[defaultProp.label]" :name="item[defaultProp.name]">
      	<slot :name="item[defaultProp.name]"></slot>
    </el-tab-pane>
  </el-tabs>
</template>
<script setup lang="ts">
import { computed, watch } from "vue"
const props = defineProps({
  //当前显示的name值
  activeValue: {
    type: String,
    default: ""
  },
  //el-tab-pane 数据[{lable:XX,name:xx}],name值唯一
  tabData:{
    type: Array,
    default:()=>{ return []} 
  },
  //el-tab-pane数据的label属性名和name属性名
  defaultProp:{
    type: Object,
    default:()=>{ return {
      label:"label",
      name:"name"
    }} 
  }
})
const emit=defineEmits(['update:activeValue'])
const _activeValue=computed({
	get(){
		return props.activeValue
	},
	set(val){
		emit("update:activeValue",val)
	}
})
</script>