<template>
	<el-button>
    <template #loading v-if="isUserLoadingSlot">
      <slot name="loading"></slot>
    </template>
    <template #default v-if="isUseDefault">
      <slot name="default"></slot>
    </template>
	</el-button>
</template>
<script setup lang="ts">
  import {onMounted,useSlots,ref} from 'vue'
  const isUserLoadingSlot = ref<Boolean>(false)
  const isUseDefault = ref<Boolean>(false)
  const slots = useSlots()
  onMounted(() => {
    isUseDefault.value = slots.default ? true : false
    isUserLoadingSlot.value = slots.loading ? true : false
  })
</script>