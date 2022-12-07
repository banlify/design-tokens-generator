<template>
  <main class="flex flex-col min-h-full">
    <section class="py-8 px-16 text-right bg-#fff sticky top-0 left-0 z-1">
      <strong class="float-left leading-40px text-xl">{{ currentProject.name }}</strong>

      <d-button @click="$router.replace('/')">返回列表</d-button>
      <d-button variant="primary" @click="exportTokens">导出配置</d-button>
    </section>

    <section class="flex">
      <section class="w-300px">1</section>
      <section class="flex-1">2</section>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { currentProject } from '@/states/project'

function exportTokens (): void {
  useExport(currentProject.value)
}
</script>
