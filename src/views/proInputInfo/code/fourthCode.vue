<template>
<pro-collapse>
<pro-collapse-item title="代码" name="1">
<pre><textarea class="codeText" disabled rows="15" v-pre>
<template>
  <pro-input
    v-model="input"
    type="password"
    placeholder="请输入密码"
    show-password
  />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const input = ref('')
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
  font-family: Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
