<script lang="ts" setup>
import type { PropType } from 'vue'

interface Tokens {
  type: string
  name: string
  value: string
  description: string
}

const props = defineProps({
  tokens: {
    type: Array as PropType<Tokens[]>,
    default: () => []
  }
})

// 删除某一条 token
function removeTokenItem (token: Tokens): void {
  // eslint-disable-next-line vue/no-mutating-props
  props.tokens.splice(props.tokens.indexOf(token), 1)
}
</script>

<template>
  <div class="flex justify">
    Background
    <!-- <d-input v-model="token.name" /> -->
  </div>
  <table class="w-full" cellspacing="8" cellpadding="0">
    <tr v-for="(token, index) of tokens" :key="index">
      <td class="w-34px">
        <div class="h-34px b-1" :style="`background: ${token.value}`"></div>
      </td>
      <td>
        <d-input v-model="token.name" placeholder="属性名" />
      </td>
      <td>
        <d-input v-model="token.value" placeholder="属性值" />
      </td>
      <td>
        <d-input v-model="token.description" placeholder="描述" />
      </td>
      <td>
        <button class="rounded-0 bg-transparent b-0 p-0 w-full h-8 hover:text-red-400 cursor-pointer" @click="removeTokenItem(token)">
          <remove-icon class="block m-auto" />
        </button>
      </td>
    </tr>
  </table>
</template>
