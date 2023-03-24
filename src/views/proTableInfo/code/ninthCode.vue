<template>
<pro-collapse>
<pro-collapse-item title="代码" name="1">
	
<pre><textarea class="codeText" disabled rows="67" v-pre>
<template>
  <pro-table
    ref="multipleTableRef"
    :data="tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <pro-table-column type="selection" width="55" />
    <pro-table-column label="Date" width="120">
      <template #default="scope">{{ scope.row.date }}</template>
    </pro-table-column>
    <pro-table-column property="name" label="Name" width="120" />
    <pro-table-column property="address" label="Address" show-overflow-tooltip />
  </pro-table>
  <div style="margin-top: 20px">
    <pro-button @click="toggleSelection([tableData[1], tableData[2]])">选中或取消第二行和第三行</pro-button>
    <pro-button @click="toggleSelection()">清除选中</pro-button>
  </div>  
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { ElTable } from 'element-plus'

  interface User {
    date: string
    name: string
    address: string
  }
  const tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'John',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Morgan',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Jessy',
      address: 'No. 189, Grove St, Los Angeles',
    }
  ]
  const multipleSelection = ref()
  const multipleTableRef = ref&ltInstanceType&lttypeof ElTable&gt&gt()
  const handleSelectionChange = (val: User[]) => {
    multipleSelection.value = val
  }
  const toggleSelection = (rows?: User[]) => {
    if (rows) {
      rows.forEach((row) => {
        multipleTableRef.value!.toggleRowSelection(row,undefined)
      })
    } else {
      multipleTableRef.value!.clearSelection()
    }
  }
</script>
</textarea></pre>
</pro-collapse-item>
</pro-collapse>
</template>

<style lang="scss" scoped>
.codeText{
	line-height: 1.5;
	color: #ccc;
	background: #4a4a4a;
	width: 100%;
  resize: none;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
