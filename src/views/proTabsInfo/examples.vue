<template>
  <h2 class='title'>基础用法</h2> 
	<p>Tabs 组件提供了选项卡功能， 默认选中第一个标签页，你也可以通过 value 属性来指定当前选中的标签页。</p>
  <pro-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <pro-tab-pane label="User" name="first">User</pro-tab-pane>
    <pro-tab-pane label="Config" name="second">Config</pro-tab-pane>
    <pro-tab-pane label="Role" name="third">Role</pro-tab-pane>
    <pro-tab-pane label="Task" name="fourth">Task</pro-tab-pane>
  </pro-tabs>
<firstCode/>

  <h2 class='title'>标签风格</h2> 
	<p>只需要设置 type 属性为 card或border-card 就可以改变为标签风格。</p>
  <pro-tabs type="card" class="demo-tabs">
    <pro-tab-pane label="User">User</pro-tab-pane>
    <pro-tab-pane label="Config">Config</pro-tab-pane>
    <pro-tab-pane label="Role">Role</pro-tab-pane>
    <pro-tab-pane label="Task">Task</pro-tab-pane>
  </pro-tabs>
  <pro-tabs type="border-card" class="demo-tabs">
    <pro-tab-pane label="User">
      <template #label>
        <span class="custom-tabs-label">
          <pro-icon icon="calendar"></pro-icon>
          <span>Route</span>
        </span>
      </template>
      User
    </pro-tab-pane>
    <pro-tab-pane label="Config">Config</pro-tab-pane>
    <pro-tab-pane label="Role">Role</pro-tab-pane>
    <pro-tab-pane label="Task">Task</pro-tab-pane>
  </pro-tabs>
<secCode/>

  <h2 class='title'>标签位置的设置</h2> 
	<p>标签一共有四个方向的设置 tabPosition="left|right|top|bottom"</p>
  <pro-row class="my-4">
    <pro-button @click="tabPosition = 'top'">top</pro-button>
    <pro-button @click="tabPosition = 'right'">right</pro-button>
    <pro-button @click="tabPosition = 'bottom'">bottom</pro-button>
    <pro-button @click="tabPosition = 'left'">left</pro-button>
  </pro-row>
  <pro-tabs :tab-position="tabPosition" style="height: 200px" class="demo-tabs">
    <pro-tab-pane label="User">User</pro-tab-pane>
    <pro-tab-pane label="Config">Config</pro-tab-pane>
    <pro-tab-pane label="Role">Role</pro-tab-pane>
    <pro-tab-pane label="Task">Task</pro-tab-pane>
  </pro-tabs>
<thirdCode/>

  <h2 class='title'>动态增减标签页</h2> 
	<p>增减标签页按钮只能在选项卡样式的标签页下使用</p>
  <pro-tabs
    v-model="editableTabsValue"
    type="card"
    editable
    class="demo-tabs"
    @edit="handleTabsEdit"
  >
    <pro-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </pro-tab-pane>
  </pro-tabs>
  <p>自定义增加标签页触发器</p>
  <pro-row class="my-4">
    <pro-button @click="addTab">增加标签</pro-button>
  </pro-row>
  <pro-tabs
    v-model="editableTabsValue1"
    type="card"
    class="demo-tabs"
    closable
    @tab-remove="removeTab"
  >
    <pro-tab-pane
      v-for="item in editableTabs1"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </pro-tab-pane>
  </pro-tabs>
<fourthCode/>
</template>

<script lang="ts" setup>
  import firstCode from "./code/firstCode.vue"
  import secCode from "./code/secCode.vue"
  import thirdCode from "./code/thirdCode.vue"
  import fourthCode from "./code/fourthCode.vue"

  import { ref } from 'vue'
  import type { TabsPaneContext } from 'element-plus'
  let tabIndex = 2
  let tabIndex1 = 2
  const activeName = ref('first')
  const tabPosition = ref('left')
  const editableTabsValue = ref('2')
  const editableTabsValue1 = ref('2')  
  const editableTabs = ref([
    {
      title: 'Tab 1',
      name: '1',
      content: 'Tab 1 content',
    },
    {
      title: 'Tab 2',
      name: '2',
      content: 'Tab 2 content',
    },
  ])
  const editableTabs1 = ref([
    {
      title: 'Tab 1',
      name: '1',
      content: 'Tab 1 content',
    },
    {
      title: 'Tab 2',
      name: '2',
      content: 'Tab 2 content',
    },
  ])

  const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
  }

  const handleTabsEdit = (targetName: string, action: 'remove' | 'add') => {
    if (action === 'add') {
      const newTabName = `${++tabIndex}`
      editableTabs.value.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content',
      })
      editableTabsValue.value = newTabName
    } else if (action === 'remove') {
      const tabs = editableTabs.value
      let activeName = editableTabsValue.value
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      editableTabsValue.value = activeName
      editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
    }
  }

  const addTab = () => {
    const newTabName = `${++tabIndex1}`
    editableTabs1.value.push({
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content',
    })
    editableTabsValue1.value = newTabName
  }

  const removeTab = (targetName: string) => {
    const tabs = editableTabs1.value
    let activeName = editableTabsValue1.value
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }

    editableTabsValue1.value = activeName
    editableTabs1.value = tabs.filter((tab) => tab.name !== targetName)
  }
</script>

<style lang="scss" scoped>
.demo-tabs >::v-deep .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>