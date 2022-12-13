<script lang="ts" setup>
import type { PropType } from 'vue'
import type { ProjectTokens } from '@/types/project'

const props = defineProps({
  tokens: {
    type: Array as PropType<ProjectTokens[]>,
    default: () => []
  }
})

// 删除某一条 token
function removeTokenItem (token: ProjectTokens): void {
  // eslint-disable-next-line vue/no-mutating-props
  props.tokens.splice(props.tokens.indexOf(token), 1)
}
</script>

<template>
  <table class="w-full" cellspacing="8" cellpadding="0">
    <tr v-for="(token, index) of tokens" :key="index">
      <td class="w-40px">
        <div class="h-40px b-1" :style="`background: ${token.value}`"></div>
      </td>
      <td>
        <d-input v-model="token.name" placeholder="变量名" />
      </td>
      <td>
        <d-input v-model="token.value" placeholder="变量值" />
      </td>
      <td>
        <d-input v-model="token.description" placeholder="变量描述" />
      </td>
      <td>
        <button class="rounded-0 bg-transparent b-0 p-0 w-full h-8 hover:text-red-400 cursor-pointer" @click="removeTokenItem(token)">
          <remove-icon class="block m-auto" />
        </button>
      </td>
    </tr>
  </table>
</template>
