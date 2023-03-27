<template>
  <el-select v-model="_modelValue">
    <template #prefix v-if="isUseRrefixSlot">
      <slot name="prefix"></slot>
    </template>
    <template #empty v-if="isUseEmptySlot">
      <slot name="empty"></slot>
    </template>
    <template #default v-if="isUseDefault">
      <slot name="default"></slot>
    </template>
  </el-select>
</template>

<script setup lang="ts">
import {onMounted, useSlots, ref, computed } from "vue"
const isUseRrefixSlot = ref<Boolean>(false)
const isUseEmptySlot = ref<Boolean>(false)
const isUseDefault = ref<Boolean>(false)
const slots = useSlots()
onMounted(() => {
  isUseDefault.value = slots.default ? true : false
  isUseRrefixSlot.value = slots.prefix ? true : false
  isUseEmptySlot.value = slots.empty ? true : false
})
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