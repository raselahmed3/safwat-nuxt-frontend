import { u as useRoute } from "../server.mjs";
import { mergeProps, unref, useSSRContext } from "vue";
import "destr";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
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
import "defu";
const _imports_0 = "data:image/png;base64,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";
const _sfc_main = {
  __name: "message",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen items-center flex w-full justify-center" }, _attrs))}><div class="w-full text-center"><div class="flex items-center justify-center font-dinar"><div class="flex flex-col items-center"><span><img class="sm:w-[60px] sm:h-[60px] w-[40px] h-[40px] mb-2"${ssrRenderAttr("src", _imports_0)} alt=""></span><h1 class="text-4xl font-bold">شكرا لك</h1><h3 class="text-3xl">تم استقبال طلبك بنجاح</h3><p class="mt-6">سنقوم بتأكيد طلبك عبر الواتس اب</p><span class="font-sens text-xs text-[#b7c33b] sm:mb-20 mb-32 mt-1">${ssrInterpolate(unref(route).query.phone)}</span></div></div><a href="whatsapp://send?text=لاتفوتك عروض صفوة الجوف المميزة https%3A%2F%2Fscales.agency" data-action="share/whatsapp/share" class="sm:inline-flex btnclr flex justify-center mx-3 items-center px-4 sm:py-3 py-4 text-white rounded-lg focus:outline-none focus:ring"><span class="sm:text-sm text-xl font-medium"> مشاركة العرض مع صديق </span></a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/message.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=message-70c14cf3.js.map
