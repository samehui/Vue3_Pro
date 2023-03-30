<template>
<pro-collapse>
<pro-collapse-item title="代码" name="1">
<pre><textarea class="codeText" disabled rows="56" v-pre>
<template>
  <div>
    <pro-input v-model="input1" placeholder="请输入">
      <template #prepend>Http://</template>
    </pro-input>
  </div>
  <div class="mt-4">
    <pro-input v-model="input2" placeholder="请输入">
      <template #append>.com</template>
    </pro-input>
  </div>
  <div class="mt-4">
    <pro-input
      v-model="input3"
      placeholder="请输入"
    >
      <template #prepend>
        <pro-select v-model="select" placeholder="Select" style="width: 115px">
          <pro-option label="Restaurant" value="1" />
          <pro-option label="Order No." value="2" />
          <pro-option label="Tel" value="3" />
        </pro-select>
      </template>
      <template #append>
        <pro-button icon="Search" />
      </template>
    </pro-input>
  </div>
  <div class="mt-4">
    <pro-input
      v-model="input4"
      placeholder="请输入"
    >
      <template #prepend>
        <pro-button icon="Search" />
      </template>
      <template #append>
        <pro-select v-model="select" placeholder="Select" style="width: 115px">
          <pro-option label="Restaurant" value="1" />
          <pro-option label="Order No." value="2" />
          <pro-option label="Tel" value="3" />
        </pro-select>
      </template>
    </pro-input>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const input1 = ref('')
  const input2 = ref('')
  const input3 = ref('')
  const input4 = ref('')
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
