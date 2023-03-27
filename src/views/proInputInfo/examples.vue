<template>
  <h2 class='title'>基础用法</h2> 
  <pro-collapse v-model="activeNames" @change="handleChange">
    <pro-collapse-item title="Consistency" name="1">
      <div>
        Consistent with real life: in line with the process and logic of real
        life, and comply with languages and habits that the users are used to;
      </div>
      <div>
        Consistent within interface: all elements should be consistent, such
        as: design style, icons and texts, position of elements, etc.
      </div>
    </pro-collapse-item>
    <pro-collapse-item title="Feedback" name="2">
      <div>
        Operation feedback: enable the users to clearly perceive their
        operations by style updates and interactive effects;
      </div>
      <div>
        Visual feedback: reflect current state by updating or rearranging
        elements of the page.
      </div>
    </pro-collapse-item>
    <pro-collapse-item title="Efficiency" name="3">
      <div>
        Simplify the process: keep operating process simple and intuitive;
      </div>
      <div>
        Definite and clear: enunciate your intentions clearly so that the
        users can quickly understand and make decisions;
      </div>
      <div>
        Easy to identify: the interface should be straightforward, which helps
        the users to identify and frees them from memorizing and recalling.
      </div>
    </pro-collapse-item>
    <pro-collapse-item title="Controllability" name="4">
      <div>
        Decision making: giving advices about operations is acceptable, but do
        not make decisions for the users;
      </div>
      <div>
        Controlled consequences: users should be granted the freedom to
        operate, including canceling, aborting or terminating current
        operation.
      </div>
    </pro-collapse-item>
  </pro-collapse>
<component :is="components.firstCode"/>

  <h2 class='title'>手风琴效果</h2>
  <p>通过 accordion 属性来设置是否以手风琴模式显示。</p>
  <pro-collapse v-model="activeName" accordion>
    <pro-collapse-item name="1">
      <template #title>
          Consistency
          <pro-icon icon="info-filled" />
        </template>
      <div>
        Consistent with real life: in line with the process and logic of real
        life, and comply with languages and habits that the users are used to;
      </div>
      <div>
        Consistent within interface: all elements should be consistent, such
        as: design style, icons and texts, position of elements, etc.
      </div>
    </pro-collapse-item>
    <pro-collapse-item title="Feedback" name="2">
      <div>
        Operation feedback: enable the users to clearly perceive their
        operations by style updates and interactive effects;
      </div>
      <div>
        Visual feedback: reflect current state by updating or rearranging
        elements of the page.
      </div>
    </pro-collapse-item>
    <pro-collapse-item title="Efficiency" name="3">
      <div>
        Simplify the process: keep operating process simple and intuitive;
      </div>
      <div>
        Definite and clear: enunciate your intentions clearly so that the
        users can quickly understand and make decisions;
      </div>
      <div>
        Easy to identify: the interface should be straightforward, which helps
        the users to identify and frees them from memorizing and recalling.
      </div>
    </pro-collapse-item>
    <pro-collapse-item title="Controllability" name="4">
      <div>
        Decision making: giving advices about operations is acceptable, but do
        not make decisions for the users;
      </div>
      <div>
        Controlled consequences: users should be granted the freedom to
        operate, including canceling, aborting or terminating current
        operation.
      </div>
    </pro-collapse-item>
  </pro-collapse>
<component :is="components.secondCode"/>
</template>

<script lang="ts" setup>
  import { ref, shallowReactive } from 'vue'
  //批量引入组件
  const importFile = import.meta.glob('./code/*.vue') 
  const components:any = shallowReactive({})
  Object.keys(importFile).forEach((item) => {
    importFile[item]().then((mod)=>{
      components[item.replace(/\.\/code\/(.*).vue/,'$1')] = mod.default    
    })
  });

  const activeNames = ref(['1'])
  const handleChange = (val: string[]) => {
    console.log(val)
  }

  const activeName = ref('1')

</script>

<style lang="scss" scoped>
.icon-margin-rigth{
  margin-right: 20px
}
</style>