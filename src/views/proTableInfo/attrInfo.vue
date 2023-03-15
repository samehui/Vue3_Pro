<template>
  <h2 class='title'>Table 属性</h2>
	<pro-table :data="tableAttrData" border style="width: 100%">
		<pro-table-column prop="attrName" label="属性名" width="180" />
		<pro-table-column prop="attrInfo" label="说明" />
		<pro-table-column prop="attrType" label="类型" width="150" />
		<pro-table-column prop="attrDefault" label="默认值" width="150" />
	</pro-table>
  <h2 class='title'>Table 事件</h2>
	<pro-table :data="tableEventData" border style="width: 100%">
		<pro-table-column prop="eventName" label="事件名" width="180" />
		<pro-table-column prop="eventInfo" label="说明" />
		<pro-table-column prop="callbackParams" label="回调参数" width="250" />
	</pro-table>
  <h2 class='title'>Table 方法</h2>
	<pro-table :data="tableMethodData" border style="width: 100%">
		<pro-table-column prop="methodName" label="方法名" width="180" />
		<pro-table-column prop="methodInfo" label="说明" />
		<pro-table-column prop="callbackParams" label="回调参数" width="250" />
	</pro-table>
  <h2 class='title'>Table 插槽</h2>
	<pro-table :data="tableSloteData" border style="width: 100%">
		<pro-table-column prop="sloteName" label="插槽名" width="180" />
		<pro-table-column prop="sloteInfo" label="说明" />
	</pro-table>
  <h2 class='title'>Table-column 属性</h2>
	<pro-table :data="tableColumnAttrData" border style="width: 100%">
		<pro-table-column prop="attrName" label="属性名" width="180" />
		<pro-table-column prop="attrInfo" label="说明" />
		<pro-table-column prop="attrType" label="类型" width="150" />
		<pro-table-column prop="attrDefault" label="默认值" width="150" />
	</pro-table>
  <h2 class='title'>Table-column 插槽</h2>
	<pro-table :data="tableColumnSloteData" border style="width: 100%">
		<pro-table-column prop="sloteName" label="插槽名" width="180" />
		<pro-table-column prop="sloteInfo" label="说明" />
	</pro-table>
