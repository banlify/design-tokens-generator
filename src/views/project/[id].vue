<template>
  <main class="flex flex-col min-h-full">
    <section class="py-8 px-16 text-right bg-#fff sticky top-0 left-0 z-1">
      <d-button @click="exportTokens">导出变量</d-button>
    </section>
  </main>
</template>

<script lang="ts" setup>
function exportTokens (): void {
  console.log('line number: 10, exportTokens', exportTokens)
}
</script>
