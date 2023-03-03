<template>
  <h2 class='title'>基础用法</h2> 
  <el-row class="mb-4">
    <pro-button>Default</pro-button>
    <pro-button type="primary">Primary</pro-button>
    <pro-button type="success">Success</pro-button>
    <pro-button type="info">Info</pro-button>
    <pro-button type="warning">Warning</pro-button>
    <pro-button type="danger">Danger</pro-button>
  </el-row>

  <el-row class="mb-4">
    <pro-button plain>Plain</pro-button>
    <pro-button type="primary" plain>Primary</pro-button>
    <pro-button type="success" plain>Success</pro-button>
    <pro-button type="info" plain>Info</pro-button>
    <pro-button type="warning" plain>Warning</pro-button>
    <pro-button type="danger" plain>Danger</pro-button>
  </el-row>

  <el-row class="mb-4">
    <pro-button round>Round</pro-button>
    <pro-button type="primary" round>Primary</pro-button>
    <pro-button type="success" round>Success</pro-button>
    <pro-button type="info" round>Info</pro-button>
    <pro-button type="warning" round>Warning</pro-button>
    <pro-button type="danger" round>Danger</pro-button>
  </el-row>

  <el-row>
    <pro-button icon="Search" circle />
    <pro-button type="primary" icon="Edit" circle />
    <pro-button type="success" icon="Check" circle />
    <pro-button type="info" icon="Message" circle />
    <pro-button type="warning" icon="Star" circle />
    <pro-button type="danger" icon="Delete" circle />
  </el-row>
<firstCode/>
</template>
<script setup lang="ts">
import firstCode from "./firstCode.vue"

</script>