</template>
<script setup lang="ts">
const tableAttrData = [
  {
    attrName: 'data',
    attrInfo: '显示的数据',
    attrType: 'array',
    attrDefault:''
  },
  {
    attrName: 'height',
    attrInfo: 'Table 的高度， 默认为自动高度。 如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。',
    attrType: 'string / number',
    attrDefault:''
  },
  {
    attrName: 'max-height',
    attrInfo: 'Table 的最大高度。 合法的值为数字或者单位为 px 的高度。',
    attrType: 'string / number',
    attrDefault:''
  },
  {
    attrName: 'stripe',
    attrInfo: '是否为斑马纹 table',
    attrType: 'boolean',
    attrDefault:'false'
  },
  {
    attrName: 'border',
    attrInfo: '是否带有纵向边框',
    attrType: 'boolean',
    attrDefault:'false'
  },
  {
    attrName: 'size',
    attrInfo: 'Table 的尺寸,取值:large / default /small',
    attrType: 'string',
    attrDefault:''
  },
  {
    attrName: 'fit',
    attrInfo: '列的宽度是否自撑开',
     attrType: 'boolean',
    attrDefault:'true'
  },
  {
    attrName: 'show-header',
    attrInfo: '是否显示表头',
    attrType: 'boolean',
    attrDefault:'true'
  },
  {
    attrName: 'highlight-current-row',
    attrInfo: '是否要高亮当前行',
    attrType: 'boolean',
    attrDefault:'false'
  },
  {
    attrName: 'current-row-key',
    attrInfo: '当前行的 key，只写属性',
     attrType: 'string / number	',
    attrDefault:''
  },
  {
    attrName: 'row-class-name',
    attrInfo: '行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。',
    attrType: 'function({ row, rowIndex }) / string',
    attrDefault:''
  },
  {
    attrName: 'row-style',
    attrInfo: '行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。',
    attrType: 'function({ row, rowIndex }) / object',
    attrDefault:''
  },
  {
    attrName: 'cell-class-name',
    attrInfo: '单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。',
    attrType: 'function({ row, column, rowIndex, columnIndex }) / string',
    attrDefault:''
  },
  {
    attrName: 'cell-style',
    attrInfo: '单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。',
    attrType: 'function({ row, column, rowIndex, columnIndex }) / object',
    attrDefault:'0'
  },
  {
    attrName: 'header-row-class-name',
    attrInfo: '表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。',
    attrType: 'function({ row, rowIndex }) / string',
    attrDefault:'0'
  },
  {
    attrName: 'header-row-style',
    attrInfo: '表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。',
    attrType: 'function({ row, rowIndex }) / object',
    attrDefault:''
  },
  {
    attrName: 'header-cell-class-name',
    attrInfo: '表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。',
    attrType: 'function({ row, column, rowIndex, columnIndex }) / string',
    attrDefault:''
  },
  {
    attrName: 'header-cell-style',
    attrInfo: '表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。',
    attrType: 'function({ row, column, rowIndex, columnIndex }) / object',
    attrDefault:''
  },
  {
    attrName: 'row-key',
    attrInfo: '行数据的 Key，用来优化 Table 的渲染； 在使用reserve-selection功能与显示树形数据时，该属性是必填的。 类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。',
    attrType: 'function(row) / string',
    attrDefault:''
  },
  {
    attrName: 'empty-text',
    attrInfo: '空数据时显示的文本内容， 也可以通过 #empty 设置',
    attrType: 'string',
    attrDefault:'暂无数据'
  },
  {
    attrName: 'default-expand-all',
    attrInfo: '是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效',
    attrType: 'boolean',
    attrDefault:'false'
  },
  {
    attrName: 'expand-row-keys',
    attrInfo: '可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。',
    attrType: 'array',
    attrDefault:''
  },
  {
    attrName: 'default-sort',
    attrInfo: '默认的排序列的 prop 和顺序。 它的 prop 属性指定默认的排序的列，order 指定默认排序的顺序,取值时(order: "ascending" / "descending")',
    attrType: 'object',
    attrDefault:'如果只指定了 prop, 没有指定 order, 则默认顺序是 ascending'
  },
  {
    attrName: 'tooltip-effect',
    attrInfo: '溢出的 tooltip 的 effect,取值:dark / light',
    attrType: 'string',
    attrDefault:'dark'
  },
  {
    attrName: 'tooltip-options',
    attrInfo: '溢出 tooltip 的选项，参见下述 tooltip 组件',
    attrType: 'object',
    attrDefault:'{ enterable: true, placement: "top", showArrow: true, hideAfter: 200, popperOptions: { strategy: "fixed" } }'
  },
   {
    attrName: 'show-summary',
    attrInfo: '是否在表尾显示合计行',
    attrType: 'boolean',
    attrDefault:'false'
  },
  {
    attrName: 'sum-text',
    attrInfo: '显示摘要行第一列的文本',
    attrType: 'string',
    attrDefault:'Sum'
  },
  {
    attrName: 'summary-method',
    attrInfo: '自定义的合计计算方法',
    attrType: 'function({ columns, data })',
    attrDefault:''
  },
  {
    attrName: 'span-method',
    attrInfo: '合并行或列的计算方法',
    attrType: 'function({ row, column, rowIndex, columnIndex })',
    attrDefault:''
  },
  {
    attrName: 'select-on-indeterminate',
    attrInfo: '在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。 若为 true，则选中所有行；若为 false，则取消选择所有行',
    attrType: 'boolean',
    attrDefault:'true'
  },
  {
    attrName: 'indent',
    attrInfo: '展示树形数据时，树节点的缩进',
    attrType: 'number',
    attrDefault:'16'
  },
  {
    attrName: 'lazy',
    attrInfo: '是否懒加载子节点数据',
    attrType: 'boolean',
    attrDefault:''
  },
   {
    attrName: 'load',
    attrInfo: '加载子节点数据的函数，lazy 为 true 时生效',
    attrType: 'function(row, treeNode, resolve)',
    attrDefault:''
  },
  {
    attrName: 'tree-props',
    attrInfo: '渲染嵌套数据的配置选项',
    attrType: 'object',
    attrDefault:'{ hasChildren: "hasChildren", children: "children" }'
  },
  {
    attrName: 'table-layout',
    attrInfo: '设置表格单元、行和列的布局方式,取值:fixed / auto',
    attrType: 'string',
    attrDefault:'fixed'
  },
  {
    attrName: 'scrollbar-always-on',
    attrInfo: '总是显示滚动条',
    attrType: 'boolean',
    attrDefault:'false'
  },
  {
    attrName: 'flexible',
    attrInfo: '确保主轴的最小尺寸',
    attrType: 'boolean',
    attrDefault:'false'
  }
]

