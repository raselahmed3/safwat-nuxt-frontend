import axios from "axios";
import { resolveComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
import "destr";
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
const _sfc_main = {
  data() {
    return {
      products: [],
      names: []
    };
  },
  mounted() {
    axios.get("https://scales.agency/safwat-backend/public/api/product").then((response) => {
      console.log(response.data);
      this.products = response.data;
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_product = resolveComponent("product", true);
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-fit mx-auto grid grid-cols-1 lg:grid-cols-8 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5" }, _attrs))}><!--[-->`);
  ssrRenderList($data.products, (product2) => {
    _push(ssrRenderComponent(_component_product, {
      key: product2.id,
      product: product2
    }, null, _parent));
  });
  _push(`<!--]--></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const product = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  product as default
};
//# sourceMappingURL=product-810e98d0.js.map
