<template>
  <router-view />
</template>

<script lang="ts">
import { getLocalCaches } from '@/utils/parse'
import { currentProject } from '@/states/project'

export default defineComponent({
  beforeRouteEnter (to, _, next) {
    const project = getLocalCaches().find(({ id }) => id === to.params.id)

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
