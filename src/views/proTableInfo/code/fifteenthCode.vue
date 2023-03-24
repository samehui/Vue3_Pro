<template>
<pro-collapse>
<pro-collapse-item title="代码" name="1">	
<pre><textarea class="codeText" disabled rows="105" v-pre>
<template>
  <pro-table
    :data="tableData"
    :span-method="arraySpanMethod"
    border
    style="width: 100%"
  >
    <pro-table-column prop="id" label="ID" width="180" />
    <pro-table-column prop="name" label="Name" />
    <pro-table-column prop="amount1" sortable label="Amount 1" />
    <pro-table-column prop="amount2" sortable label="Amount 2" />
    <pro-table-column prop="amount3" sortable label="Amount 3" />
  </pro-table>

  <pro-table
    :data="tableData"
    :span-method="objectSpanMethod"
    border
    style="width: 100%; margin-top: 20px"
  >
    <pro-table-column prop="id" label="ID" width="180" />
    <pro-table-column prop="name" label="Name" />
    <pro-table-column prop="amount1" label="Amount 1" />
    <pro-table-column prop="amount2" label="Amount 2" />
    <pro-table-column prop="amount3" label="Amount 3" />
  </pro-table>
</template>

<script lang="ts" setup>
  import type { TableColumnCtx } from 'element-plus'
  interface User {
    id: number
    date: string
    name: string
    amount1?: string
    amount2?: string
    amount3?: number
    
  }
  interface SpanMethodProps&ltT = User&gt{
    row: User
    column: TableColumnCtx&ltT&gt
    rowIndex: number
    columnIndex: number
  }
  const tableData: User[] = [
    {
      id: '12987122',
      name: 'Tom',
      amount1: '234',
      amount2: '3.2',
      amount3: 10,
    },
    {
      id: '12987123',
      name: 'Tom',
      amount1: '165',
      amount2: '4.43',
      amount3: 12,
    },
    {
      id: '12987124',
      name: 'Tom',
      amount1: '324',
      amount2: '1.9',
      amount3: 9,
    },
    {
      id: '12987125',
      name: 'Tom',
      amount1: '621',
      amount2: '2.2',
      amount3: 17,
    },
    {
      id: '12987126',
      name: 'Tom',
      amount1: '539',
      amount2: '4.1',
      amount3: 15,
    }
  ]
  const arraySpanMethod = ({
    row,
    column,
    rowIndex,
    columnIndex,
  }: SpanMethodProps) => {
    if (rowIndex % 2 === 0) {
      if (columnIndex === 0) {
        return [1, 2]
      } else if (columnIndex === 1) {
        return [0, 0]
      }
    }
  }
  const objectSpanMethod = ({
    row,
    column,
    rowIndex,
    columnIndex,
  }: SpanMethodProps) => {
    if (columnIndex === 0) {
      if (rowIndex % 2 === 0) {
        return {
          rowspan: 2,
          colspan: 1,
        }
      } else {
        return {
          rowspan: 0,
          colspan: 0,
        }
      }
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
