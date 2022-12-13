<template>
  <main class="flex flex-col min-h-full">
    <section class="py-8 px-16 text-right bg-#fff sticky top-0 left-0 z-1">
      <strong class="float-left leading-40px text-xl">{{ currentProject?.name }}</strong>

      <d-button @click="$router.replace('/')">返回列表</d-button>
      <d-button variant="primary" @click="exportTokens">导出配置</d-button>
      <d-button variant="primary" @click="createSingleToken">新建变量</d-button>
    </section>

    <section class="flex flex-1">
      <section class="w-500px p-4 flex flex-col relative" style="height:calc(100vh - 6.5rem)">
        <span class="absolute left-4 top-0 text-12px opacity-50 pointer-events-none">CSS</span>
        <output class="relative flex-1 overflow-y-scroll text-sm bg-gray-100" style="user-select: all">
          <pre class="m-6">{{ cssVars }}</pre>
        </output>

        <span class="absolute left-4 top-50% translate-y--50% text-12px opacity-50 pointer-events-none">SCSS</span>
        <output class="relative flex-1 overflow-y-scroll text-sm mt-4 bg-gray-100" style="user-select: all">
          <pre class="m-6">{{ scssVars }}</pre>
        </output>
      </section>

      <section class="flex-1 p-4 overflow-overlay" style="height:calc(100vh - 6.5rem)">
        <token-table :tokens="currentProject.tokens" />
      </section>
    </section>
  </main>
</template>

<script lang="ts" setup>
import throttle from 'lodash.throttle'
import { projects, currentProject } from '@/states/project'
import { setLocalCaches } from '@/utils/parse'
import { useGenerateScss } from '@/composables/use-generate'

const cssVars = ref('')
const scssVars = ref('')

const autoSaveToLocal = throttle(({ showToast } = { showToast: false }) => {
  setLocalCaches(unref(projects))
  showToast && useToast('保存成功')
  generatorTokens()
}, 1000)

const unwatch = watch(currentProject, autoSaveToLocal, { deep: true, flush: 'post', immediate: true })

function createSingleToken (): void {
  currentProject.value.tokens.push({ name: '', value: '', description: '' })
}

function exportTokens (): void {
  useExport(currentProject.value)
}

function generatorTokens (): void {
  cssVars.value = useGenerateCSS(currentProject.value.tokens)
  scssVars.value = useGenerateScss(currentProject.value.tokens)
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

<style>
pre {
  font-family: 'Courier New', Courier, monospace;
}
</style>
