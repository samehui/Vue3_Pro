<template>
<pro-collapse>
<pro-collapse-item title="代码" name="1">
	
<pre><textarea class="codeText" disabled rows="62" v-pre>
<template>
  <pro-table :data="tableData" style="width: 100%">
    <pro-table-column fixed prop="date" label="Date" width="150" />
    <pro-table-column prop="name" label="Name" width="120" />
    <pro-table-column prop="state" label="State" width="120" />
    <pro-table-column prop="city" label="City" width="120" />
    <pro-table-column prop="address" label="Address" width="600" />
    <pro-table-column prop="zip" label="Zip" width="120" />
    <pro-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <pro-button link type="primary" size="small" @click="handleClick">Detail</pro-button>
        <pro-button link type="primary" size="small">Edit</pro-button>
      </template>
    </pro-table-column>
  </pro-table>
</template>

<script lang="ts" setup>
  const tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
      tag: 'Home',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
      tag: 'Office',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
      tag: 'Home',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
      tag: 'Office',
    }
  ]
  const handleClick = () => {
    console.log('click')
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
