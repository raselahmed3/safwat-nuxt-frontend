import { d as defineNuxtRouteMiddleware } from "../server.mjs";
import "vue";
import "destr";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "h3";
import "ufo";
import "@intlify/core-base";
import "@vue/devtools-api";
import "@intlify/vue-devtools";
import "cookie-es";
import "js-cookie";
import "is-https";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "vue/server-renderer";
import "defu";
const add = defineNuxtRouteMiddleware((to, from) => {
  console.log(to);
  return true;
});
export {
  add as default
};
//# sourceMappingURL=add-70c423f4.js.map
