<script lang="ts" setup>
import { getLocalCaches, setLocalCaches } from '@/utils/parse'
import type { ProjectBoard } from '@/types/project'

const showDialog = ref(false)

const projects = ref<ProjectBoard[]>(getLocalCaches())

function onCreateButtonClick (): void {
  showDialog.value = true
}

function onCreateProject (project: ProjectBoard): void {
  projects.value.push(project)
  setLocalCaches(unref(projects))
}
</script>

<template>
  <main class="flex flex-col h-full p-8">
    <section class="mb-8 text-right">
      <d-button variant="primary" @click="onCreateButtonClick">新建项目</d-button>
    </section>

    <create-project-dialog v-model="showDialog" @create-project="onCreateProject" />

    <section class="flex-1 flex justify-center items-center overflow-overlay">
      <ul v-if="projects.length" class="list-none gap-6 p-4 flex">
        <project-card v-for="project of projects" :key="project.id" :project="project" />
      </ul>

      <span v-else class="pointer-events-none text-xl text-#000/40">暂无本地项目</span>
    </section>
  </main>
</template>
