<script lang="ts" setup>
import type { PropType } from 'vue'

const props = defineProps({
  variant: {
    type: String as PropType<'normal' | 'danger' | 'primary'>,
    default: 'normal'
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const statusClassName = computed(() => {
  switch (props.variant) {
    case 'primary':
      return {
        normal: 'bg-emerald-300',
        active: 'active:bg-emerald-400'
      }

    case 'danger':
      return {
        normal: 'bg-red-300',
        active: 'active:bg-red-400'
      }

    default:
      return {
        normal: 'bg-gray-300',
        active: 'active:bg-gray-400'
      }
  }
})
</script>

<template>
  <button
    class="bg-transparent p-0 b-2 b-black w-34 group relative text-right px-10px py-2 text-sm font-bold uppercase tracking-widest cursor-pointer select-none not-last-of-type-mr-4 loading"
    :class="statusClassName.active">
    <i class="absolute inset-0 z--1 translate-x-1.5 translate-y-1.5 transition-transform pointer-events-none group-hover:translate-0 group.loading:translate-0"
      :class="statusClassName.normal" />

    <slot />
  </button>
</template>
