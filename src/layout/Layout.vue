<template>
  <a-layout style="min-height: 100vh">
    <Sidebar />
    <a-layout class="container">
      <NavigationBar />
      <a-layout-content>
        <Breadcrumb />
        <div class="scroll-wrap">
          <RouterView />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import Sidebar from './sidebar/Sidebar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import NavigationBar from './header/NavigationBar.vue'
</script>

<style lang="scss" scoped></style>
