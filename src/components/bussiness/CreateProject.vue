<template>
  <d-dialog v-model="modelValue" confirm-text="创建项目" @cancel="closeDialog" @confirm="onSubmit">
    <h2 class="mt-0 mb-3">新建项目</h2>

    <div class="dialog-body">
      <d-input v-model="formValue.name" placeholder="项目名称" class="mb-4" />
      <d-input v-model="formValue.description" placeholder="项目描述" />
    </div>
  </d-dialog>
</template>

<script lang="ts" setup>
import type { ProjectBoard } from '@/types/project'

const emits = defineEmits<{
  (e: 'update:modelValue', v: boolean): void
  (e: 'create-project', v: ProjectBoard): void
}>()

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const modelValue = computed({
  get () {
    return props.modelValue
  },
  set (value) {
    emits('update:modelValue', value)
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
  const { name, description } = formValue.value

  if (!name) {
    useToast('项目名称是必须的！')
    return
  }

  const project = {
    id: Math.random().toString(32).slice(2),
    name,
    description,
    tokens: [{
      name: 'theme-color',
      value: '#1890ff',
      description: '主题色'
    }]
  }

  emits('create-project', project)

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
