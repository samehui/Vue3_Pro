<template>
  <h2 class='title'>基础用法</h2> 
  <p>当 pro-table 元素中注入 data 对象数组后，在 pro-table-column 中用 prop 属性来对应对象中的键名即可填入数据，用 label 属性来定义表格的列名。 可以使用 width 属性来定义列宽。</p>
  <pro-table :data="tableData" style="width: 100%">
    <pro-table-column prop="date" label="Date" width="180" />
    <pro-table-column prop="name" label="Name" width="180" />
    <pro-table-column prop="address" label="Address" />
  </pro-table>
<component :is="components.firstCode"/>

  <h2 class='title'>带斑马纹表格</h2> 
  <p>stripe 可以创建带斑马纹的表格。 如果 true, 表格将会带有斑马纹。</p>
  <pro-table :data="tableData" stripe style="width: 100%">
    <pro-table-column prop="date" label="Date" width="180" />
    <pro-table-column prop="name" label="Name" width="180" />
    <pro-table-column prop="address" label="Address" />
  </pro-table>
<component :is="components.secondCode"/>

  <h2 class='title'>带边框表格</h2> 
  <p>默认情况下，Table 组件是不具有竖直方向的边框的， 如果需要，可以使用 border 属性，把该属性设置为 true 即可启用。</p>
  <pro-table :data="tableData" border style="width: 100%">
    <pro-table-column prop="date" label="Date" width="180" />
    <pro-table-column prop="name" label="Name" width="180" />
    <pro-table-column prop="address" label="Address" />
  </pro-table>
<component :is="components.thirdCode"/>

  <h2 class='title'>带状态表格</h2> 
  <p>可以通过指定 Table 组件的 row-class-name 属性来为 Table 中的某一行添加 class， 这样就可以自定义每一行的样式了。</p>
  <pro-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName"
  >
    <pro-table-column prop="date" label="Date" width="180" />
    <pro-table-column prop="name" label="Name" width="180" />
    <pro-table-column prop="address" label="Address" />
  </pro-table>
<component :is="components.fourthCode"/>

  <h2 class='title'>固定表头</h2> 
  <p>只要在 pro-table 元素中定义了 height 属性，即可实现固定表头的表格，而不需要额外的代码。</p>
  <pro-table :data="tableData1" height="250" style="width: 100%">
    <pro-table-column prop="date" label="Date" width="180" />
    <pro-table-column prop="name" label="Name" width="180" />
    <pro-table-column prop="address" label="Address" />
  </pro-table>
<component :is="components.fifthCode"/>

  <h2 class='title'>固定列</h2> 
  <p>固定列需要使用 fixed 属性，它接受 Boolean 值。 如果为 true, 列将被左侧固定. 它还接受传入字符串，left 或 right，表示左边固定还是右边固定。</p>
  <pro-table :data="tableData2" style="width: 100%">
    <pro-table-column fixed prop="date" label="Date" width="150" />
    <pro-table-column prop="name" label="Name" width="120" />
    <pro-table-column prop="state" label="State" width="120" />
    <pro-table-column prop="city" label="City" width="120" />
    <pro-table-column prop="address" label="Address" width="600" />
    <pro-table-column prop="zip" label="Zip" width="120" />
    <pro-table-column fixed="right" label="Operations" width="120">
      <template #default>
        <pro-button link type="primary" size="small" @click="handleClick"
          >Detail</pro-button
        >
        <pro-button link type="primary" size="small">Edit</pro-button>
      </template>
    </pro-table-column>
  </pro-table>
<component :is="components.sixthCode"/>

  <h2 class='title'>多级表头</h2> 
  <p>只需要将el-table-column 放置于el-table-column 中，你可以实现组头。</p>
  <pro-table :data="tableData3" style="width: 100%">
    <pro-table-column prop="date" label="Date" width="150" />
    <pro-table-column label="Delivery Info">
      <pro-table-column prop="name" label="Name" width="120" />
      <pro-table-column label="Address Info">
        <pro-table-column prop="state" label="State" width="120" />
        <pro-table-column prop="city" label="City" width="120" />
        <pro-table-column prop="address" label="Address" />
        <pro-table-column prop="zip" label="Zip" width="120" />
      </pro-table-column>
    </pro-table-column>
  </pro-table>
