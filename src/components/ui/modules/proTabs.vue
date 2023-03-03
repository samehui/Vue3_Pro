<template>
  <el-tabs class="demo-tabs"
    v-model="_activeValue" 
    :type="type"
    :closable="closable"
    :addable="addable"
    :editable="editable"
    :tabPosition="tabPosition"
    :stretch="stretch"
    :beforeLeave="beforeLeave"
    @tab-click="tabClickFN"
    @tab-change="tabChangeFn"
    @tab-remove="tabRemoveFn"
    @tab-add="tabAddFn"
    @edit="editFn"
  >
    <slot></slot>
  </el-tabs>
</template>
<script setup lang="ts">
import { computed } from "vue"
import type { TabsPaneContext } from 'element-plus'
const props = defineProps({
  //当前显示的name值
  activeValue: {
    type: String,
    default: "0"
  },
  //风格类型，取值:card/border-card
  type: {
    type: String,
    default: ""
  },
  //标签是否可关闭，取值：true|false
  closable: {
    type: Boolean,
    default: false
  },
  //标签是否可增加，取值：true|false
  addable: {
    type: Boolean,
    default: false
  },
  //标签是否同时可增加和关闭，取值：true|false
  editable: {
    type: Boolean,
    default: false
  },
  //选项卡所在位置，取值：top|right|bottom|left
  tabPosition: {
    type: String,
    default: "top"
  },
  //标签的宽度是否自撑开，取值：true|false
  stretch: {
    type: Boolean,
    default: false
  },
  //切换标签之前的钩子函数， 若返回 false  或者返回被 reject 的 Promise，则阻止切换。
  beforeLeave: {
    type: Function,
    default: ()=>{return true}
  }
})
const emit = defineEmits(['update:activeValue','tab-click','tab-change','tab-remove','tab-add','edit'])
const _activeValue = computed({
	get(){
		return props.activeValue
	},
	set(val){
		emit("update:activeValue",val)
	}
})
const tabClickFN = (tab: TabsPaneContext, event: Event) => {
  emit('tab-click', tab, event)
}
const tabChangeFn = (name: String) => {
  emit('tab-change', name)
}
const tabRemoveFn = (name: String) => {
  emit('tab-remove', name)
}
const tabAddFn = () => {
  emit('tab-add')
}
const editFn = (targetName: string, action: 'remove' | 'add') => {
  emit('edit', targetName, action)
}
</script>