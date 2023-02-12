import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "add"
declare module "C:/Users/ronyb/Downloads/-safwat-nuxt-frontend-main-nuxt/safwat-nuxt-frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}