<component :is="components.seventhCode"/>

  <h2 class='title'>单选</h2> 
  <p>Table 组件提供了单选的支持， 只需要配置 highlight-current-row 属性即可实现单选。 之后由 current-change 事件来管理选中时触发的事件，它会传入 currentRow，oldCurrentRow。 如果需要显示索引，可以增加一列 pro-table-column，设置 type 属性为 index 即可显示从 1 开始的索引号。</p>
  <pro-table
    ref="singleTableRef"
    :data="tableData"
    highlight-current-row
    style="width: 100%"
    @current-change="handleCurrentChange"
  >
    <pro-table-column type="index" width="50" />
    <pro-table-column property="date" label="Date" width="120" />
    <pro-table-column property="name" label="Name" width="120" />
    <pro-table-column property="address" label="Address" />
  </pro-table>
  <div style="margin-top: 20px">
    <pro-button @click="setCurrent(tableData[1])">选中第二行</pro-button>
    <pro-button @click="setCurrent()">清空选中行</pro-button>
  </div>
<component :is="components.eighthCode"/>

  <h2 class='title'>多选</h2> 
  <p>实现多选非常简单: 手动添加一个 pro-table-column，设 type 属性为 selection 即可； 除了多选，这里还使用到了 show-overflow-tooltip属性。 默认情况下，如果单元格内容过长，会占用多行显示。 若需要单行显示可以使用 show-overflow-tooltip 属性，它接受一个 Boolean， 为 true 时多余的内容会在 hover 时以 tooltip 的形式显示出来。</p>
  <pro-table
    ref="multipleTableRef"
    :data="tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <pro-table-column type="selection" width="55" />
    <pro-table-column label="Date" width="120">
      <template #default="scope">{{ scope.row.date }}</template>
    </pro-table-column>
    <pro-table-column property="name" label="Name" width="120" />
    <pro-table-column property="address" label="Address" show-overflow-tooltip />
  </pro-table>
  <div style="margin-top: 20px">
    <pro-button @click="toggleSelection([tableData[1], tableData[2]])"
      >选中或取消第二行和第三行</pro-button
    >
    <pro-button @click="toggleSelection()">清除选中</pro-button>
  </div>
<component :is="components.ninthCode"/>

  <h2 class='title'>筛选</h2> 
  <p>在列中设置 filters 和 filter-method 属性即可开启该列的筛选， filters 是一个数组，filter-method 是一个方法，它用于决定某些数据是否显示， 会传入三个参数：value, row 和 column。</p>
  <pro-row class="my-4">
    <pro-button @click="resetDateFilter">重置date列筛选条件</pro-button>
    <pro-button @click="clearFilter">重置所有列筛选条件</pro-button>
  </pro-row>
  <pro-table ref="tableRef" row-key="date" :data="tableData4" style="width: 100%">
    <pro-table-column
      prop="date"
      label="Date"
      sortable
      width="180"
      column-key="date"
      :filters="[
        { text: '2016-05-01', value: '2016-05-01' },
        { text: '2016-05-02', value: '2016-05-02' },
        { text: '2016-05-03', value: '2016-05-03' },
        { text: '2016-05-04', value: '2016-05-04' },
      ]"
      :filter-method="filterHandler"
    />
    <pro-table-column prop="name" label="Name" width="180" />
    <pro-table-column prop="address" label="Address" :formatter="formatter" />

    <pro-table-column
      prop="tag"
      label="Tag"
      width="100"
      :filters="[
        { text: 'Home', value: 'Home' },
        { text: 'Office', value: 'Office' },
      ]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
    >
      <template #default="scope">
        <pro-button :type="scope.row.tag === 'Home' ? '' : 'success'" disabled>{{ scope.row.tag }}</pro-button>
      </template>
    </pro-table-column>
  </pro-table>
