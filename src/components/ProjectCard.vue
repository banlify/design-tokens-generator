<script lang="ts" setup>
import type { ProjectBoard } from '@/types/project'
import { currentProject } from '@/states/project'

const props = defineProps<{
  project: ProjectBoard
}>()

const router = useRouter()
function onProjectClick (): void {
  currentProject.value = props.project
  router.push(`/project/${props.project.id}`)
}
</script>

<template>
  <li class="group relative block h-80 w-60 cursor-pointer" @click="onProjectClick">
    <i class="absolute inset-0 border-2 border-black color-bar"></i>

    <div class="relative flex w-full h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2.5 group-hover:-translate-y-2.5">
      <div class="px-6 pb-6 transition-opacity group-hover:absolute group-hover:opacity-0">
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-12 w-12">
          <use xlink:href="#earth" />
        </svg>

        <h2 class="mt-2 text-2xl font-medium">{{ project.name }}</h2>
      </div>

      <div class="absolute p-6 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
        <h3 class="mt-2 text-2xl font-medium">{{ project.name }}</h3>

        <p class="mt-2">{{ project.description }}</p>
      </div>
    </div>
  </li>
</template>

<style scoped>
.color-bar {
  background-image: linear-gradient(45deg,
    var(--color-1) 14.5%, var(--color-2) 14.5%,
    var(--color-2) 29%, var(--color-3) 29%,
    var(--color-3) 42.5%, var(--color-4) 42.5%,
    var(--color-4) 57%, var(--color-5) 57%,
    var(--color-5) 70.5%, var(--color-6) 70.5%,
    var(--color-6) 85%, var(--color-7) 85%)
}
</style>
