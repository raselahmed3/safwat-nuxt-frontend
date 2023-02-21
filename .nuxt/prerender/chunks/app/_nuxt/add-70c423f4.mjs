import { d as defineNuxtRouteMiddleware } from '../server.mjs';
import 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/vue/index.mjs';
import 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/ofetch/dist/node.mjs';
import 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/hookable/dist/index.mjs';
import 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/unctx/dist/index.mjs';
import 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/h3/dist/index.mjs';
import 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/ufo/dist/index.mjs';
import 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/@intlify/core-base/dist/core-base.mjs';
import 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/@intlify/vue-devtools/dist/vue-devtools.mjs';
import 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/cookie-es/dist/index.mjs';
import 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/is-https/dist/index.mjs';
import 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/@fortawesome/fontawesome-svg-core/index.mjs';
import 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/@fortawesome/vue-fontawesome/index.js';
import 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/@fortawesome/free-solid-svg-icons/index.mjs';
import 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/vue/server-renderer/index.mjs';
import 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/defu/dist/defu.mjs';
import '../../nitro/config.mjs';
import 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/destr/dist/index.mjs';
import 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/scule/dist/index.mjs';

const add = defineNuxtRouteMiddleware((to, from) => {
  console.log(to);
  return true;
});

export { add as default };
//# sourceMappingURL=add-70c423f4.mjs.map
