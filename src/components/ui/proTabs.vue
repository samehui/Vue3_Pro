<template>
  <el-tabs v-model="activeValue" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>
</template>
<script setup lang="ts">
import { computed} from "vue"
const props = defineProps({
  //尺寸，取值：'large'| 'default'| 'small'
  activeName: {
    type: String,
    default: ""
  },

})
console.log("props",props)
const emit=defineEmits(['update:activeName'])
const activeValue=computed({
	get(){
		return props.activeValue
	},
	set(val){
		emit("update:activeName",val)
	}
})
</script>