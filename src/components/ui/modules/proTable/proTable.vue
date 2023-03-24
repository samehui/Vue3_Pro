<template>
	<el-table :ref="refName">
		<slot name="default"></slot>
	</el-table>
</template>

<script setup lang="ts">
import { ref,getCurrentInstance} from 'vue'

const instance = getCurrentInstance();
const refName = 'table'+instance.uid;
const clearSelection = ()=>{
	instance.proxy.$refs[refName]!.clearSelection()
}
const getSelectionRows = ()=>{
	instance.proxy.$refs[refName]!.getSelectionRows()
}
const toggleRowSelection = (row?:Object, selected?:Boolean)=>{
	instance.proxy.$refs[refName]!.toggleRowSelection(row, selected)
}
const toggleAllSelection = ()=>{
	instance.proxy.$refs[refName]!.toggleAllSelection()
}
const toggleRowExpansion = (row?:Object, expanded?:Boolean)=>{
	instance.proxy.$refs[refName]!.toggleRowExpansion(row, expanded)
}
const setCurrentRow = (row?:Object)=>{
	instance.proxy.$refs[refName]!.setCurrentRow(row)
}
const clearSort = ()=>{
	instance.proxy.$refs[refName]!.clearSort()
}
const clearFilter = (columnKeys?:String)=>{
	instance.proxy.$refs[refName]!.clearFilter(columnKeys)
}
const doLayout = ()=>{
	instance.proxy.$refs[refName]!.doLayout()
}
const sort = (prop: String, order: String)=>{
	instance.proxy.$refs[refName]!.sort(prop, order)
}
const scrollTo = (options: Object | Number, yCoord?: number)=>{
	instance.proxy.$refs[refName]!.scrollTo(options, yCoord)
}
const setScrollTop = (top:Number)=>{
	instance.proxy.$refs[refName]!.setScrollTop(top)
}
const setScrollLeft = (left:Number)=>{
	instance.proxy.$refs[refName]!.setScrollLeft(left)
}
defineExpose({
	clearSelection,
	getSelectionRows,
	toggleRowSelection,
	toggleAllSelection,
	toggleRowExpansion,
	setCurrentRow,
	clearSort,
	clearFilter,
	doLayout,
	sort,
	scrollTo,
	setScrollTop,
	setScrollLeft
})
</script>