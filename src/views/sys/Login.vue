<template>
  <a-form
    class="form-wrap"
    :model="formState"
    name="basic"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 20 }"
    autocomplete="off"
    @finish="onFinish"
    @finish-failed="onFinishFailed"
  >
    <a-form-item
      label="用户名"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
      label="密码"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item name="remember" :wrapper-col="{ offset: 4, span: 20 }">
      <a-checkbox v-model:checked="formState.remember"> 记住账号 </a-checkbox>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 4, span: 20 }">
      <a-button type="primary" html-type="submit"> 登录 </a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import router from '@/router'
import { reactive } from 'vue'
import { useStore } from '@/stores/modules/user'

interface FormState {
  username: string
  password: string
  remember: boolean
}
const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true
})
const onFinish = (values: any) => {
  console.log('Success:', values)

  useStore()
    .login(formState)
    .then((resp) => {
      console.log(resp)
    })

  router.push('/')
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>

<style>
.form-wrap {
  width: 600px;
  margin: 100px auto;
  border: 1px solid #ddd;
  padding: 16px 24px;
}
</style>
