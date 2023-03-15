<template>
  <el-tabs v-model="_modelValue">
    <slot></slot>
  </el-tabs>
</template>
<script setup lang="ts">
  import { computed } from "vue"
  import type { TabsPaneContext } from 'element-plus'
  const props = defineProps({
    //当前显示的name值
    modelValue: {
      type: String,
      default: "0"
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