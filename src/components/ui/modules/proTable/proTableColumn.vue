<template>
	<el-table-column>
    <template #header v-if="isUserHeaderSlot">
      <slot name="header"></slot>
    </template>
		<template #default v-if="isUseDefault">
      <slot name="default"></slot>
    </template>
  </el-table-column>
</template>

<script setup lang="ts">
  import {onMounted,useSlots,ref} from 'vue'
  const isUserHeaderSlot = ref<Boolean>(false)
  const isUseDefault = ref<Boolean>(false)
  const slots = useSlots()
  onMounted(() => {
    isUserHeaderSlot.value = slots.header ? true : false
    isUseDefault.value = slots.default ? true : false
  })
</script>