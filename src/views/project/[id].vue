<template>
  <h1>1231</h1>
</template>

<script lang="ts">
import { PROJECT_LOCAL_CACHE_KEY } from '@/utils/constants'

export default defineComponent({
  beforeRouteEnter (to, _, next) {
    const CACHE_KEY = `${PROJECT_LOCAL_CACHE_KEY}${to.params.id}`
    const localTokensValue = localStorage.getItem(CACHE_KEY)

    if (
      !localTokensValue ||
      ['undefined', 'null'].includes(`${localTokensValue}`)
    ) {
      next('/')
      return
    }

    next()
  }
})
</script>
