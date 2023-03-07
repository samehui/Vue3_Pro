<template>
	<el-collapse-item>
    <template #title v-if="isUserTitleSlot">
      <slot name="title"></slot>
    </template>
		<slot name="default"></slot>
	</el-collapse-item>
</template>

<script setup lang="ts">
  import { onMounted, useSlots, ref } from 'vue'
  const isUserTitleSlot = ref<Boolean>(false)
  const slots = useSlots()
  onMounted(() => {
    isUserTitleSlot.value = slots.title ? true : false
  })
</script>