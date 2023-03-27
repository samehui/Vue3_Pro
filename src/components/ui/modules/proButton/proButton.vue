<template>
	<el-button>
    <template #loading v-if="isUseLoadingSlot">
      <slot name="loading"></slot>
    </template>
    <template #default v-if="isUseDefault">
      <slot name="default"></slot>
    </template>
	</el-button>
</template>
<script setup lang="ts">
  import {onMounted,useSlots,ref} from 'vue'
  const isUseLoadingSlot = ref<Boolean>(false)
  const isUseDefault = ref<Boolean>(false)
  const slots = useSlots()
  onMounted(() => {
    isUseDefault.value = slots.default ? true : false
    isUseLoadingSlot.value = slots.loading ? true : false
  })
</script>