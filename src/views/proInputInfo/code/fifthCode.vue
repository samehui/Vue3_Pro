<template>
<pro-collapse>
<pro-collapse-item title="代码" name="1">
<pre><textarea class="codeText" disabled rows="47" v-pre>
<template>
  <div>
    <pro-input
      v-model="input1"
      class="w-50 m-2"
      placeholder="请输入"
      suffix-icon="Calendar"
    />
    <pro-input
      v-model="input2"
      class="w-50 m-2"
      placeholder="请输入"
      prefix-icon="Search"
    />
  </div>
  <div>
    <pro-input v-model="input3" class="w-50 m-2" placeholder="请输入">
      <template #suffix>
        <pro-icon icon="Calendar"  />
      </template>
    </pro-input>
    <pro-input v-model="input4" class="w-50 m-2" placeholder="请输入">
      <template #prefix>
        <pro-icon icon="Search"  />
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

<style lang="scss" scoped>
.w-50 {
  width: 12.5rem;
}
.m-2 {
  margin:0.5rem 0.5rem 0.5rem 0;
}
</style>
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
