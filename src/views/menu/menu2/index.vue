<template>
  <pro-table :data="tableData" stripe style="width: 100%">
    <pro-table-column prop="date" label="Date" width="180" />
    <pro-table-column prop="name" label="Name" width="180" />
    <pro-table-column prop="address" label="Address" />
  </pro-table>
</template>

<script lang="ts" setup>
import {reactive} from 'vue'
const obj=reactive({
  name:"ddd",
  age:"12"
})
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
