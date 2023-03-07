<template>
<pro-collapse>
<pro-collapse-item title="代码" name="1">
	
<pre><textarea class="codeText" disabled rows="43" v-pre>
<template>
  <pro-row class="mb-4">
    <pro-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
    >{{ button.text }}</pro-button>
  </pro-row>

  <pro-row class="mb-4">
    <pro-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
      bg
    >{{ button.text }}</pro-button>
  </pro-row>

  <pro-row class="mb-4">
    <pro-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
      disabled
    >{{ button.text }}</pro-button>
  </pro-row>
</template>

<script setup lang="ts">
const buttons = [
  { type: '', text: 'plain' },
  { type: 'primary', text: 'primary' },
  { type: 'success', text: 'success' },
  { type: 'info', text: 'info' },
  { type: 'warning', text: 'warning' },
  { type: 'danger', text: 'danger' },
] as const
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
