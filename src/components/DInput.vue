<template>
  <input v-model="inputValue" type="text" autocomplete="off" class="outline-0 transition px-4 py-1.75 border-2 border-transparent bg-#05060f0a rounded-0 text-14px block w-full" />
</template>

<script lang="ts" setup>
const emits = defineEmits<{
  (name: 'input', e: string): void
}>()

const props = defineProps<{
  modelValue: string
}>()

const inputValue = computed({
  get () {
    return props.modelValue
  },
  set (value) {
    emits('input', value)
  }
})
</script>

<style lang="scss" scoped>
input:not([disabled]):focus {
  border-color: #05060f;
  background: #05060f00
}

input:not(:focus, [disabled]):hover {
  border-color: #05060f;
  background: #05060f15
}
</style>
