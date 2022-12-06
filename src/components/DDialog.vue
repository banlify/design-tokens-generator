<template>
  <dialog ref="dialogRef" role="dialog" class="border-1 border-#000/15 w-120 backdrop:bg-#000/35 ">
    <form method="dialog">

      <div class="dialog-body mb-4">
        <d-input v-model="formValue.name" placeholder="项目名" class="mb-4" />
        <d-input v-model="formValue.description" placeholder="项目描述" />
      </div>

      <div class="dialog-footer text-right" @click="close">
        <d-button value="cancel">关闭</d-button>
        <d-button class="ml-4" value="confirm">创建</d-button>
      </div>
    </form>
  </dialog>
</template>

<script lang="ts" setup>
const emits = defineEmits<{
  (e: 'update:modelValue', v: boolean): void
}>()

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const dialogRef = ref<HTMLDialogElement>()

const formValue = ref({
  name: '',
  description: ''
})

watch(() => props.modelValue, (display) => {
  if (!dialogRef.value) return

  if (display) {
    dialogRef.value.showModal()
  } else {
    dialogRef.value.hidden = true
  }
}, { immediate: true, flush: 'post' })

function close(): void {
  emits('update:modelValue', false)
}
</script>
