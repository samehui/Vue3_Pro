<template>
  <h2 class='title'>基础用法</h2> 
  <p>通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。</p>
  <pro-row>
    <pro-col :span="24"><div class="grid-content ep-bg-purple-dark" /></pro-col>
  </pro-row>
  <pro-row>
    <pro-col :span="12"><div class="grid-content ep-bg-purple" /></pro-col>
    <pro-col :span="12"><div class="grid-content ep-bg-purple-light" /></pro-col>
  </pro-row>
  <pro-row>
    <pro-col :span="8"><div class="grid-content ep-bg-purple" /></pro-col>
    <pro-col :span="8"><div class="grid-content ep-bg-purple-light" /></pro-col>
    <pro-col :span="8"><div class="grid-content ep-bg-purple" /></pro-col>
  </pro-row>
  <pro-row>
    <pro-col :span="6"><div class="grid-content ep-bg-purple" /></pro-col>
    <pro-col :span="6"><div class="grid-content ep-bg-purple-light" /></pro-col>
    <pro-col :span="6"><div class="grid-content ep-bg-purple" /></pro-col>
    <pro-col :span="6"><div class="grid-content ep-bg-purple-light" /></pro-col>
  </pro-row>
  <pro-row>
    <pro-col :span="4"><div class="grid-content ep-bg-purple" /></pro-col>
    <pro-col :span="4"><div class="grid-content ep-bg-purple-light" /></pro-col>
    <pro-col :span="4"><div class="grid-content ep-bg-purple" /></pro-col>
    <pro-col :span="4"><div class="grid-content ep-bg-purple-light" /></pro-col>
    <pro-col :span="4"><div class="grid-content ep-bg-purple" /></pro-col>
    <pro-col :span="4"><div class="grid-content ep-bg-purple-light" /></pro-col>
  </pro-row>
<firstCode/>

  <h2 class='title'>分栏间隔</h2> 
  <p>行提供 gutter 属性来指定列之间的间距，其默认值为0。</p>
  <pro-row :gutter="20">
    <pro-col :span="6"><div class="grid-content ep-bg-purple" /></pro-col>
    <pro-col :span="6"><div class="grid-content ep-bg-purple" /></pro-col>
    <pro-col :span="6"><div class="grid-content ep-bg-purple" /></pro-col>
    <pro-col :span="6"><div class="grid-content ep-bg-purple" /></pro-col>
  </pro-row>
<secCode/>

  <h2 class='title'>混合布局</h2> 
  <p>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</p>
  <pro-row :gutter="20">
    <pro-col :span="16"><div class="grid-content ep-bg-purple" /></pro-col>
    <pro-col :span="8"><div class="grid-content ep-bg-purple" /></pro-col>
  </pro-row>
  <pro-row :gutter="20">
    <pro-col :span="8"><div class="grid-content ep-bg-purple" /></pro-col>
    <pro-col :span="8"><div class="grid-content ep-bg-purple" /></pro-col>
    <pro-col :span="4"><div class="grid-content ep-bg-purple" /></pro-col>
    <pro-col :span="4"><div class="grid-content ep-bg-purple" /></pro-col>
  </pro-row>
  <pro-row :gutter="20">
    <pro-col :span="4"><div class="grid-content ep-bg-purple" /></pro-col>
    <pro-col :span="16"><div class="grid-content ep-bg-purple" /></pro-col>
    <pro-col :span="4"><div class="grid-content ep-bg-purple" /></pro-col>
  </pro-row>
<thirdCode/>

  <h2 class='title'>列偏移</h2> 
  <p>通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。</p>
  <pro-row :gutter="20">
    <pro-col :span="6"><div class="grid-content ep-bg-purple" /></pro-col>
    <pro-col :span="6" :offset="6"><div class="grid-content ep-bg-purple"/></pro-col>
  </pro-row>
  <pro-row :gutter="20">
    <pro-col :span="6" :offset="6"><div class="grid-content ep-bg-purple"/></pro-col>
    <pro-col :span="6" :offset="6"><div class="grid-content ep-bg-purple"/></pro-col>
  </pro-row>
  <pro-row :gutter="20">
    <pro-col :span="12" :offset="6"><div class="grid-content ep-bg-purple"/></pro-col>
  </pro-row>
<fourthCode/>

  <h2 class='title'>对齐方式</h2> 
  <p>您可以通过justify 属性来定义子元素的排版方式，其取值为start、center、end、space-between、space-around或space-evenly。</p>
  <pro-row class="row-bg">
    <pro-col :span="6"><div class="grid-content ep-bg-purple" /></pro-col>
    <pro-col :span="6"><div class="grid-content ep-bg-purple-light" /></pro-col>
    <pro-col :span="6"><div class="grid-content ep-bg-purple" /></pro-col>
  </pro-row>
  <pro-row class="row-bg" justify="center">
    <pro-col :span="6"><div class="grid-content ep-bg-purple" /></pro-col>
    <pro-col :span="6"><div class="grid-content ep-bg-purple-light" /></pro-col>
    <pro-col :span="6"><div class="grid-content ep-bg-purple" /></pro-col>
  </pro-row>
  <pro-row class="row-bg" justify="end">
    <pro-col :span="6"><div class="grid-content ep-bg-purple" /></pro-col>
    <pro-col :span="6"><div class="grid-content ep-bg-purple-light" /></pro-col>
    <pro-col :span="6"><div class="grid-content ep-bg-purple" /></pro-col>
  </pro-row>
  <pro-row class="row-bg" justify="space-between">
    <pro-col :span="6"><div class="grid-content ep-bg-purple" /></pro-col>
    <pro-col :span="6"><div class="grid-content ep-bg-purple-light" /></pro-col>
    <pro-col :span="6"><div class="grid-content ep-bg-purple" /></pro-col>
  </pro-row>
  <pro-row class="row-bg" justify="space-around">
    <pro-col :span="6"><div class="grid-content ep-bg-purple" /></pro-col>
    <pro-col :span="6"><div class="grid-content ep-bg-purple-light" /></pro-col>
    <pro-col :span="6"><div class="grid-content ep-bg-purple" /></pro-col>
  </pro-row>
  <pro-row class="row-bg" justify="space-evenly">
    <pro-col :span="6"><div class="grid-content ep-bg-purple" /></pro-col>
    <pro-col :span="6"><div class="grid-content ep-bg-purple-light" /></pro-col>
    <pro-col :span="6"><div class="grid-content ep-bg-purple" /></pro-col>
  </pro-row>
<fifthCode/>

  <h2 class='title'>响应式布局</h2> 
  <p>参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。</p>
  <pro-row :gutter="10">
    <pro-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content ep-bg-purple"/></pro-col>
    <pro-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content ep-bg-purple-light"/></pro-col>
    <pro-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content ep-bg-purple"/></pro-col>
    <pro-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content ep-bg-purple-light"/></pro-col>
  </pro-row>
<sixthCode/>
</template>

<script lang="ts" setup>
  import firstCode from "./code/firstCode.vue"
  import secCode from "./code/secCode.vue"
  import thirdCode from "./code/thirdCode.vue"
  import fourthCode from "./code/fourthCode.vue"
  import fifthCode from "./code/fifthCode.vue"
  import sixthCode from "./code/sixthCode.vue"
</script>

<style lang="scss" scoped>
.demo-tabs >::v-deep .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.ep-bg-purple-dark {
  background: #99a9bf;
}
.ep-bg-purple {
  background: #d3dce6;
}
.ep-bg-purple-light {
  background: #e5e9f2;
}
</style>