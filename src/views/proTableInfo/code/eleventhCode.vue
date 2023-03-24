<template>
<pro-collapse>
<pro-collapse-item title="代码" name="1">	
<pre><textarea class="codeText" disabled rows="87" v-pre>
<template>
  <pro-table :data="filterTableData" style="width: 100%">
    <pro-table-column type="index" :index="indexMethod" />
    <pro-table-column label="Date">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <pro-icon icon='timer'></pro-icon>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </div>
      </template>
    </pro-table-column>
    <pro-table-column label="Name">
      <template #default="scope">
        <pro-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #default>
            <div>name: {{ scope.row.name }}</div>
            <div>address: {{ scope.row.address }}</div>
          </template>
          <template #reference>
            <pro-tag>{{ scope.row.name }}</pro-tag>
          </template>
        </pro-popover>
      </template>
    </pro-table-column>
    <pro-table-column align="right">
      <template #header>
        <pro-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <pro-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</pro-button>
        <pro-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</pro-button>
      </template>
    </pro-table-column>
  </pro-table>
</template>

<script lang="ts" setup>
  import { ref,computed} from 'vue'

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
  const search = ref('')
  const filterTableData = computed(() =>
    tableData.filter(
      (data) =>
        !search.value ||
        data.name.toLowerCase().includes(search.value.toLowerCase())
    )
  )
  const indexMethod = (index: number) => {
    return index + 1
  }
  const handleEdit = (index: number, row: User) => {
    console.log(index, row)
  }
  const handleDelete = (index: number, row: User) => {
    console.log(index, row)
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