<component :is="components.tenthCode"/>

  <h2 class='title'>自定义列模板</h2> 
  <p>通过 slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据，用法参考 demo。通过给 type=index 的列传入 index 属性，可以自定义索引。 该属性传入数字时，将作为索引的起始值。 也可以传入一个方法，它提供当前行的行号（从 0 开始）作为参数，返回值将作为索引展示。</p>
  <pro-table :data="filterTableData" style="width: 100%">
    <pro-table-column type="index" :index="indexMethod" />
    <pro-table-column label="Date">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <pro-icon icon='timer'></pro-icon>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </div>
      </template>
    </pro-table-column>
    <pro-table-column label="Name">
      <template #default="scope">
        <pro-popover effect="light" trigger="hover" placement="top" width="auto">
          <template #default>
            <div>name: {{ scope.row.name }}</div>
            <div>address: {{ scope.row.address }}</div>
          </template>
          <template #reference>
            <pro-tag>{{ scope.row.name }}</pro-tag>
          </template>
        </pro-popover>
      </template>
    </pro-table-column>
    <pro-table-column align="right">
      <template #header>
        <pro-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <pro-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</pro-button>
        <pro-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >
            Delete
        </pro-button>
      </template>
    </pro-table-column>
  </pro-table>
<component :is="components.eleventhCode"/>

  <h2 class='title'>展开行</h2> 
  <p>通过设置 type="expand" 和 slot 可以开启展开行功能， pro-table-column 的模板会被渲染成为展开行的内容，展开行可访问的属性与使用自定义列模板时的 slot 相同。</p>
  <pro-table :data="tableData5"  style="width: 100%">
    <pro-table-column type="expand">
      <template #default="props">
        <div m="4">
          <p m="t-0 b-2">State: {{ props.row.state }}</p>
          <p m="t-0 b-2">City: {{ props.row.city }}</p>
          <p m="t-0 b-2">Address: {{ props.row.address }}</p>
          <p m="t-0 b-2">Zip: {{ props.row.zip }}</p>
          <h3>Family</h3>
          <pro-table :data="props.row.family" >
            <pro-table-column label="Name" prop="name" />
            <pro-table-column label="State" prop="state" />
            <pro-table-column label="City" prop="city" />
            <pro-table-column label="Address" prop="address" />
            <pro-table-column label="Zip" prop="zip" />
          </pro-table>
        </div>
      </template>
    </pro-table-column>
    <pro-table-column label="Date" prop="date" />
    <pro-table-column label="Name" prop="name" />
  </pro-table>
<component :is="components.twelfthCode"/>

  <h2 class='title'>树形数据与懒加载</h2> 
  <p>支持树类型的数据的显示。 当 row 中包含 children 字段时，被视为树形数据。 渲染嵌套数据需要 prop 的 row-key。 此外，子行数据可以异步加载。 设置 Table 的lazy属性为 true 与加载函数 load 。 通过指定 row 中的hasChildren字段来指定哪些行是包含子节点。 children 与hasChildren都可以通过 tree-props 配置。</p>
  <pro-table
    :data="tableData6"
    style="width: 100%; margin-bottom: 20px"
    row-key="id"
    border
    default-expand-all
  >
    <pro-table-column prop="date" label="Date" sortable />
    <pro-table-column prop="name" label="Name" sortable />
    <pro-table-column prop="address" label="Address" sortable />
  </pro-table>

  <pro-table
    :data="tableData7"
    style="width: 100%"
    row-key="id"
    border
    lazy
    :load="load"
    :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
  >
    <pro-table-column prop="date" label="Date" />
    <pro-table-column prop="name" label="Name" />
    <pro-table-column prop="address" label="Address" />
  </pro-table>
