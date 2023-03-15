<template>
	<el-card>
		<template #header v-if="isUserHeaderSlot">
      <slot name="header"></slot>
    </template>
    <template #default v-if="isUseDefault">
      <slot name="default"></slot>
    </template>
	</el-card>
</template>

<script setup lang="ts">
  import {onMounted,useSlots,ref} from 'vue'
  const isUserHeaderSlot = ref<Boolean>(false)
  const isUseDefault = ref<Boolean>(false)
  const slots = useSlots()
  onMounted(() => {
    isUseDefault.value = slots.default ? true : false
    isUserHeaderSlot.value = slots.header ? true : false
  })
</script>