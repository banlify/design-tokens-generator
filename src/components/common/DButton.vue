<script lang="ts" setup>
import type { PropType } from 'vue'

const props = defineProps({
  variant: {
    type: String as PropType<'normal' | 'danger' | 'primary'>,
    default: 'normal'
  },
  interval: {
    type: Number,
    default: 0
  }
})

const statusClassName = computed(() => {
  switch (props.variant) {
    case 'primary':
      return {
        normal: 'bg-emerald-400',
        active: 'active:bg-emerald-500'
      }

    case 'danger':
      return {
        normal: 'bg-red-500',
        active: 'active:bg-red-500'
      }

    default:
      return {
        normal: 'bg-gray-400',
        active: 'active:bg-gray-500'
      }
  }
})
</script>

<template>
  <button
    class="d-button bg-transparent p-0 b-2 b-black w-34 group relative text-right px-10px py-2 text-sm font-bold uppercase tracking-widest cursor-pointer select-none not-last-of-type-mr-4"
    :class="statusClassName.active"
    :style="{animationDuration: interval ? interval + 's' : '' }"
  >
    <i class="absolute inset-0 z--1 translate-x-1.5 translate-y-1.5 transition-transform pointer-events-none group-hover:translate-0" :class="statusClassName.normal" />

    <slot />
  </button>
</template>

<style>
.d-button {
  animation: throttle .3s step-end forwards;
}

.d-button:active {
  animation: none;
}

@keyframes throttle {
  0% {
    pointer-events: none;
  }

  100% {
    pointer-events: all;
  }
}
</style>
