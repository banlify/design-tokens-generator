<script lang="ts" setup>
import { PROJECT_LOCAL_CACHE_KEY } from '@/utils/constants'
import type { ProjectBoard } from '@/types/project'

const localProjectKeys = Object.keys(localStorage).filter(key => key.startsWith(PROJECT_LOCAL_CACHE_KEY))

const showDialog = ref(false)
const projects = ref<ProjectBoard[]>([])

projects.value = localProjectKeys.reduce<ProjectBoard[]>((acc, cur: string) => {
  acc.push(JSON.parse(localStorage.getItem(`${PROJECT_LOCAL_CACHE_KEY}${cur}`)!))

  return acc
}, [])

function onCreateButtonClick () {
  showDialog.value = true
}

console.log(projects.value)
</script>

<template>
  <main class="flex flex-col h-full p-8">
    <section class="mb-8">
      <d-button variant="primary">新建项目</d-button>
    </section>

    <d-dialog v-model="showDialog" />

    <section class="flex-1 flex justify-center items-center overflow-overlay">
      <ul v-if="projects.length" class="list-none gap-4 p0">
        <project-card v-for="project of projects" :key="project.name" :project="project" />
      </ul>

      <span v-else class="text-xl text-#000/40">暂无本地项目</span>
    </section>
  </main>
</template>
