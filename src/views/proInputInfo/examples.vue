<template>
  <h2 class='title'>基础用法</h2>
  <p>使用clearable属性即可得到一个可一键清空的输入框</p>
  <pro-input v-model="input" clearable placeholder="请输入" />
<component :is="components.firstCode"/>

  <h2 class='title'>禁用状态</h2>
  <p>通过 disabled 属性指定是否禁用 input 组件</p>
  <pro-input v-model="input1" disabled placeholder="请输入" />
<component :is="components.secondCode"/>

  <h2 class='title'>格式化</h2>
  <p>在 formatter的情况下显示值，我们通常同时使用 parser</p>
  <pro-input
    v-model="input2"
    placeholder="请输入"
    :formatter="(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
    :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
  />
<component :is="components.thirdCode"/>

  <h2 class='title'>密码框</h2>
  <p>使用 show-password 属性即可得到一个可切换显示隐藏的密码框</p>
  <pro-input
    v-model="input3"
    type="password"
    placeholder="请输入密码"
    show-password
  />
<component :is="components.fourthCode"/>

  <h2 class='title'>带图标的输入框</h2>
  <p>要在输入框中添加图标，你可以简单地使用 prefix-icon 和 suffix-icon 属性。 另外， prefix 和 suffix 命名的插槽也能正常工作。</p>
  <div>
    <pro-input
      v-model="input4"
      class="w-50 m-2"
      placeholder="请输入"
      suffix-icon="Calendar"
    />
    <pro-input
      v-model="input5"
      class="w-50 m-2"
      placeholder="请输入"
      prefix-icon="Search"
    />
  </div>
  <div>
    <pro-input v-model="input6" class="w-50 m-2" placeholder="请输入">
      <template #suffix>
        <pro-icon icon="Calendar"  />
      </template>
    </pro-input>
    <pro-input v-model="input7" class="w-50 m-2" placeholder="请输入">
      <template #prefix>
        <pro-icon icon="Search"  />
      </template>
    </pro-input>
  </div>
<component :is="components.fifthCode"/>

  <h2 class='title'>文本域</h2>
  <p>用于输入多行文本信息可缩放的输入框。 添加 type="textarea" 属性来将 input 元素转换为原生的 textarea 元素。文本域高度可通过 rows 属性控制</p>
  <p>设置文字输入类型的 autosize 属性使得根据内容自动调整的高度。 你可以给 autosize 提供一个包含有最大和最小高度的对象，让输入框自动调整。</p>
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
<component :is="components.sixthCode"/>

  <h2 class='title'>复合型输入框</h2>
  <p>可以在输入框中前置或后置一个元素，通常是标签或按钮。可通过 slot 来指定在 Input 中分发的前置或者后置的内容。</p>
  <div>
    <pro-input v-model="input8" placeholder="请输入">
      <template #prepend>Http://</template>
    </pro-input>
  </div>
  <div class="mt-4">
    <pro-input v-model="input9" placeholder="请输入">
      <template #append>.com</template>
    </pro-input>
  </div>
  <div class="mt-4">
    <pro-input
      v-model="input10"
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
      v-model="input11"
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
<component :is="components.seventhCode"/>

  <h2 class='title'>尺寸及输入长度限制</h2>
  <p>使用 size 属性改变输入框大小。 除了默认大小外，还有另外两个选项： large, small。</p>
  <p>使用 maxlength 和 minlength 属性, 来控制输入内容的最大字数和最小字数。 "字符数"使用JavaScript字符串长度来衡量。 为文本或文本输入类型设置 maxlength prop可以限制输入值的长度。 允许你通过设置 show-word-limit 到 true 来显示剩余字数。</p>
  <pro-input
    v-model="input12"
    class="w-50 m-2"
    size="large"
    placeholder="请输入"
  />
  <pro-input v-model="input13" class="w-50 m-2" placeholder="请输入" />
  <pro-input
    v-model="input14"
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
<component :is="components.eighthCode"/>
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

  const input = ref('')
  const input1 = ref('')
  const input2 = ref('')
  const input3 = ref('')
  const input4 = ref('')
  const input5 = ref('')
  const input6 = ref('')
  const input7 = ref('')
  const textarea = ref('')
  const textarea1 = ref('')
  const input8 = ref('')
  const input9 = ref('')
  const input10 = ref('')
  const select = ref('')
  const input11 = ref('')
  const input12 = ref('')
  const input13 = ref('')
  const input14 = ref('')
  const text = ref('')
  const textarea2 = ref('')
</script>

<style lang="scss" scoped>
.w-50 {
  width: 12.5rem;
}
.m-2 {
  margin:0.5rem 0.5rem 0.5rem 0;
}
</style>