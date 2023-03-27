<template>
  <h2 class='title'>Input 属性</h2>
	<pro-table :data="InputAttrData" border style="width: 100%">
		<pro-table-column prop="attrName" label="属性名" width="180" />
		<pro-table-column prop="attrInfo" label="说明" />
		<pro-table-column prop="attrType" label="类型" width="150" />
		<pro-table-column prop="attrDefault" label="默认值" width="150" />
	</pro-table>
  <h2 class='title'>Input 事件</h2>
	<pro-table :data="InputEventData" border style="width: 100%">
		<pro-table-column prop="eventName" label="事件名" width="180" />
		<pro-table-column prop="eventInfo" label="说明" />
		<pro-table-column prop="callbackParams" label="回调参数" width="250" />
	</pro-table>
</template>
<script setup lang="ts">
const InputAttrData = [
  {
    attrName: 'type',
    attrInfo: '类型，取值为:"text" | "textarea"',
    attrType: 'string',
    attrDefault:'text'
  },
  {
    attrName: 'v-model',
    attrInfo: '绑定值',
    attrType: 'string / number',
    attrDefault:''
  },
  {
    attrName: 'maxlength',
    attrInfo: '最大输入长度',
    attrType: 'string / number',
    attrDefault:''
  },
  {
    attrName: 'minlength',
    attrInfo: '原生属性，最小输入长度',
    attrType: 'number',
    attrDefault:''
  },
  {
    attrName: 'show-word-limit',
    attrInfo: '是否显示统计字数, 只在 type 为 "text" 或 "textarea" 的时候生效',
    attrType: 'boolean',
    attrDefault:'false'
  },
  {
    attrName: 'placeholder',
    attrInfo: '输入框占位文本',
    attrType: 'string',
    attrDefault:''
  },
  {
    attrName: 'clearable',
    attrInfo: '是否显示清除按钮，只有当 type 不是 textarea时生效',
    attrType: 'boolean',
    attrDefault:'false'
  },
  {
    attrName: 'formatter',
    attrInfo: '指定输入值的格式。(只有当 type 是"text"时才能工作)',
    attrType: 'Function(value: string | number) => string',
    attrDefault:''
  },
  {
    attrName: 'show-password',
    attrInfo: '是否显示切换密码图标',
    attrType: 'boolean',
    attrDefault:'false'
  },
  {
    attrName: 'disabled',
    attrInfo: '是否禁用',
    attrType: 'boolean',
    attrDefault:'false'
  },
  {
    attrName: 'size',
    attrInfo: '输入框尺寸，只在 type 不为 "textarea" 时有效，取值："large" | "default" | "small"',
    attrType: 'string',
    attrDefault:''
  },
  {
    attrName: 'prefix-icon',
    attrInfo: '自定义后缀图标',
    attrType: 'string / Component',
    attrDefault:''
  },
  {
    attrName: 'suffix-icon',
    attrInfo: '自定义后缀图标',
    attrType: 'string / Component',
    attrDefault:''
  },
  {
    attrName: 'rows',
    attrInfo: '输入框行数，仅 type 为 "textarea" 时有效',
    attrType: 'number',
    attrDefault:''
  },
  {
    attrName: 'autosize',
    attrInfo: 'textarea 高度是否自适应，仅 type 为 "textarea" 时生效。 可以接受一个对象，比如: { minRows: 2, maxRows: 6 }',
    attrType: 'boolean / object',
    attrDefault:'false'
  },
  {
    attrName: 'autocomplete',
    attrInfo: '原生 autocomplete 属性',
    attrType: 'string',
    attrDefault:'false'
  },
  {
    attrName: 'name',
    attrInfo: '等价于原生 input name 属性',
    attrType: 'string',
    attrDefault:''
  },
  {
    attrName: 'readonly',
    attrInfo: '原生  readonly 属性，是否只读',
    attrType: 'boolean',
    attrDefault:'false'
  },
  {
    attrName: 'max',
    attrInfo: '原生 max 属性，设置最大值',
    attrType: '',
    attrDefault:''
  },
  {
    attrName: 'min',
    attrInfo: '原生属性，设置最小值',
    attrType: '',
    attrDefault:''
  },
  {
    attrName: 'step',
    attrInfo: '原生属性，设置输入字段的合法数字间隔',
    attrType: '',
    attrDefault:''
  },
  {
    attrName: 'resize',
    attrInfo: '控制是否能被用户缩放，取值："none" | "both" | "horizontal" | "vertical"',
    attrType: 'boolean',
    attrDefault:'false'
  },
  {
    attrName: 'form',
    attrInfo: '原生属性',
    attrType: 'string',
    attrDefault:''
  },
  {
    attrName: 'label',
    attrInfo: '等价于原生 input aria-label 属性',
    attrType: 'string',
    attrDefault:''
  },
  {
    attrName: 'tabindex',
    attrInfo: '输入框的 tabindex',
    attrType: 'string / number',
    attrDefault:''
  },
  {
    attrName: 'validate-event',
    attrInfo: '输入时是否触发表单的校验',
    attrType: 'boolean',
    attrDefault:'true'
  },
  {
    attrName: 'input-style',
    attrInfo: 'input 元素或 textarea 元素的 style',
    attrType: 'string / object',
    attrDefault:'{}'
  }
]

const InputEventData = [
	{
		eventName: 'blur',
    eventInfo: '当选择器的输入框失去焦点时触发',
    callbackParams:'(event: FocusEvent) => void'
  },
  {
		eventName: 'focus',
    eventInfo: '当选择器的输入框获得焦点时触发',
    callbackParams:'(event: FocusEvent) => void'
  },
  {
		eventName: 'change',
    eventInfo: '仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发',
    callbackParams:'(value: string | number) => void'
  },
  {
		eventName: 'input',
    eventInfo: '在 Input 值改变时触发',
    callbackParams:'(value: string | number) => void'
  },
  {
		eventName: 'clear',
    eventInfo: '在点击由 clearable 属性生成的清空按钮时触发',
    callbackParams:'() => void'
  }
]
</script>

<style lang="scss" scoped>
.marginTop10 {
  margin-top: 10px;
  width: 100%;
}
.iconBox{
  width: 100%;
  height: 100%;
}
</style>