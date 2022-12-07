<template>
  <Teleport to="body">
    <div v-show="modelValue" class="dialog-mask"></div>
    <div v-show="modelValue"
      class="fixed top-50% left-50% translate-x--50% translate-y--50% p-6 border-2 bg-#fff w-120 backdrop:bg-#000/35 shadow-lg z-1">
      <h2 class="mt-0">新建项目</h2>

      <div class="dialog-body">
        <d-input v-model="formValue.name" placeholder="项目名称" class="mb-4" />
        <d-input v-model="formValue.description" placeholder="项目描述" />
      </div>

      <div class="dialog-footer mt-8 text-right">
        <d-button class="mr-4" @click="closeDialog">我再想想</d-button>
        <d-button variant="primary" @click="onSubmit">创建项目</d-button>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { PROJECT_LOCAL_CACHE_KEY } from '@/utils/constants'
import type { ProjectBoard } from '@/types/project'
import Toast from '@/utils/toast'

const emits = defineEmits<{
  (e: 'update:modelValue', v: boolean): void
  (e: 'create-project', v: ProjectBoard): void
}>()

defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const formValue = ref({
  name: '',
  description: ''
})

function closeDialog (): void {
  emits('update:modelValue', false)

  formValue.value = {
    name: '',
    description: ''
  }
}

function onSubmit (): void {
  console.log(formValue.value)

  const { name, description } = formValue.value

  if (!name) {
    Toast('项目名称是必须的！')
    return
  }

  const project = {
    name,
    description,
    tokens: {},
    id: Math.random().toString(32).slice(2)
  }

  emits('create-project', project)

  localStorage.setItem(PROJECT_LOCAL_CACHE_KEY + name, JSON.stringify(project))

  closeDialog()
}
</script>

<style scoped>
.dialog-mask {
  content: '';
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .3);
  z-index: 0;
}
</style>
