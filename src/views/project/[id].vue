<template>
  <main class="flex flex-col min-h-full">
    <section class="py-8 px-16 text-right bg-#fff sticky top-0 left-0 z-1">
      <strong class="float-left leading-40px text-xl">{{ currentProject?.name }}</strong>

      <d-button @click="$router.replace('/')">返回列表</d-button>
      <d-button variant="primary" @click="createSingleToken">新建变量</d-button>
    </section>

    <section class="flex flex-1">
      <section class="w-500px p-4 flex flex-col">
        <div>
          <d-button @click="generatorTokens">生成样式</d-button>
          <d-button variant="primary" @click="exportTokens">导出配置</d-button>
        </div>

        <output class="flex-1 h-full mt-4 p-4 overflow-overlay bg-gray-300">
          <pre class="m-0">{{ outputContent }}</pre>
        </output>
      </section>

      <section class="flex-1 p-4">
        <token-table :tokens="currentProject.tokens" />
      </section>
    </section>
  </main>
</template>

<script lang="ts" setup>
import throttle from 'lodash.throttle'
import { projects, currentProject } from '@/states/project'
import { setLocalCaches } from '@/utils/parse'

const outputContent = ref('')

const autoSaveToLocal = throttle(({ showToast } = { showToast: false }) => {
  setLocalCaches(unref(projects))
  showToast && useToast('保存成功')
}, 1000)

const unwatch = watch(currentProject, autoSaveToLocal, { deep: true, flush: 'post' })

function createSingleToken (): void {
  currentProject.value.tokens.push({ name: '', value: '', description: '' })
}

function exportTokens (): void {
  useExport(currentProject.value)
}

function generatorTokens (): void {
  outputContent.value = useGenerate(currentProject.value.tokens)
}

window.addEventListener('keydown', (ev) => {
  if (ev.code === 'KeyS' && ev.ctrlKey) {
    ev.preventDefault()
    autoSaveToLocal({ showToast: true })
  }
})

onScopeDispose(() => {
  unwatch()
})
</script>
