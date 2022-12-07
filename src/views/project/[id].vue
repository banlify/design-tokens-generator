<template>
  <h1>1231</h1>
</template>

<script lang="ts">
import { getLocalCaches } from '@/utils/parse'
import { currentProject } from '@/states/project'
import toast from '@/utils/toast'

export default defineComponent({
  beforeRouteEnter (to, _, next) {
    if (!currentProject.value || !getLocalCaches().find(({ id }) => id === to.params.id)) {
      toast('该项目不存在!')
      next('/')
      return
    }

    next()
  }
})
</script>
