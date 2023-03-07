<template>
  <h2 class='title'>基础用法</h2> 
	<p>使用 type、plain、round、link和circle 来定义按钮的样式。</p>
  <pro-row class="mb-4">
    <pro-button>Default</pro-button>
    <pro-button type="primary">Primary</pro-button>
    <pro-button type="success">Success</pro-button>
    <pro-button type="info">Info</pro-button>
    <pro-button type="warning">Warning</pro-button>
    <pro-button type="danger">Danger</pro-button>
  </pro-row>

  <pro-row class="mb-4">
    <pro-button plain>Plain</pro-button>
    <pro-button type="primary" plain>Primary</pro-button>
    <pro-button type="success" plain>Success</pro-button>
    <pro-button type="info" plain>Info</pro-button>
    <pro-button type="warning" plain>Warning</pro-button>
    <pro-button type="danger" plain>Danger</pro-button>
  </pro-row>

  <pro-row class="mb-4">
    <pro-button round>Round</pro-button>
    <pro-button type="primary" round>Primary</pro-button>
    <pro-button type="success" round>Success</pro-button>
    <pro-button type="info" round>Info</pro-button>
    <pro-button type="warning" round>Warning</pro-button>
    <pro-button type="danger" round>Danger</pro-button>
  </pro-row>

	<pro-row class="mb-4">
		<pro-button link>link</pro-button>
		<pro-button type="primary" link>Primary</pro-button>
		<pro-button type="success" link>Success</pro-button>
		<pro-button type="info" link>Info</pro-button>
		<pro-button type="warning" link>Warning</pro-button>
		<pro-button type="danger" link>Danger</pro-button>
	</pro-row>

  <pro-row class="mb-4">
    <pro-button icon="Search" circle />
    <pro-button type="primary" icon="Edit" circle />
    <pro-button type="success" icon="Check" circle />
    <pro-button type="info" icon="Message" circle />
    <pro-button type="warning" icon="Star" circle />
    <pro-button type="danger" icon="Delete" circle />
  </pro-row>
<firstCode/>

	<h2 class='title'>禁用状态</h2> 
	<p>你可以使用 disabled 属性来定义按钮是否被禁用。</p>
	<p>使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。</p>
	<pro-row class="mb-4">
		<pro-button disabled>Default</pro-button>
		<pro-button type="primary" disabled>Primary</pro-button>
		<pro-button type="success" disabled>Success</pro-button>
		<pro-button type="info" disabled>Info</pro-button>
		<pro-button type="warning" disabled>Warning</pro-button>
		<pro-button type="danger" disabled>Danger</pro-button>
	</pro-row>
	<pro-row class="mb-4">
		<pro-button plain disabled>Plain</pro-button>
		<pro-button type="primary" plain disabled>Primary</pro-button>
		<pro-button type="success" plain disabled>Success</pro-button>
		<pro-button type="info" plain disabled>Info</pro-button>
		<pro-button type="warning" plain disabled>Warning</pro-button>
		<pro-button type="danger" plain disabled>Danger</pro-button>
	</pro-row>
	<pro-row class="mb-4">
		<pro-button link disabled>link</pro-button>
		<pro-button type="primary" link disabled>Primary</pro-button>
		<pro-button type="success" link disabled>Success</pro-button>
		<pro-button type="info" link disabled>Info</pro-button>
		<pro-button type="warning" link disabled>Warning</pro-button>
		<pro-button type="danger" link disabled>Danger</pro-button>
	</pro-row>
<secCode/>

	<h2 class='title'>文字按钮</h2> 
	<pro-row class="mb-4">
		<pro-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
      >
			{{ button.text }}
		</pro-button>
	</pro-row>
	<pro-row class="mb-4">
		<pro-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
			bg
      >
			{{ button.text }}
		</pro-button>
	</pro-row>
	<pro-row class="mb-4">
		<pro-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
			disabled
      >
			{{ button.text }}
		</pro-button>
	</pro-row>
<thirdCode/>

	<h2 class='title'>加载状态按钮</h2> 
	<p>点击按钮来加载数据，并向用户反馈加载状态。</p>
	<p>通过设置 loading 属性为 true 来显示加载中状态。</p>
	<pro-row class="my-4">
		<pro-button type="primary" loading>Loading</pro-button>
		<pro-button type="primary" loading-icon="Eleme" loading>Loading</pro-button>
		<pro-button type="primary" loading>
			<template #loading>
				<div class="custom-loading">
					<svg class="circular" viewBox="-10, -10, 50, 50">
						<path
							class="path"
							d="
							M 30 15
							L 28 17
							M 25.61 25.61
							A 15 15, 0, 0, 1, 15 30
							A 15 15, 0, 1, 1, 27.99 7.5
							L 15 15
						"
							style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"
						/>
					</svg>
				</div>
			</template>
			Loading
		</pro-button>
	</pro-row>
<fourthCode/>

	<h2 class='title'>调整尺寸</h2> 
	<p>除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。</p>
	<p>使用 size 属性额外配置尺寸，可使用 large和small两种值。</p>
	<pro-row class="my-4">
    <pro-button size="large">Large</pro-button>
    <pro-button>Default</pro-button>
    <pro-button size="small">Small</pro-button>
    <pro-button size="large" icon="Search">Search</pro-button>
    <pro-button icon="Search">Search</pro-button>
    <pro-button size="small" icon="Search">Search</pro-button>
  </pro-row>
  <pro-row class="my-4">
    <pro-button size="large" round>Large</pro-button>
    <pro-button round>Default</pro-button>
    <pro-button size="small" round>Small</pro-button>
    <pro-button size="large" icon="Search" round>Search</pro-button>
    <pro-button icon="Search" round>Search</pro-button>
    <pro-button size="small" icon="Search" round>Search</pro-button>
  </pro-row>
  <pro-row class="my-4">
    <pro-button icon="Search" size="large" circle />
    <pro-button icon="Search" circle />
    <pro-button icon="Search" size="small" circle />
  </pro-row>
<fifthCode/>

	<h2 class='title'>自定义颜色</h2> 
	<p>您可以自定义按钮颜色。</p>
	<p>我们将自动计算 hover 和 active 颜色。</p>
	<pro-row class="my-4">
    <pro-button color="#626aef" >Default</pro-button>
    <pro-button color="#626aef" plain>Plain</pro-button>
    <pro-button color="#626aef" disabled>Disabled</pro-button>
    <pro-button color="#626aef" disabled plain>Disabled Plain</pro-button>
  </pro-row>
<sixthCode/>
</template>

<script setup lang="ts">
import firstCode from "./code/firstCode.vue"
import secCode from "./code/secCode.vue"
import thirdCode from "./code/thirdCode.vue"
import fourthCode from "./code/fourthCode.vue"
import fifthCode from "./code/fifthCode.vue"
import sixthCode from "./code/sixthCode.vue"

const buttons = [
  { type: '', text: 'plain' },
  { type: 'primary', text: 'primary' },
  { type: 'success', text: 'success' },
  { type: 'info', text: 'info' },
  { type: 'warning', text: 'warning' },
  { type: 'danger', text: 'danger' },
] as const
</script>

<style lang="scss" scoped>
.custom-loading .circular {
  margin-right: 6px;
  width: 18px;
  height: 18px;
  animation: loading-rotate 2s linear infinite;
}
.custom-loading .circular .path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: var(--el-button-text-color);
  stroke-linecap: round;
}
</style>