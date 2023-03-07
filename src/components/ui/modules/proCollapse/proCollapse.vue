<template>
	<el-collapse v-model="_modelValue">
		<slot name="default"></slot>
	</el-collapse>
</template>

<script setup lang="ts">
import { computed } from "vue"
const props = defineProps({
  //当前显示的name值
  modelValue: {
    type: [String,Array,null],
    default: null
  }
})
const emit = defineEmits(['update:modelValue'])
const _modelValue = computed({
	get(){
		return props.modelValue
	},
	set(val){
		emit("update:modelValue",val)
	}
})
</script>