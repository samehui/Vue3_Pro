<template>
<pro-collapse>
<pro-collapse-item title="代码" name="1">
	
<pre><textarea class="codeText" disabled rows="100" v-pre>
<template>
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
</template>

<script setup lang="ts">
  import { ref } from 'vue'
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
