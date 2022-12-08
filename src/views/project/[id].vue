<template>
  <main class="flex flex-col min-h-full">
    <section class="py-8 px-16 text-right bg-#fff sticky top-0 left-0 z-1">
      <strong class="float-left leading-40px text-xl">{{ currentProject?.name }}</strong>

      <d-button @click="$router.replace('/')">返回列表</d-button>
      <d-button @click="exportTokens">导出配置</d-button>
      <d-button @click="exportTokens">生成变量</d-button>
      <d-button @click="exportTokens">新建变量</d-button>
    </section>

    <section class="flex flex-1">
      <section class="w-300px p-4">
        <ul class="list-none">
          <li v-for="_, category in currentProject?.tokens" :key="category">
            {{ category }}
          </li>
        </ul>
      </section>

      <section class="flex-1 p-4">
        <ul class="list-none">
          <li v-for="tokens, category in currentProject?.tokens" :key="category" class="not-last-of-type-mb-8">
            <token-table :tokens="tokens" />
          </li>
        </ul>
      </section>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { currentProject } from '@/states/project'

function exportTokens (): void {
  useExport(currentProject.value)
}

</script>
