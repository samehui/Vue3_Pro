<template>
  <div class="app-container">
    <pro-table
      ref="singleTableRef"
      :data="tableData"
      highlight-current-row
      style="width: 100%"
      height="250px"
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
    <textarea class="codeText"  rows="77" ></textarea>
  </div>
</template>

<script lang="ts" setup>
  import { ref,getCurrentInstance } from 'vue'

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
    },
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
  const singleTableRef = ref()
  const handleCurrentChange = (val: User | undefined) => {
    currentRow.value = val
  }
  const setCurrent = (row?: User) => {
    //console.log(singleTableRef)
    singleTableRef.value!.setCurrentRow(row)
    singleTableRef.value!.setScrollTop(10)
  }
</script>