<template>
  <input v-model="inputValue" type="text" autocomplete="off" class="border-0 outline-2 outline-solid outline-transparent px-3 py-1.75 b-2 b-transparent rounded-0 text-14px block w-full" />
</template>

<script lang="ts" setup>
const emits = defineEmits<{
  (name: 'update:modelValue', e: string): void
}>()

const props = defineProps<{
  modelValue: string
}>()

const inputValue = computed({
  get () {
    return props.modelValue
  },
  set (value) {
    emits('update:modelValue', value)
  }
})
</script>

<style scoped>
input {
  background-color: #05060f0a;
  outline-offset: -2px;
  transition-duration: .2s;
  transition-property: outline-color, background-color;
}

input:not([disabled]):focus {
  outline-color: #05060f;
  background: #05060f00
}

input:not(:focus, [disabled]):hover {
  background: #05060f25
}
</style>
