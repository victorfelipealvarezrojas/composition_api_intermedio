import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// app.use(VueQueryPlugin)
app.use(router)

VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        gcTime: 1000 * 60 * 2, // 2 minutes
        refetchOnReconnect: 'always',
      },
    },
  },
})

app.mount('#app')
