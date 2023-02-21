import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "add"
declare module "/home/rasel/Public/safwat-nuxt-frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}