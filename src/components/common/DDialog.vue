<template>
  <teleport to="body">
    <div v-if="modelValue" class="dialog-mask"></div>
    <div v-if="modelValue" class="fixed top-50% left-50% translate-x--50% translate-y--50% p-6 b-2 bg-#fff w-120 backdrop:bg-#000/35 shadow-lg z-1">

      <slot />

      <div class="dialog-footer mt-10 text-right">
        <d-button @click="onCancelClick">{{ cancelText }}</d-button>
        <d-button variant="primary" @click="onConfirmClick">{{ confirmText }}</d-button>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
const emits = defineEmits<{
  (e: 'cancel'): void
  (e: 'confirm'): void
  (e: 'update:modelValue', v: boolean): void
}>()

defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },

  cancelText: {
    type: String,
    default: '我再想想'
  },

  confirmText: {
    type: String,
    default: '确认'
  }
})

function onCancelClick (): void {
  emits('update:modelValue', false)
  emits('cancel')
}

function onConfirmClick (): void {
  emits('confirm')
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
