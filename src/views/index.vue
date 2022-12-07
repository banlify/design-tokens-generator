<script lang="ts" setup>
import { getLocalCaches, setLocalCaches } from '@/utils/parse'
import type { ProjectBoard } from '@/types/project'

const showDialog = ref(false)

const projects = ref<ProjectBoard[]>(getLocalCaches())

function onCreateButtonClick (): void {
  showDialog.value = true
}

function onCreateProject (project: ProjectBoard): void {
  projects.value.unshift(project)
  setLocalCaches(unref(projects))
}

function onRemoveItem (project: ProjectBoard): void {
  projects.value.splice(projects.value.indexOf(project), 1)
  setLocalCaches(unref(projects))
}
</script>

<template>
  <main class="flex flex-col min-h-full">
    <create-project v-model="showDialog" @create-project="onCreateProject" />

    <section class="py-8 px-16 text-right bg-#fff sticky top-0 left-0 z-1">
      <d-button variant="primary" @click="onCreateButtonClick">新建项目</d-button>
    </section>

    <ul v-if="projects.length" class="list-none gap-6 flex flex-wrap p-8 flex-1 flex justify-center">
      <project-card v-for="project of projects" :key="project.id" :project="project" @remove-item="onRemoveItem" />
    </ul>

    <p v-else class="pointer-events-none flex-1 flex justify-center items-center text-xl text-#000/40">暂无本地项目</p>
  </main>
</template>
