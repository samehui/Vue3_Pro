<template>
<pro-collapse>
<pro-collapse-item title="代码" name="1">
<pre><textarea class="codeText" disabled rows="52" v-pre>
<template>
  <pro-input
    v-model="input1"
    class="w-50 m-2"
    size="large"
    placeholder="请输入"
  />
  <pro-input v-model="input2" class="w-50 m-2" placeholder="请输入" />
  <pro-input
    v-model="input3"
    class="w-50 m-2"
    size="small"
    placeholder="请输入"
  />
  <div class="mt-4">
    <pro-input
      v-model="text"
      maxlength="10"
      placeholder="请输入"
      show-word-limit
      type="text"
    />
    <div style="margin: 20px 0" />
    <pro-input
      v-model="textarea"
      maxlength="30"
      placeholder="请输入"
      show-word-limit
      type="textarea"
    />
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const input1 = ref('')
  const input2 = ref('')
  const input3 = ref('')
  const text = ref('')
  const textarea = ref('')
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
