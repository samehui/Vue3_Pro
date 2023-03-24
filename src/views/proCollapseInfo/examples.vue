<template>
  <h2 class='title'>基础用法</h2> 
  <pro-icon icon="Search" class="icon-margin-rigth"/>
  <pro-icon icon="Search" :size="20" color="#409EFC" class="icon-margin-rigth"/>
  <pro-icon icon="Edit" :size="25" class="icon-margin-rigth"/>
  <pro-icon icon="Delete" :size="20" class="icon-margin-rigth"/>
<firstCode/>
</template>

<script lang="ts" setup>
  import firstCode from "./code/firstCode.vue"
</script>

<style lang="scss" scoped>
.icon-margin-rigth{
  margin-right: 20px
}
</style>