const tableEventData = [
  {
		eventName: 'select',
    eventInfo: '当用户手动勾选数据行的 Checkbox 时触发的事件',
    callbackParams:'selection, row'
	},
  {
		eventName: 'select-all',
    eventInfo: '当用户手动勾选全选 Checkbox 时触发的事件',
    callbackParams:'selection'
	},
  {
		eventName: 'selection-change',
    eventInfo: '当选择项发生变化时会触发该事件',
    callbackParams:'selection'
	},
  {
		eventName: 'cell-mouse-enter',
    eventInfo: '当单元格 hover 进入时会触发该事件',
    callbackParams:'row, column, cell, event'
  },
  {
		eventName: 'cell-mouse-leave',
    eventInfo: '当单元格 hover 退出时会触发该事件',
    callbackParams:'row, column, cell, event'
  },
  {
		eventName: 'cell-click',
    eventInfo: '当某个单元格被点击时会触发该事件',
    callbackParams:'row, column, cell, event'
  },
  {
		eventName: 'cell-dblclick',
    eventInfo: '当某个单元格被双击击时会触发该事件',
    callbackParams:'row, column, cell, event'
  },
  {
		eventName: 'cell-contextmenu',
    eventInfo: '当某个单元格被鼠标右键点击时会触发该事件',
    callbackParams:'row, column, cell, event'
	},
  {
		eventName: 'row-click',
    eventInfo: '当某一行被点击时会触发该事件',
    callbackParams:'row, column, event'
	},
  {
		eventName: 'row-contextmenu',
    eventInfo: '当某一行被鼠标右键点击时会触发该事件',
    callbackParams:'row, column, event'
	},
  {
		eventName: 'row-dblclick',
    eventInfo: '当某一行被双击时会触发该事件',
    callbackParams:'row, column, event'
  },
  {
		eventName: 'header-click',
    eventInfo: '当某一列的表头被点击时会触发该事件',
    callbackParams:'column, event'
  },
  {
		eventName: 'header-contextmenu',
    eventInfo: '当某个单元格被点击时会触发该事件',
    callbackParams:'column, event'
  },
  {
		eventName: 'sort-change',
    eventInfo: '当表格的排序条件发生变化的时候会触发该事件',
    callbackParams:'{ column, prop, order }'
  },
  {
		eventName: 'filter-change',
    eventInfo: 'column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件',
    callbackParams:'filters'
	},
  {
		eventName: 'current-change',
    eventInfo: '当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性',
    callbackParams:'currentRow, oldCurrentRow'
	},
  {
		eventName: 'header-dragend',
    eventInfo: '当拖动表头改变了列的宽度的时候会触发该事件',
    callbackParams:'newWidth, oldWidth, column, event'
	},
  {
		eventName: 'expand-change',
    eventInfo: '当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）',
    callbackParams:'row, (expandedRows | expanded)'
  }
]

