<template>
  <router-view />
</template>

<script lang="ts">
import { projects, currentProject } from '@/states/project'

export default defineComponent({
  beforeRouteEnter (to, _, next) {
    const project = projects.value.find(({ id }) => id === to.params.id)

    if (!currentProject.value && !project) {
      useToast('该项目不存在!')
      next('/')
      return
    }

    currentProject.value ??= project

    next()
  }
})
</script>
