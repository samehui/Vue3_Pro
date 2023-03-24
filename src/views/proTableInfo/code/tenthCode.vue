<template>
<pro-collapse>
<pro-collapse-item title="代码" name="1">	
<pre><textarea class="codeText" disabled rows="101" v-pre>
<template>
 <pro-row class="my-4">
    <pro-button @click="resetDateFilter">重置date列筛选条件</pro-button>
    <pro-button @click="clearFilter">重置所有列筛选条件</pro-button>
  </pro-row>
  <pro-table ref="tableRef" row-key="date" :data="tableData" style="width: 100%">
    <pro-table-column
      prop="date"
      label="Date"
      sortable
      width="180"
      column-key="date"
      :filters="[
        { text: '2016-05-01', value: '2016-05-01' },
        { text: '2016-05-02', value: '2016-05-02' },
        { text: '2016-05-03', value: '2016-05-03' },
        { text: '2016-05-04', value: '2016-05-04' },
      ]"
      :filter-method="filterHandler"
    />
    <pro-table-column prop="name" label="Name" width="180" />
    <pro-table-column prop="address" label="Address" :formatter="formatter" />

    <pro-table-column
      prop="tag"
      label="Tag"
      width="100"
      :filters="[
        { text: 'Home', value: 'Home' },
        { text: 'Office', value: 'Office' },
      ]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
    >
      <template #default="scope">
        <pro-button :type="scope.row.tag === 'Home' ? '' : 'success'" disabled>{{ scope.row.tag }}</pro-button>
      </template>
    </pro-table-column>
  </pro-table>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { ElTable } from 'element-plus'

  interface User {
    date: string
    name: string
    address: string
    tag: string
  }
  const tableData: User[] = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      tag: 'Home',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      tag: 'Office',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      tag: 'Home',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      tag: 'Office',
    }
  ]
  const tableRef = ref&ltInstanceType&lttypeof ElTable&gt&gt()
  const resetDateFilter = () => {
    tableRef.value!.clearFilter(['date'])
  }
  const clearFilter = () => {
    tableRef.value!.clearFilter()
  }
   const formatter = (row: User, column: TableColumnCtx&ltUser&gt) => {
    return row.address
  }
  const filterTag = (value: string, row: User) => {
    return row.tag === value
  }
  const filterHandler = (
    value: string,
    row: User,
    column: TableColumnCtx&ltUser&gt
  ) => {
    const property = column['property']
    return row[property] === value
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
