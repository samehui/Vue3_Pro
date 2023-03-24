<template>
<pro-collapse>
<pro-collapse-item title="代码" name="1">
	
<pre><textarea class="codeText" disabled rows="77" v-pre>
<template>
  <pro-table
    ref="singleTableRef"
    :data="tableData"
    highlight-current-row
    style="width: 100%"
    @current-change="handleCurrentChange"
  >
    <pro-table-column type="index" width="50" />
    <pro-table-column property="date" label="Date" width="120" />
    <pro-table-column property="name" label="Name" width="120" />
    <pro-table-column property="address" label="Address" />
  </pro-table>
  <div style="margin-top: 20px">
    <pro-button @click="setCurrent(tableData[1])">选中第二行</pro-button>
    <pro-button @click="setCurrent()">清空选中行</pro-button>
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
  const currentRow = ref()
  const singleTableRef = ref&ltInstanceType&lttypeof ElTable&gt&gt()
  const handleCurrentChange = (val: User | undefined) => {
    currentRow.value = val
  }
  const setCurrent = (row?: User) => {
    singleTableRef.value!.setCurrentRow(row)
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
