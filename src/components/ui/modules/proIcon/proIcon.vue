<template>
	<el-icon>
		<component :is="icon"/>
	</el-icon>
</template>

<script setup lang="ts">
const props = defineProps({
  //图标名
  icon: {
    type: String,
    require: true,
    default: ""
  }
})
</script>