const tableMethodData = [
  {
		methodName: 'clearSelection',
    methodInfo: '用于多选表格，清空用户的选择',
    callbackParams:''
  },
  {
		methodName: 'getSelectionRows',
    methodInfo: '返回当前选中的行',
    callbackParams:''
	},
  {
		methodName: 'toggleRowSelection',
    methodInfo: '用于多选表格，切换某一行的选中状态， 如果使用了第二个参数，则可直接设置这一行选中与否',
    callbackParams:'row, selected'
  },
  {
		methodName: 'toggleAllSelection',
    methodInfo: '用于多选表格，切换全选和全不选',
    callbackParams:''
  },
  {
		methodName: 'toggleRowExpansion',
    methodInfo: '用于可扩展的表格或树表格，如果某行被扩展，则切换。 使用第二个参数，您可以直接设置该行应该被扩展或折叠。',
    callbackParams:'row, expanded'
  },
  {
		methodName: 'setCurrentRow',
    methodInfo: '用于单选表格，设定某一行为选中行， 如果调用时不加参数，则会取消目前高亮行的选中状态。',
    callbackParams:'row'
  },
  {
		methodName: 'clearSort',
    methodInfo: '用于清空排序条件，数据会恢复成未排序的状态	',
    callbackParams:''
  },
  {
		methodName: 'clearFilter',
    methodInfo: '传入由columnKey 组成的数组以清除指定列的过滤条件。 如果没有参数，清除所有过滤器',
    callbackParams:'columnKeys'
  },
  {
		methodName: 'doLayout',
    methodInfo: '对 Table 进行重新布局。 当表格可见性变化时，您可能需要调用此方法以获得正确的布局',
    callbackParams:''
  },
  {
		methodName: 'sort',
    methodInfo: '手动排序表格。 参数 prop 属性指定排序列，order 指定排序顺序。',
    callbackParams:'prop: string, order: string'
  },
  {
		methodName: 'scrollTo',
    methodInfo: '滚动到一组特定坐标',
    callbackParams:'(options: ScrollToOptions | number, yCoord?: number)'
  },
  {
		methodName: 'setScrollTop',
    methodInfo: '设置垂直滚动位置',
    callbackParams:'top'
  },
   {
		methodName: 'setScrollLeft',
    methodInfo: '设置水平滚动位置',
    callbackParams:'left'
	}
]

const tableSloteData = [
  {
		sloteName: 'default',
    sloteInfo: '自定义默认内容',
	},
	{
		sloteName: 'append',
    sloteInfo: '插入至表格最后一行之后的内容， 如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。 若表格有合计行，该 slot 会位于合计行之上。',
  },
  {
		sloteName: 'empty',
    sloteInfo: '当数据为空时自定义的内容',
	}
]