<component :is="components.thirteenth"/>

  <h2 class='title'>表尾合计行</h2> 
  <p>将 show-summary 设置为true就会在表格尾部展示合计行。 默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过sum-text配置），其余列会将本列所有数值进行求合操作，并显示出来。 当然，你也可以定义自己的合计逻辑。 使用 summary-method 并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中， 具体可以参考本例中的第二个表格。</p>
  <pro-table :data="tableData8" border show-summary style="width: 100%">
    <pro-table-column prop="id" label="ID" width="180" />
    <pro-table-column prop="name" label="Name" />
    <pro-table-column prop="amount1" sortable label="Amount 1" />
    <pro-table-column prop="amount2" sortable label="Amount 2" />
    <pro-table-column prop="amount3" sortable label="Amount 3" />
  </pro-table>

  <pro-table
    :data="tableData8"
    border
    height="200"
    :summary-method="getSummaries"
    show-summary
    style="width: 100%; margin-top: 20px"
  >
    <pro-table-column prop="id" label="ID" width="180" />
    <pro-table-column prop="name" label="Name" />
    <pro-table-column prop="amount1" label="Cost 1 ($)" />
    <pro-table-column prop="amount2" label="Cost 2 ($)" />
    <pro-table-column prop="amount3" label="Cost 3 ($)" />
  </pro-table>
<component :is="components.fourteenthCode"/>

  <h2 class='title'>合并行或列</h2> 
  <p>将 show-summary 设置为true就会在表格尾部展示合计行。 默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过sum-text配置），其余列会将本列所有数值进行求合操作，并显示出来。 当然，你也可以定义自己的合计逻辑。 使用 summary-method 并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中， 具体可以参考本例中的第二个表格。</p>
  <pro-table
    :data="tableData8"
    :span-method="arraySpanMethod"
    border
    style="width: 100%"
  >
    <pro-table-column prop="id" label="ID" width="180" />
    <pro-table-column prop="name" label="Name" />
    <pro-table-column prop="amount1" sortable label="Amount 1" />
    <pro-table-column prop="amount2" sortable label="Amount 2" />
    <pro-table-column prop="amount3" sortable label="Amount 3" />
  </pro-table>

  <pro-table
    :data="tableData8"
    :span-method="objectSpanMethod"
    border
    style="width: 100%; margin-top: 20px"
  >
    <pro-table-column prop="id" label="ID" width="180" />
    <pro-table-column prop="name" label="Name" />
    <pro-table-column prop="amount1" label="Amount 1" />
    <pro-table-column prop="amount2" label="Amount 2" />
    <pro-table-column prop="amount3" label="Amount 3" />
  </pro-table>
<component :is="components.fifteenthCode"/>
</template>

