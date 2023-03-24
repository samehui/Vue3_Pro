<template>
	<el-popover>
    <template #reference v-if="isUseReference">
      <slot name="reference"></slot>
    </template>
    <template #default v-if="isUseDefault">
      <slot name="default"></slot>
    </template>
	</el-popover>
</template>

<script setup lang="ts">
  import { onMounted, useSlots, ref } from 'vue'
  const isUseReference = ref<Boolean>(true)
  const isUseDefault = ref<Boolean>(true)
  const slots = useSlots()
  onMounted(() => {
    isUseReference.value = slots.reference ? true : false
    isUseDefault.value = slots.default ? true : false
  })
</script>