<template>
  <el-input v-model="_modelValue" >
    <template #prefix v-if="typeName!='textarea'&&isUsePrefix">
      <slot name="prefix"></slot>
    </template>
    <template #suffix v-if="typeName!='textarea'&&isUseSuffix">
      <slot name="suffix"></slot>
    </template>
    <template #prepend v-if="typeName!='textarea'&&isUsePrepend">
      <slot name="prepend"></slot>
    </template>
    <template #append v-if="typeName!='textarea'&&isUseAppend">
      <slot name="append"></slot>
    </template>
  </el-input> 
</template>

<script setup lang="ts">
import { computed, useAttrs, useSlots, ref } from "vue"
const attrs = useAttrs()
const props = defineProps({
  //当前显示的name值
  modelValue: {
    type: [String,Array,null],
    default: null
  }
})
//插槽
const isUsePrefix = ref<Boolean>(false)
const isUseSuffix = ref<Boolean>(false)
const isUsePrepend = ref<Boolean>(false)
const isUseAppend = ref<Boolean>(false)
const typeName  = ref<String>('text')
const slots = useSlots()
isUsePrefix.value = slots.prefix ? true : false
isUseSuffix.value = slots.suffix ? true : false
isUsePrepend.value = slots.prepend ? true : false
isUseAppend.value = slots.append ? true : false
typeName.value = attrs.type || "text"
//v-model
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