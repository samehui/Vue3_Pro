<template>
<pro-collapse>
<pro-collapse-item title="代码" name="1">
<pre><textarea class="codeText" disabled rows="23" v-pre>
<template>
  <pro-input
    v-model="textarea"
    autosize
    type="textarea"
    placeholder="请输入"
  />
  <div class="mt-4"></div>
  <pro-input
    v-model="textarea1"
    :autosize="{ minRows: 2, maxRows: 4 }"
    type="textarea"
    placeholder="请输入"
  />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const textarea = ref('')
  const textarea1 = ref('')
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