const tableColumnAttrData = [
  {
    attrName: 'type',
    attrInfo: '对应列的类型。 如果设置了selection则显示多选框； 如果设置了 index 则显示该行的索引（从 1 开始计算）； 如果设置了 expand 则显示为一个可展开的按钮,取值:selection / index / expand',
    attrType: 'string',
    attrDefault:''
  },
  {
    attrName: 'index',
    attrInfo: '如果设置了 type=index，可以通过传递 index 属性来自定义索引',
    attrType: 'number / function(index)',
    attrDefault:''
  },
  {
    attrName: 'label',
    attrInfo: '显示的标题',
    attrType: 'string',
    attrDefault:''
  },
  {
    attrName: 'column-key',
    attrInfo: 'column 的 key， column 的 key， 如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件',
    attrType: 'string',
    attrDefault:''
  },
  {
    attrName: 'prop',
    attrInfo: '字段名称 对应列内容的字段名， 也可以使用 property属性',
    attrType: 'string',
    attrDefault:''
  },
  {
    attrName: 'width',
    attrInfo: '对应列的宽度',
    attrType: 'string / number',
    attrDefault:''
  },
  {
    attrName: 'min-width',
    attrInfo: '对应列的最小宽度， 对应列的最小宽度， 与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列',
    attrType: 'string / number',
    attrDefault:''
  },
  {
    attrName: 'fixed',
    attrInfo: '列是否固定在左侧或者右侧。 true 表示固定在左侧,取值:true / "left" / "right"',
    attrType: 'string / boolean',
    attrDefault:''
  },
  {
    attrName: 'render-header',
    attrInfo: '列标题 Label 区域渲染使用的 Function',
    attrType: 'function({ column, $index })',
    attrDefault:''
  },
  {
    attrName: 'sortable',
    attrInfo: '对应列是否可以排序， 如果设置为 "custom"，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件',
    attrType: 'boolean / string',
    attrDefault:'false'
  },
  {
    attrName: 'sort-method',
    attrInfo: '指定数据按照哪个属性进行排序，仅当sortable设置为true的时候有效。 应该如同 Array.sort 那样返回一个 Number',
    attrType: 'function(a, b)',
    attrDefault:''
  },
  {
    attrName: 'sort-by',
    attrInfo: '指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。 如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推',
    attrType: 'function(row, index) / string / array',
    attrDefault:''
  },
  {
    attrName: 'sort-orders',
    attrInfo: '数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。 需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序,数组中的元素需为以下三者之一：ascending 表示升序，descending 表示降序，null 表示还原为原始顺序',
    attrType: 'array',
    attrDefault:'["ascending", "descending", null]'
  },
  {
    attrName: 'resizable',
    attrInfo: '对应列是否可以通过拖动改变宽度（需要在 pro-table 上设置 border 属性为真）',
    attrType: 'boolean',
    attrDefault:'true'
  },
  {
    attrName: 'formatter',
    attrInfo: '用来格式化内容',
    attrType: 'function(row, column, cellValue, index)',
    attrDefault:''
  },
  {
    attrName: 'show-overflow-tooltip',
    attrInfo: '当内容过长被隐藏时显示 tooltip',
    attrType: 'boolean',
    attrDefault:''
  },
  {
    attrName: 'align',
    attrInfo: '对齐方式,取值:left / center / right',
    attrType: 'string',
    attrDefault:'left'
  },
  {
    attrName: 'header-align',
    attrInfo: '表头对齐方式， 若不设置该项，则使用表格的对齐方式,取值:left / center / right',
    attrType: 'string',
    attrDefault:''
  },
  {
    attrName: 'class-name',
    attrInfo: '列的 className',
    attrType: 'string',
    attrDefault:''
  },
  {
    attrName: 'label-class-name	',
    attrInfo: '当前列标题的自定义类名',
    attrType: 'string',
    attrDefault:''
  },
  {
    attrName: 'selectable',
    attrInfo: '仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选',
    attrType: 'function(row, index)',
    attrDefault:''
  },
  {
    attrName: 'reserve-selection',
    attrInfo: '仅对  type=selection 的列有效， 请注意， 需指定 row-key 来让这个功能生效。',
    attrType: 'boolean',
    attrDefault:'false'
  },
  {
    attrName: 'filters',
    attrInfo: '数据过滤的选项， 数组格式，数组中的元素需要有 text 和 value 属性。 数组中的每个元素都需要有 text 和 value 属性。',
    attrType: 'Array<{text: string, value: string}>',
    attrDefault:''
  },
  {
    attrName: 'filter-placement	',
    attrInfo: '过滤弹出框的定位性,取值与 Tooltip 的 placement 属性相同',
    attrType: 'string',
    attrDefault:''
  },
  {
    attrName: 'filter-multiple',
    attrInfo: '数据过滤的选项是否多选',
    attrType: 'boolean',
    attrDefault:'true'
  },
  {
    attrName: 'filter-method',
    attrInfo: '数据过滤使用的方法， 如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。',
    attrType: 'function(value, row, column)',
    attrDefault:''
  },
  {
    attrName: 'filtered-value',
    attrInfo: '选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。',
    attrType: 'array',
    attrDefault:''
  }
]

const tableColumnSloteData = [
  {
		sloteName: 'default',
    sloteInfo: '自定义列的内容 作用域参数为 { row, column, $index }',
	},
	{
		sloteName: 'header',
    sloteInfo: '自定义表头的内容， 作用域参数为 { column, $index }',
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