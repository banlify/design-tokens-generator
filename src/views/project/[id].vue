<template>
  <h1>1231</h1>
</template>

<script lang="ts">
export default defineComponent({
  beforeRouteEnter (to, _, next) {
    const CACHE_KEY = `DTK.${to.params.id}`
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
