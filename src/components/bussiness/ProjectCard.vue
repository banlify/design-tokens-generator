<script lang="ts" setup>
import { currentProject } from '@/states/project'
import type { ProjectBoard } from '@/types/project'

const emits = defineEmits<{
  (n: 'remove-item', v: ProjectBoard): void
}>()
const props = defineProps<{
  project: ProjectBoard
}>()

const router = useRouter()
function onProjectClick (): void {
  currentProject.value = props.project
  router.push(`/project/${props.project.id}`)
}

let timeoutId = 0

function onRemoveClick (): void {
  if (!timeoutId) {
    timeoutId = window.setTimeout(() => {
      useToast('双击【删除项目】即可成功删除')
      timeoutId = 0
    }, 300)
    return
  }

  clearTimeout(timeoutId)
  emits('remove-item', props.project)
}
</script>

<template>
  <li class="project-card relative border-image flex items-end h-78 w-56 overflow-hidden cursor-pointer transition b-2 bg-white" title="查看项目详情" @click="onProjectClick">
    <button class="group absolute top-0 right-0 font-bold b-b-2 b-l-2 b-r-0 b-t-0 b-black text-14px flex items-center justify-center text-right w-28 h-10 bg-red-400 hover:bg-red-500 cursor-pointer hover:text-#fff" @click.stop="onRemoveClick">
      <remove-icon class="transition-transform group-hover:translate-x--1" />
      <span>&nbsp;删除项目</span>
    </button>

    <div class="px-6 pb-6 w-full">
      <svg aria-hidden="true" fill="none" stroke="currentColor" class="h-12 w-12">
        <use xlink:href="#earth" />
      </svg>

      <h2 class="mt-2 text-2xl font-medium">{{ project.name }}</h2>
      <p>{{ project.description }}</p>
    </div>
  </li>
</template>

<style scoped>
.border-image:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 12px rgba(0, 0, 0, .15);
  border-image: linear-gradient(45deg,
    var(--color-1) 14.5%, var(--color-2) 14.5%,
    var(--color-2) 29%, var(--color-3) 29%,
    var(--color-3) 42.5%, var(--color-4) 42.5%,
    var(--color-4) 57%, var(--color-5) 57%,
    var(--color-5) 70.5%, var(--color-6) 70.5%,
    var(--color-6) 85%, var(--color-7) 85%) 1
}
</style>
