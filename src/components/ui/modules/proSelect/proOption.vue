<template>
  <el-option>
    <template #default v-if="isUseDefault">
      <slot name="default"></slot>
    </template>
  </el-option>
</template>

<script setup lang="ts">
 import {onMounted,useSlots,ref} from 'vue'
const isUseDefault = ref<Boolean>(false)
const slots = useSlots()
onMounted(() => {
  isUseDefault.value = slots.default ? true : false
})
</script>