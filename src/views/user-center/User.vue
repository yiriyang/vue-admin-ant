<template>
  <a-table :data-source="dataSource" :columns="columns">
    <template #bodyCell="{ column }">
      <template v-if="column.key === 'active'">
        <a-space wrap>
          <a-button type="primary" @click="onEdit"> 编辑 </a-button>
          <a-button type="primary" danger> 删除 </a-button>
        </a-space>
      </template>
    </template>
  </a-table>

  <a-modal
    v-model:visible="visible"
    title="Title"
    :confirm-loading="confirmLoading"
    class="ddd"
    @ok="handleOk"
  >
    <p>{{ modalText }}</p>
  </a-modal>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const visible = ref<boolean>(false)
const modalText = ref<string>('The modal will be closed after two seconds')
const confirmLoading = ref<boolean>(false)
const handleOk = () => {
  modalText.value = 'The modal will be closed after two seconds'
  confirmLoading.value = true
  setTimeout(() => {
    visible.value = false
    confirmLoading.value = false
  }, 1000)
}

const onEdit = () => {
  visible.value = true
}
const dataSource = reactive([
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }
])
const columns = reactive([
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: '操作',
    dataIndex: '',
    key: 'active'
  }
])
</script>
