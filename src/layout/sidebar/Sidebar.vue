<template>
  <a-layout-sider v-model:collapsed="state.collapsed" collapsible @collapse="onCollapse">
    <div class="logo">
      <Logo />
    </div>
    <a-menu
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      theme="dark"
      :items="menuList"
      @click="handleClick"
    />
  </a-layout-sider>
</template>

<script setup lang="ts">
import { reactive, watch, h } from 'vue'
import { PieChartOutlined } from '@ant-design/icons-vue'
import Logo from './Logo.vue'
import { constantRoutes } from '@/router/index'
import type { VNode } from 'vue'
import type { MenuProps } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import type { MenuInfo } from 'ant-design-vue/es/menu/src/interface'
import type { Key } from 'ant-design-vue/es/_util/type'
const router = useRouter()

interface sideItem {
  path: String
  key: String
  icon?(): VNode
  label: String
  title: String
  children?: sideItem[]
}

const getRoutes = (list: any[]) => {
  const curRouter: sideItem[] = []
  for (let i = 0; i < list.length; i++) {
    if (!list[i].meta?.hiden) {
      const obj: sideItem = {
        path: list[i].path,
        key: list[i].path,
        icon: () => h(PieChartOutlined),
        label: list[i]?.meta?.title,
        title: list[i].name
      }

      if (list[i]?.children?.length) {
        curRouter.push({
          ...obj,
          children: getRoutes(list[i].children)
        })
      } else {
        curRouter.push({ ...obj })
      }
    }
  }
  return curRouter
}

// 获取路由菜单
const menuList = getRoutes(constantRoutes)

const state = reactive({
  collapsed: false,
  selectedKeys: ['1'],
  openKeys: ['sub1'],
  preOpenKeys: ['sub1']
})

const handleClick: MenuProps['onClick'] = (menu: MenuInfo) => {
  const keyPath: Key[] = menu.keyPath || []
  let globalPath = keyPath.join('/').replace('//', '/')
  // 跳转对应路由页面
  router.push({
    path: globalPath
  })
}

const onCollapse = (collapsed: unknown, type: unknown) => {
  console.log(collapsed, type)
}

watch(
  () => state.openKeys,

  (_val, oldVal) => {
    state.preOpenKeys = oldVal
  }
)
</script>

<style lang="scss" scoped>
.logo {
  height: 64px;
  background-color: #ddd;
}
</style>
