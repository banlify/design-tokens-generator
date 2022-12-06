<script lang="ts" setup>
import type { PropType } from 'vue'

const props = defineProps({
  variant: {
    type: String as PropType<'normal' | 'danger' | 'primary'>,
    default: 'normal'
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
  <button class="border-none bg-transparent p-0 group relative inline-block cursor-pointer mb-2 mr-2">
    <i class="absolute inset-0 translate-x-1.5 translate-y-1.5 transition-transform pointer-events-none group-hover:translate-y-0 group-hover:translate-x-0"
      :class="statusClassName.normal"></i>
    <span
      class="relative inline-block border-2 border-current text-right w-36 px-10px py-2 text-sm font-bold uppercase tracking-widest"
      :class="statusClassName.active">
      <slot />
    </span>
  </button>
</template>
