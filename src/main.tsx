import 'uno.css'
import './styles/reset.css'
import './styles/toast.scss'

import { RouterView } from 'vue-router'
import { createApp } from 'vue'
import router from './router'

const app = createApp({
  setup: () => () => <RouterView />
})

app.use(router)

app.mount('#app')
