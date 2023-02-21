import axios from 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/axios/index.js';
import { resolveComponent, mergeProps, useSSRContext } from 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
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
import 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/defu/dist/defu.mjs';
import '../../nitro/config.mjs';
import 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/destr/dist/index.mjs';
import 'file:///home/rasel/Public/safwat-nuxt-frontend/node_modules/scule/dist/index.mjs';

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

export { product as default };
//# sourceMappingURL=product-810e98d0.mjs.map
