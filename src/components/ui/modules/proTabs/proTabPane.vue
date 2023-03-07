<template>
  <el-tab-pane>
    <template #label v-if="customTabName">
			<slot name="label"></slot>
		</template>
    <slot></slot>
  </el-tab-pane>
</template>
<script setup lang="ts">
import { onMounted, useSlots, ref } from 'vue'
const customTabName = ref<Boolean>(false)
const slots = useSlots()
onMounted(() => {
  customTabName.value = slots.label ? true : false
})
</script>