<script lang="ts" setup>
  import { ref, shallowReactive, computed} from 'vue'
  import { ElTable } from 'element-plus'
  import type { TableColumnCtx } from 'element-plus'


  //批量引入组件
  const importFile = import.meta.glob('./code/*.vue') 
  const components:any = shallowReactive({})
  Object.keys(importFile).forEach((item) => {
    importFile[item]().then((mod)=>{
      components[item.replace(/\.\/code\/(.*).vue/,'$1')] = mod.default    
    })
  });

  interface User {
    id?: number
    date: string
    name: string
    address: string
    hasChildren?: boolean
    children?: User[]
    amount1?: string
    amount2?: string
    amount3?: number
  }
  interface SummaryMethodProps<T = User> {
    columns: TableColumnCtx<T>[]
    data: T[]
  }
  interface SpanMethodProps<T = User> {
    row: User
    column: TableColumnCtx<User>
    rowIndex: number
    columnIndex: number
  }

  const tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'John',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Morgan',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Jessy',
      address: 'No. 189, Grove St, Los Angeles',
    }
  ]
  const tableData1 = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-08',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-06',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-07',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    }
  ]
  const tableData2 = [
    {
      date: '2016-05-03',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
      tag: 'Home',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
      tag: 'Office',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
      tag: 'Home',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
      tag: 'Office',
    }
  ]
  const tableData3 = [
    {
      date: '2016-05-03',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-08',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-06',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    },
    {
      date: '2016-05-07',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
    }
  ]
  const tableData4 = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      tag: 'Home',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      tag: 'Office',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      tag: 'Home',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
      tag: 'Office',
    },
  ]
  const tableData5 = [
    {
      date: '2016-05-03',
      name: 'Tom',
      state: 'California',
      city: 'San Francisco',
      address: '3650 21st St, San Francisco',
      zip: 'CA 94114',
      family: [
        {
          name: 'Jerry',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Spike',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Tyke',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
      ],
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      state: 'California',
      city: 'San Francisco',
      address: '3650 21st St, San Francisco',
      zip: 'CA 94114',
      family: [
        {
          name: 'Jerry',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Spike',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Tyke',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
      ],
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      state: 'California',
      city: 'San Francisco',
      address: '3650 21st St, San Francisco',
      zip: 'CA 94114',
      family: [
        {
          name: 'Jerry',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Spike',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Tyke',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
      ],
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      state: 'California',
      city: 'San Francisco',
      address: '3650 21st St, San Francisco',
      zip: 'CA 94114',
      family: [
        {
          name: 'Jerry',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Spike',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Tyke',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
      ],
    },
    {
      date: '2016-05-08',
      name: 'Tom',
      state: 'California',
      city: 'San Francisco',
      address: '3650 21st St, San Francisco',
      zip: 'CA 94114',
      family: [
        {
          name: 'Jerry',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Spike',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Tyke',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
      ],
    },
    {
      date: '2016-05-06',
      name: 'Tom',
      state: 'California',
      city: 'San Francisco',
      address: '3650 21st St, San Francisco',
      zip: 'CA 94114',
      family: [
        {
          name: 'Jerry',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Spike',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Tyke',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
      ],
    },
    {
      date: '2016-05-07',
      name: 'Tom',
      state: 'California',
      city: 'San Francisco',
      address: '3650 21st St, San Francisco',
      zip: 'CA 94114',
      family: [
        {
          name: 'Jerry',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Spike',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
        {
          name: 'Tyke',
          state: 'California',
          city: 'San Francisco',
          address: '3650 21st St, San Francisco',
          zip: 'CA 94114',
        },
      ],
    },
  ]
  const tableData6: User[] = [
    {
      id: 1,
      date: '2016-05-02',
      name: 'wangxiaohu',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: 2,
      date: '2016-05-04',
      name: 'wangxiaohu',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: 3,
      date: '2016-05-01',
      name: 'wangxiaohu',
      address: 'No. 189, Grove St, Los Angeles',
      children: [
        {
          id: 31,
          date: '2016-05-01',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          id: 32,
          date: '2016-05-01',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ],
    },
    {
      id: 4,
      date: '2016-05-03',
      name: 'wangxiaohu',
      address: 'No. 189, Grove St, Los Angeles',
    }
  ]
  const tableData7: User[] = [
    {
      id: 1,
      date: '2016-05-02',
      name: 'wangxiaohu',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: 2,
      date: '2016-05-04',
      name: 'wangxiaohu',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: 3,
      date: '2016-05-01',
      name: 'wangxiaohu',
      hasChildren: true,
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      id: 4,
      date: '2016-05-03',
      name: 'wangxiaohu',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]
  const tableData8: User[] = [
    {
      id: '12987122',
      name: 'Tom',
      amount1: '234',
      amount2: '3.2',
      amount3: 10,
    },
    {
      id: '12987123',
      name: 'Tom',
      amount1: '165',
      amount2: '4.43',
      amount3: 12,
    },
    {
      id: '12987124',
      name: 'Tom',
      amount1: '324',
      amount2: '1.9',
      amount3: 9,
    },
    {
      id: '12987125',
      name: 'Tom',
      amount1: '621',
      amount2: '2.2',
      amount3: 17,
    },
    {
      id: '12987126',
      name: 'Tom',
      amount1: '539',
      amount2: '4.1',
      amount3: 15,
    }
  ]


  const currentRow = ref()
  const singleTableRef = ref<InstanceType<typeof ElTable>>()
  const handleClick = () => {
    console.log('click')
  }
  const tableRowClassName = ({
    row,
    rowIndex,
  }: {
    row: User
    rowIndex: number
  }) => {
    if (rowIndex === 1) {
      return 'warning-row'
    } else if (rowIndex === 3) {
      return 'success-row'
    }
    return ''
  }
  const setCurrent = (row?: User) => {
    singleTableRef.value!.setCurrentRow(row)
  }
  const handleCurrentChange = (val: User | undefined) => {
    currentRow.value = val
  }

  const multipleTableRef = ref<InstanceType<typeof ElTable>>()
  const multipleSelection = ref<User[]>([])
  const toggleSelection = (rows?: User[]) => {
    if (rows) {
      rows.forEach((row) => {
        multipleTableRef.value!.toggleRowSelection(row,undefined)
      })
    } else {
      multipleTableRef.value!.clearSelection()
    }
  }
  const handleSelectionChange = (val: User[]) => {
    multipleSelection.value = val
  }

  const tableRef = ref<InstanceType<typeof ElTable>>()
  const resetDateFilter = () => {
    tableRef.value!.clearFilter(['date'])
  }
  const clearFilter = () => {
    tableRef.value!.clearFilter()
  }
  const formatter = (row: User, column: TableColumnCtx<User>) => {
    return row.address
  }
  const filterTag = (value: string, row: User) => {
    return row.tag === value
  }
  const filterHandler = (
    value: string,
    row: User,
    column: TableColumnCtx<User>
  ) => {
    const property = column['property']
    return row[property] === value
  }
  const indexMethod = (index: number) => {
    return index + 1
  }

  const handleEdit = (index: number, row: User) => {
    console.log(index, row)
  }
  const handleDelete = (index: number, row: User) => {
    console.log(index, row)
  }

  const search = ref('')
  const filterTableData = computed(() =>
    tableData.filter(
      (data) =>
        !search.value ||
        data.name.toLowerCase().includes(search.value.toLowerCase())
    )
  )
  
  const load = (
    row: User,
    treeNode: unknown,
    resolve: (date: User[]) => void
  ) => {
    setTimeout(() => {
      resolve([
        {
          id: 31,
          date: '2016-05-01',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          id: 32,
          date: '2016-05-01',
          name: 'wangxiaohu',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ])
    }, 1000)
  }

  const getSummaries = (param: SummaryMethodProps) => {
    const { columns, data } = param
    const sums: string[] = []
    columns.forEach((column, index) => {
      if (index === 0) {
        sums[index] = '总计'
        return
      }
      const values = data.map((item) => Number(item[column.property]))
      if (!values.every((value) => Number.isNaN(value))) {
        sums[index] = `$ ${values.reduce((prev, curr) => {
          const value = Number(curr)
          if (!Number.isNaN(value)) {
            return prev + curr
          } else {
            return prev
          }
        }, 0)}`
      } else {
        sums[index] = 'N/A'
      }
    })

    return sums
  }

  const arraySpanMethod = ({
    row,
    column,
    rowIndex,
    columnIndex,
  }: SpanMethodProps) => {
    if (rowIndex % 2 === 0) {
      if (columnIndex === 0) {
        return [1, 2]
      } else if (columnIndex === 1) {
        return [0, 0]
      }
    }
  }
  const objectSpanMethod = ({
    row,
    column,
    rowIndex,
    columnIndex,
  }: SpanMethodProps) => {
    if (columnIndex === 0) {
      if (rowIndex % 2 === 0) {
        return {
          rowspan: 2,
          colspan: 1,
        }
      } else {
        return {
          rowspan: 0,
          colspan: 0,
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.el-table ::v-deep .warning-row {
  background-color: #fdf6ec;
}
.el-table ::v-deep .success-row {
  background-color: #f0f9eb;
}
</style>