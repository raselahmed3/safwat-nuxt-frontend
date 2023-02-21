import axios from "axios";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList } from "vue";
import { _ as _export_sfc, n as navigateTo } from "../server.mjs";
import "destr";
import { Carousel, Slide, Navigation } from "vue3-carousel";
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
const _imports_0$3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABCgAAAQoBFqS8ywAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAZoSURBVHic7ZtnjFVFFMd/70lZXZAmoiDYcFGKApYIxkSxoBiNKBY0GuxB/QJGglHQYIEvdmxRIWg0IEYsaAwoiA2DgqKEBRFcJFIMRZDmsuzzw+EtN5czd2Zu2w/yTyZ5mTunzNw7Z845cx4cxP8bhRxkNAfOBvoD3YCTgc5AJdBq35jdwE5gPfArsAJYBMwD1uWgY+o4HLgFmIVMrJSgLQOeAHrkOoOYOAWYDOwg2aRN7QdgKHBIXhNyRRUwHdhLNhMPt9+AG8lnC0fiUGAcsofzmHi4zQN6JZlAkhU8FZiGGDUbNiLKzgeqgZXAX8B2YA9iDA8DTkC+pj7AeUBPBx1rgdHAM8ii5ILbsRu3zcBLQD+gGFPO0cAI5ESwfQ0fsP9UyQwF4HGLImuB+4AWKcseAMy2yP4JWbRMUAReiRD+LzAeOd+zxCDECJr0WAWcmIXg8h7T2hLyPacrgIkR+qwEjkpT4AMRwt5ADFhj4GrEkGp6/Yg4ZIkxAPP5/iyNfxafiZwomn7TkzLvGMF8TFLmKaIHctRqeg5PwnimgelzSZhmhH7oLvguoGschoMVZiXkKIp7rmeNoeg6f+zLqAJYrTBaB3RISdms8Cr6Ilzuw2S4gck1Frr2wEeIT1ACtgGX+ghOAS2ANRyo+0JXBk2B3xUGn1roKpGjJ0y3jPxPiusUPUrAJS7EQxTCeqC3he5lg9AScJHvDFLAAkWPWS6EHyqEMy00xwJ1Cl25zfBWPzmuUvTYC3SKIjoSCS9936AtQKpD8oB5oojEBWFdRkYR3aQQrMGegvpGoQu3x+LNIxG0FzMvimCyQvCUg6AahS7c1gPN/OeQCL0UPXYjmSwVmvW/zEGQ5jNo7bR484iNArLwYT3OLw8IenStgONCDPYCXzkI+tNhzAJgqcO4NGH65BteRHABqpSBNYgzY8N8y/NtwA1I/i9vLFb6GuZqW4DljkLesjwfjiQpGgMrlL6Tyj+CC9BWGfiHo5BFwPeGZz8DbzvyyQKrlb4jyj+CC9BSGfiPh6Dxhv7u5G/8gtDm0JCwLWqdAWz3EDQD+Ezpb4Icr009eKUJbQ7qAuxSBvrm+u5CX/E+wKOevNJCc6WvtvwjuABblIGaXYjCKuAew7NRwPWe/NKAlhhtONmCC/C3MrBNDIFvAq8r/QVgCnBFDJ5J0F7pUxdgkzKwS0yhdwNfKP3NkEztzQ48Ckj8MC6BHmD2bw5AZ3S/WdtDLmiLVHuY3OKJRMcGjwTG1gKTkAoTX7ygyB5rGrxBGXxWDKFlVCF3haZFqAYuUOiuRJIwWjz/DmJUXbFY4WNM7X2iDB7hIUxDN6IXoQTMAS7eN74nskejxtcD76H7LkG0R19IY1JkjDL4O/e5GtEVyQ3aosV1yDHqElmWkOKrKNyq0FRHEXQ3CNIMiS/aII6S6+Rcmq06ZK5C87xN0V8UorScmCbAg+xPmydp24j2LqvQ7zT725R8SCHaTDyfwITe6FlbnzbFImOSQrMChxT9MehFTxPc5+eEAmLttS/O1pYQiOgUdEVP7o5yVe5FhXgnlpRyTBSRrPM07FujHsk92Ky/dpptcqBrQBeDMrbER1K0QSpMpyP5yd3I9lsOvAac4cDjWvTFe9hXmXcVJo2Z2HDB8UhQF9Z7DTGKtrS9OSwlRbNAJVJKq739Ib7MOnKgB1VPNjYgDTRF3/cl4P04DIcpjJakoGgWaI6+XUtI1Oeb0wDE2IWZudwQ5Y3W6N5eCclw2VxlFUX0qHBgcn1TxemYCybriLHvy+irMNyFOT/YBDgHuJ98boArkFyByWeoB+5MImC0wnR24HkBqRQfgdQNBKO3ncDTZFNHVEQqP6LKZGuRG+5EmKMwngjcAUxF3x7htgMprfVJXJjQFrlZsoXTW0mhHqmS9P/8sAzJ6w0E2jnoUETC8nuREngXfRYSsxYwHBkNIkZNnSdqkOuqLYibW4fc17dk/x8mKhx57UG23FjEJiRGVEW47fNLI8b3aXPJoEJ9qaPwPYjbOQG4EMnudkCss+aLp9m+xrPo0RVaWrzc6pDb3wlI6GosMUGck5HAt6T3L7INyNfZN6W5qrgtJLQasf6DiZ8N6oRclU1FjKHrgmwFvkS+qHMRXyMTBI3gk0iW5fN9zaXsxReViIVvh3wprRGDtx2Z9EYk9l+bgeyDOAgF/wGqvAhOrBONuwAAAABJRU5ErkJggg==";
const _imports_1$2 = "" + __buildAssetsURL("wts.c542431b.png");
const _sfc_main$3 = {
  props: ["index"],
  name: "ToggleDiv",
  data: function() {
    return {
      phone: "",
      message: "",
      error: "",
      isShow: false
    };
  },
  props: {
    msg: String
  },
  methods: {
    async whatsappSubmit() {
      try {
        const response = await axios.post("https://safwat-backend.scales.agency/api/add-whatsapp-number", {
          phone_number: this.phone
        });
        this.phone = "";
        this.message = response.data.message;
        this.error = "";
        console.log(this.city.length);
      } catch (er) {
        this.error = er.response.data.errors.phone_number[0];
      }
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="text-end container"><div style="${ssrRenderStyle({ "border-bottom": "1px solid #F2F2F2", "margin-top": "25px", "margin-bottom": "15px" })}"></div><h3 class="text-lg font-bold px-1 pb-2 font-dinar"><span><span>حفظ هذا العرض لوقت لاحق </span></span></h3>`);
  if (!_ctx.message) {
    _push(`<div><button style="${ssrRenderStyle(!_ctx.isShow ? null : { display: "none" })}" class="flex justify-center bg-gray-200 dc-btn-2 font-dinar"><img class="wtsapimg mx-1 h-5"${ssrRenderAttr("src", _imports_0$3)} alt="">ارسله لي عبر الوتس اب</button><div style="${ssrRenderStyle(_ctx.isShow ? null : { display: "none" })}"><form class="container"><div class="flex justify-between"><div class="relative w-full selt-frmmm"><input maxlength="8" pattern="\\d*" oninput="javascript: if (this.value.length &gt; this.maxLength) this.value = this.value.slice(0, this.maxLength);" class="${ssrRenderClass([!!_ctx.error && "error_border", "py-4 w-full rounded"])}"${ssrRenderAttr("value", _ctx.phone)} type="number" placeholder="5xx xxx xxx" style="${ssrRenderStyle({ "background": "#f2f2f2", "border-style": "none", "padding-left": "83px", "direction": "ltr" })}"><div class="flex items-center gap-x-1 absolute top-1/2 left-3 transform -translate-y-1/2"><span>+966</span><img src="https://cdn.countryflags.com/thumbs/saudi-arabia/flag-400.png" class="w-5 -mt-[0.5px]"></div></div><button href=""><img class="wtsim"${ssrRenderAttr("src", _imports_1$2)} alt=""></button></div></form>`);
    if (!!_ctx.error) {
      _push(`<p class="text_yellow text-start p-4">${ssrInterpolate(_ctx.error)}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if (!!_ctx.message) {
    _push(`<div class="flex items-center justify-center"><div><p class="bg-[#F2F2F2] py-2 sm:px-12 w-screen sm:w-auto justify-center rounded flex gap-2 items-center">تم الارسال. تحقق من الواتس اب <span class="w-5 h-5 flex justify-center items-center bg-[#B7C226] rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 text-[#F2F2F2]"><path stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg></span></p></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/whatsappForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0$2 = "" + __buildAssetsURL("Logo.00193b2c.png");
const _imports_1$1 = "" + __buildAssetsURL("olivia-optimize.13d07b4f.webp");
const _sfc_main$2 = {
  name: "ToggleDiv",
  data: function() {
    return {
      isShow: false,
      name: "",
      phone: "",
      address: "",
      Staddress: "",
      message: "",
      errors: {},
      cityes: [
        "الرياض",
        "جدة",
        "مكة المكرمة",
        "المدينة المنورة",
        "الأحساء",
        "الدمام",
        "الخبر",
        "القطيف",
        "الطائف",
        "بريدة",
        "عنيزة",
        "أبها",
        "خميس مشيط",
        "جازان",
        "تبوك",
        "نجران",
        "سكاكا",
        "حائل",
        "الباحة",
        "عرعر"
      ]
    };
  },
  props: ["msg", "product"],
  methods: {
    async purchase() {
      try {
        const response = await axios.post("https://safwat-backend.scales.agency/api/order", {
          name: this.name,
          phone_number: this.phone,
          address: this.address,
          Staddress: this.Staddress,
          selectedProduct: this.product
        });
        let phone = this.phone;
        this.name = "", this.phone = "", this.address = "", this.Staddress = "", this.message = response.data.message;
        return navigateTo("/message?phone=" + phone);
      } catch (er) {
        this.errors = er.response.data.errors;
      }
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WhatsappForm = __nuxt_component_0$1;
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<!--[--><section class="text-end px-3"><div class="swiper-container swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-rtl swiper-backface-hidden mb-14 truncate"><div class="container mt-3"><a class="w-full block text-center dc-btn border rounded-lg font-dinar" href="#first-section">اطلبه الآن</a></div>`);
  _push(ssrRenderComponent(_component_WhatsappForm, null, null, _parent));
  _push(`<div id="first-section" class="container" style="${ssrRenderStyle({ "border-bottom": "1px solid #F2F2F2", "margin-top": "25px", "margin-bottom": "15px" })}"></div><main id="second-section"><div class="container text-center"><div class="border-solid border-2 border-slate-100 rounded-lg px-2 pb-3"><h1 class="text-2xl text-center font-medium mb-4 mt-3 font-dinar"><span><span>اطلبه الآن </span></span></h1>`);
  if (!_ctx.message) {
    _push(`<form class="text-end"><div class="mb-2 selt-frm"><input${ssrRenderAttr("value", _ctx.name)} class="${ssrRenderClass([!!_ctx.errors.name && "error_border", "font-dinar pr-3 w-full border rounded-lg pl-8 py-3.5 text-end"])}" type="text" placeholder="الاسم" style="${ssrRenderStyle({ "background": "#f2f2f2", "border-style": "none" })}"></div>`);
    if (!!_ctx.errors.name) {
      _push(`<p class="text_yellow text-right p-2 font-dinar">${ssrInterpolate(_ctx.errors.name[0])}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="mb-2 relative border rounded-lg selt-frm"><input${ssrRenderAttr("value", _ctx.phone)} maxlength="8" pattern="\\d*" oninput="javascript: if (this.value.length &gt; this.maxLength) this.value = this.value.slice(0, this.maxLength);" class="${ssrRenderClass([!!_ctx.errors.phone_number && "error_border", "pr-3 border rounded-lg w-full pl-8 form-control py-3.5"])}" type="number" placeholder="5xx xxx xxx" style="${ssrRenderStyle({ "background": "#f2f2f2", "border-style": "none", "padding-left": "83px", "direction": "ltr" })}"><div class="flex items-center gap-x-1 absolute top-1/2 left-3 transform -translate-y-1/2"><span>+966</span><img src="https://cdn.countryflags.com/thumbs/saudi-arabia/flag-400.png" class="w-5 -mt-[0.5px]"></div></div>`);
    if (!!_ctx.errors.phone_number) {
      _push(`<p class="text_yellow text-right p-2">${ssrInterpolate(_ctx.errors.phone_number[0])}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="mb-2 selt-frm"><select style="${ssrRenderStyle({ "direction": "rtl", "border-left": "12px" })}" class="${ssrRenderClass([!!_ctx.errors.address && "error_border", "bg-[#F2F2F2] px-2 border rounded-lg w-full py-3.5 select_arrow font-dinar"])}" required><option value="">اختر مدينة</option><!--[-->`);
    ssrRenderList(_ctx.cityes, (city) => {
      _push(`<option${ssrRenderAttr("value", city)}>${ssrInterpolate(city)}</option>`);
    });
    _push(`<!--]--></select></div>`);
    if (!!_ctx.errors.address) {
      _push(`<p class="text_yellow text-right p-2">${ssrInterpolate(_ctx.errors.address[0])}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="mb-2 selt-frm font-dinar"><input${ssrRenderAttr("value", _ctx.Staddress)} class="${ssrRenderClass([!!_ctx.errors.Staddress && "error_border", "pr-3 border rounded-lg w-full pl-8 py-3.5 text-end"])}" type="text" placeholder="العنوان (الحي، الشارع)" style="${ssrRenderStyle({ "background": "#f2f2f2", "border-style": "none" })}"></div>`);
    if (!!_ctx.errors.Staddress) {
      _push(`<p class="text_yellow text-right p-2 font-dinar">${ssrInterpolate(_ctx.errors.Staddress[0])}</p>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="frm-s flex justify-between selt-frm-txt mt-4"><span><span class="vertical-align: inherit;"><span class="vertical-align: inherit;"> x${ssrInterpolate($props.product.quantity)}</span></span></span><span class="font-dinar">${ssrInterpolate($props.product.name)}</span></div><div class="flex justify-between selt-frm-txt mt-3"><span><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">${ssrInterpolate($props.product.price * $props.product.quantity)} <span class="font-dinar">ر.س</span></span></span></span><span><span class="vertical-align: inherit;"><span class="font-dinar">السعر شامل الضريبة</span></span></span></div><div class="flex justify-between selt-frm-txt mt-3 font-dinar"><span><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">مجاني</span></span></span><span><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">الشحن السريع</span></span></span></div><div class="selt-frm-txt-d"></div><div class="flex justify-between selt-frm-txt mt-3"><span style="${ssrRenderStyle({ "font-weight": "bold" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">${ssrInterpolate($props.product.price * $props.product.quantity)} <span class="font-dinar">ر.س</span></span></span></span><span class="font-weight: bold;"><span class="vertical-align: inherit;"><span class="font-dinar font-bold">الاجمالي </span></span></span></div><div class="mt-4 px-2"><button type="submit" class="dc-btn font-dinar">شراء</button></div></form>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></main></div></section><section class="flex justify-start"><div class="w-24 ml-6 mt-12"><img${ssrRenderAttr("src", _imports_0$2)}></div></section><section class="flex justify-end"><div class="w-full max-w-sm mbimg140"><img${ssrRenderAttr("src", _imports_1$1)}></div></section><section class="text-end px-3 frmbtm mt-(-48) pt-48 font-dinar"><div class="container px-1" style="${ssrRenderStyle({ "padding-bottom": "38px" })}"><h2 style="${ssrRenderStyle({ "color": "#343434" })}" class="text-4xl px-2 flex justify-end mb-3 mt-5"><span><span>لماذا صفوة الجوف؟ </span></span></h2><p class="flex justify-end px-2" style="${ssrRenderStyle({ "color": "#343434" })}"><span><span>لأننا نقدم منتج فاخر وعضوي ١٠٠٪ يعتني بجودة غذائكم وصحتكم..</span></span></p><div><h2 style="${ssrRenderStyle({ "font-size": "30px", "color": "#343434" })}" class="mb-3 px-2 flex justify-end mt-4"><span><span>  جودة المحاصيل </span></span>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: "fa-solid fa-check",
    class: "fnaicn"
  }, null, _parent));
  _push(`</h2><p class="flex justify-end px-2" style="${ssrRenderStyle({ "font-size": "16px", "color": "#343434" })}"><span><span>في مزرعتنا أكثر من ٨٠٠,٠٠٠ شجرة زيتون ُتنتج أفضل محصول سنوياً، ومع ذلك نقوم بجرد المحصول لاستبعاد حبات الزيتون المعيبة لضمان أفضل زيت وقت العصر.</span></span></p></div><div><h2 style="${ssrRenderStyle({ "font-size": "30px", "color": "#343434" })}" class="mb-3 px-2 flex justify-end mt-3"><span><span>  حموضة أقل </span></span>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: "fa-solid fa-check",
    class: "fnaicn"
  }, null, _parent));
  _push(`</h2><p class="flex justify-end px-2" style="${ssrRenderStyle({ "font-size": "16px", "color": "#343434" })}"><span><span>زيت صفوة الجوف إضافة شهية لأطباقك تنقل نكهتها لمرحلة مختلفة من اللذة، بفضل طعمه الممتاز الخالي من المرارة.</span></span></p></div><div><h2 style="${ssrRenderStyle({ "font-size": "30px", "color": "#343434" })}" class="mb-3 px-2 flex justify-end mt-3"><span><span>  طعم مميز </span></span>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: "fa-solid fa-check",
    class: "fnaicn"
  }, null, _parent));
  _push(`</h2><p class="flex justify-end px-2" style="${ssrRenderStyle({ "font-size": "16px", "color": "#343434" })}"><span><span>زيت صفوة الجوف إضافة شهية لأطباقك تنقل نكهتها لمرحلة مختلفة من اللذة، بفضل طعمه الممتاز الخالي من المرارة.</span></span></p></div><a class="dc-btn mt-3 block w-full text-center" href="#first-section">اطلبه الآن</a></div></section><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/purchaseForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0$1 = "" + __buildAssetsURL("avatar.9c77b17e.jpeg");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-end pt-4 px-2 pb-6 font-dinar" }, _attrs))}><div class="container"><h1 style="${ssrRenderStyle({ "text-align": "center", "font-size": "30px" })}"><span style="${ssrRenderStyle({ "font-weight": "bold", "font-family": "sans-serif" })}"><span><span>+200,000</span></span></span><span><span>  عميل </span></span><br><span><span>يثقون بصفوة الجوف </span></span></h1><div class="flex justify-center pt-0 mt-3" style="${ssrRenderStyle({ "text-align": "center" })}"><div class="flex text-center p-2"><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span></div><span class="flex p-2 text-xs font-sens"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">4.8 out of 5</span></span></span></div><div class="flex mt-4 py-4 px-2" style="${ssrRenderStyle({ "border-radius": "8px", "border": "1px solid #f2f2f2" })}"><div class="flex-1"><div class="flex-1 justify-between align-items-start"><span class="flex justify-start"><span class="bg-yellow-400 flex text-xs border rounded-full py-1 px-3"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">  قام بالشراء</span></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="flex flex-row-reverse mr-1 w-4 h-4"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd"></path></svg></span></span><div class="flex flex-row-reverse"><img${ssrRenderAttr("src", _imports_0$1)} class="w-12 rvw-avt-img"></div><div class="rvw-txt pr-8 -top-4"><span class="font-bold"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">عبدالله الذياب </span></span></span><div class="flex justify-end p-2"><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span></div><p class="mt-2 mb-0"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">أفضل وأروع منتج </span></span></p></div></div></div></div><div class="flex mt-4 py-4 px-2" style="${ssrRenderStyle({ "border-radius": "8px", "border": "1px solid #f2f2f2" })}"><div class="flex-1"><div class="flex-1 justify-between align-items-start"><span class="flex justify-start"><span class="bg-yellow-400 flex text-xs border rounded-full py-1 px-3"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">  قام بالشراء</span></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="flex flex-row-reverse mr-1 w-4 h-4"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd"></path></svg></span></span><div class="flex flex-row-reverse"><img${ssrRenderAttr("src", _imports_0$1)} class="w-12 rvw-avt-img"></div><div class="rvw-txt pr-8 -top-4"><span class="font-bold"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">إسماعيل حسين </span></span></span><div class="flex justify-end p-2"><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span></div><p class="mt-2 mb-0"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">زيت عصرة أولى ماعليه كلام </span></span></p></div></div></div></div><div class="flex mt-4 py-4 px-2" style="${ssrRenderStyle({ "border-radius": "8px", "border": "1px solid #f2f2f2" })}"><div class="flex-1"><div class="flex-1 justify-between align-items-start"><span class="flex justify-start"><span class="bg-yellow-400 flex text-xs border rounded-full py-1 px-3"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">  قام بالشراء</span></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="flex flex-row-reverse mr-1 w-4 h-4"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd"></path></svg></span></span><div class="flex flex-row-reverse"><img${ssrRenderAttr("src", _imports_0$1)} class="w-12 rvw-avt-img"></div><div class="rvw-txt pr-8 -top-4"><span class="font-bold"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">Hozaifa Alsafwa </span></span></span><div class="flex justify-end p-2"><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span></div><p class="mt-2 mb-0"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">زيت زيتون عضوي خورافييييي - طعم ولا اروع في الأكل والسلطات بالذات مع سطلة الفيتا واو واو واو - اشتري وانت مغمض </span></span></p></div></div></div></div><div class="flex mt-4 py-4 px-2" style="${ssrRenderStyle({ "border-radius": "8px", "border": "1px solid #f2f2f2" })}"><div class="flex-1"><div class="flex-1 justify-between align-items-start"><span class="flex justify-start"><span class="bg-yellow-400 flex text-xs border rounded-full py-1 px-3"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">  قام بالشراء</span></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="flex flex-row-reverse mr-1 w-4 h-4"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd"></path></svg></span></span><div class="flex flex-row-reverse"><img${ssrRenderAttr("src", _imports_0$1)} class="w-12 rvw-avt-img"></div><div class="rvw-txt pr-8 -top-4"><span class="font-bold"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">عباد القثامي </span></span></span><div class="flex justify-end p-2"><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span></div><p class="mt-2 mb-0"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">عباد القثامي </span></span></p></div></div></div></div><div class="flex mt-4 py-4 px-2" style="${ssrRenderStyle({ "border-radius": "8px", "border": "1px solid #f2f2f2" })}"><div class="flex-1"><div class="flex-1 justify-between align-items-start"><span class="flex justify-start"><span class="bg-yellow-400 flex text-xs border rounded-full py-1 px-3"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">  قام بالشراء</span></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="flex flex-row-reverse mr-1 w-4 h-4"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd"></path></svg></span></span><div class="flex flex-row-reverse"><img${ssrRenderAttr("src", _imports_0$1)} class="w-12 rvw-avt-img"></div><div class="rvw-txt pr-8 -top-4"><span class="font-bold"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">وعد الحربي </span></span></span><div class="flex justify-end p-2"><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span></div><p class="mt-2 mb-0"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">افضل زيت زيتون جربته 👌🏻❤️ </span></span></p></div></div></div></div><div class="flex mt-4 py-4 px-2" style="${ssrRenderStyle({ "border-radius": "8px", "border": "1px solid #f2f2f2" })}"><div class="flex-1"><div class="flex-1 justify-between align-items-start"><span class="flex justify-start"><span class="bg-yellow-400 flex text-xs border rounded-full py-1 px-3"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">  قام بالشراء</span></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="flex flex-row-reverse mr-1 w-4 h-4"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd"></path></svg></span></span><div class="flex flex-row-reverse"><img${ssrRenderAttr("src", _imports_0$1)} class="w-12 rvw-avt-img"></div><div class="rvw-txt pr-8 -top-4"><span class="font-bold"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;"> أم ريثان وجيانا غزاوي </span></span></span><div class="flex justify-end p-2"><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span></div><p class="mt-2 mb-0"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">ممتاز وفاااخر ولذييييذ جدا استمتعت فيه انا وآسرتي❤️شكرا صفوة الجوف ❤️❤️الله يبارك لكم في رزقكم كل ما اخلصتو في العمل </span></span></p></div></div></div></div><div class="flex mt-4 py-4 px-2" style="${ssrRenderStyle({ "border-radius": "8px", "border": "1px solid #f2f2f2" })}"><div class="flex-1"><div class="flex-1 justify-between align-items-start"><span class="flex justify-start"><span class="bg-yellow-400 flex text-xs border rounded-full py-1 px-3"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">  قام بالشراء</span></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="flex flex-row-reverse mr-1 w-4 h-4"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd"></path></svg></span></span><div class="flex flex-row-reverse"><img${ssrRenderAttr("src", _imports_0$1)} class="w-12 rvw-avt-img"></div><div class="rvw-txt pr-8 -top-4"><span class="font-bold"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">رائد الشريف </span></span></span><div class="flex justify-end p-2"><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span></div><p class="mt-2 mb-0"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">زيت اصلي واسعار مناسبة </span></span></p></div></div></div></div><div class="flex mt-4 py-4 px-2" style="${ssrRenderStyle({ "border-radius": "8px", "border": "1px solid #f2f2f2" })}"><div class="flex-1"><div class="flex-1 justify-between align-items-start"><span class="flex justify-start"><span class="bg-yellow-400 flex text-xs border rounded-full py-1 px-3"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">  قام بالشراء</span></span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="flex flex-row-reverse mr-1 w-4 h-4"><path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd"></path></svg></span></span><div class="flex flex-row-reverse"><img${ssrRenderAttr("src", _imports_0$1)} class="w-12 rvw-avt-img"></div><div class="rvw-txt pr-8 -top-4"><span class="font-bold"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">ضيف الله الازوري </span></span></span><div class="flex justify-end p-2"><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span></div><p class="mt-2 mb-0"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}"><span style="${ssrRenderStyle({ "vertical-align": "inherit" })}">ممتاز وتشكرون على تعاملكم </span></span></p></div></div></div></div><div class="btmlnkbtn"><a class="border-solid btmlnkb border-black rounded-lg dc-btn-2 block" href="https://safwat-aljawf.com"> للمزيد زر Safwat-aljawf.com</a></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/review.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const carousel = "";
const _imports_0 = "" + __buildAssetsURL("hero.5e5414c2.jpg");
const _imports_1 = "" + __buildAssetsURL("Rectangle.1b389b24.png");
const _sfc_main = {
  components: {
    Carousel,
    Slide,
    Navigation
  },
  data() {
    return {
      products: [],
      names: [],
      adtProduct: {},
      selectedProduct: [],
      quantity: 1,
      settings: {
        // carousel settings
        settings: {
          itemsToShow: 2,
          snapAlign: "center",
          dir: "rtl"
        },
        breakpoints: {
          300: {
            itemsToShow: 2.4,
            touchDrag: true,
            snapAlign: "start",
            transition: 500,
            dir: "rtl"
          },
          700: {
            itemsToShow: 5,
            snapAlign: "start",
            dir: "rtl",
            transition: 500
          },
          1024: {
            itemsToShow: 8,
            snapAlign: "start",
            dir: "rtl",
            transition: 500
          }
        }
      }
    };
  },
  mounted() {
    axios.get("https://safwat-backend.scales.agency/api/product").then((response) => {
      this.products = response.data.products;
      if (this.products.length > 0) {
        this.adtProduct = { ...this.products[0], quantity: 1 };
      }
    });
  },
  methods: {
    addToCart(product) {
      this.adtProduct = { ...product, quantity: this.quantity };
    },
    qntyIncrementAndDecrement(type) {
      if (type == "increment") {
        this.quantity++;
        this.adtProduct.quantity = this.adtProduct.quantity + 1;
      } else if (type == "decrement" && this.quantity > 1) {
        this.quantity--;
        this.adtProduct.quantity = this.adtProduct.quantity - 1;
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_carousel = resolveComponent("carousel");
  const _component_Slide = resolveComponent("Slide");
  const _component_navigation = resolveComponent("navigation");
  const _component_PurchaseForm = __nuxt_component_0;
  const _component_review = __nuxt_component_1;
  _push(`<!--[--><section><div class="container-fluid pl-0 pr-0"><img class="w-full"${ssrRenderAttr("src", _imports_0)}></div></section><section class="text-end px-2 font-dinar"><div class="container"><div class="flex flex-row-reverse items-end pt-0 mt-3 font-sans"><div class="flex justify-end p-2"><span class="flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class="flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class="flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class="flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span><span class="flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-clr w-5 h-5"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd"></path></svg></span></div><span class="flex text-center text-gray-500 p-2 text-xs me-1"><span class="vertical-align: inherit;"><span class="text-xs vertical-align: inherit;">48,120</span></span></span></div><h2 class="text-3xl red-700 px-2 font-bold mb-3"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">زيت زيتون صفوة الجوف</span></span></h2><h3 class="text-base px-2 mb-4"><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">بكر ممتاز عصرة اولى</span></span></h3><p class="px-2"><span class="text-base px-2 vertical-align: inherit;"><span class="vertical-align: inherit;">زيت زيتون صفوة الجوف، بمثابة الذهب الخالص، انتقيناه من أفضل محاصيلنا مزارعنا بالجوف، حيث يتم إنتاج زيت زيتون بكرة عضوي ١٠٠٪؜ عصرة أولى على البارد.</span></span></p><img${ssrRenderAttr("src", _imports_1)} class="w-full mt-5 px-2"></div></section><section class="mt-4 text-end"><div class="container mx-auto"><h3 class="text-lg px-3 font-bold mb-4 font-dinar">العرض</h3><div class="mb-6 truncate">`);
  _push(ssrRenderComponent(_component_carousel, {
    settings: $data.settings,
    breakpoints: _ctx.breakpoints
  }, {
    addons: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="sm:block hidden"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_navigation, null, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "sm:block hidden" }, [
            createVNode(_component_navigation)
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($data.products, (product) => {
          _push2(ssrRenderComponent(_component_Slide, {
            key: product.id,
            class: "prbt"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="cprbt font-dinar"${_scopeId2}><div class="prdtgg"${_scopeId2}><div class="mt-2"${_scopeId2}><div class="prdimg1 w-20"${_scopeId2}><img class="w-full"${ssrRenderAttr("src", product.image)}${_scopeId2}><span class="absolute prdtbg"${_scopeId2}><span${_scopeId2}><span${_scopeId2}>${ssrInterpolate(product.namEe)}</span></span><br${_scopeId2}></span></div><div class="prdimg2 w-20"${_scopeId2}><img class="w-full"${ssrRenderAttr("src", product.image)}${_scopeId2}><span class="absolute prdtbg"${_scopeId2}><span${_scopeId2}><span${_scopeId2}>${ssrInterpolate(product.namEe)}</span></span><br${_scopeId2}></span></div><div class="prdimg3 w-20"${_scopeId2}><img class="w-full"${ssrRenderAttr("src", product.image)}${_scopeId2}><span class="absolute prdtbg"${_scopeId2}><span${_scopeId2}><span${_scopeId2}>${ssrInterpolate(product.namEe)}</span></span><br${_scopeId2}></span></div></div><div class="mt-28 text-right"${_scopeId2}><h3 class="text-base px-1 mr-2 font-bold font-sans"${_scopeId2}>${ssrInterpolate(product.name)}</h3><h4 class="text-xs px-1 mr-2 font-sans"${_scopeId2}>${ssrInterpolate(product.description)}</h4><p class="text-gray-500 px-1 font-normal mr-1 mt-2 text-base line-through font-sans"${_scopeId2}>${ssrInterpolate(product.DiscountPrice)}</p><div class="flex jutify-between items-center"${_scopeId2}><p class="text-base px-1 font-medium mr-1 text-red-700 cursor-auto"${_scopeId2}>ر.س <span class="font-sans"${_scopeId2}>${ssrInterpolate(product.price)}</span></p>`);
                if (product.economical == 1) {
                  _push3(`<span class="text-[8px] bg-[#e66862] py-1 px-2 text-white rounded-xl"${_scopeId2}>الاكثر توفيراً</span>`);
                } else {
                  _push3(`<!---->`);
                }
                _push3(`</div></div><div class="crtbtnn flex"${_scopeId2}>`);
                if ($data.adtProduct.id != product.id) {
                  _push3(`<button${_scopeId2}><div class="flex-1 ml-3 mt-5"${_scopeId2}><span class="befrcrt"${_scopeId2}><span class="dtbtn"${_scopeId2}>.</span></span></div></button>`);
                } else {
                  _push3(`<div class="abtnw"${_scopeId2}><span class="aftercrt"${_scopeId2}><span class="atbtn"${_scopeId2}>.</span></span></div>`);
                }
                _push3(`</div></div></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: "cprbt font-dinar",
                    onClick: ($event) => $options.addToCart(product)
                  }, [
                    createVNode("div", { class: "prdtgg" }, [
                      createVNode("div", { class: "mt-2" }, [
                        createVNode("div", { class: "prdimg1 w-20" }, [
                          createVNode("img", {
                            class: "w-full",
                            src: product.image
                          }, null, 8, ["src"]),
                          createVNode("span", { class: "absolute prdtbg" }, [
                            createVNode("span", null, [
                              createVNode("span", null, toDisplayString(product.namEe), 1)
                            ]),
                            createVNode("br")
                          ])
                        ]),
                        createVNode("div", { class: "prdimg2 w-20" }, [
                          createVNode("img", {
                            class: "w-full",
                            src: product.image
                          }, null, 8, ["src"]),
                          createVNode("span", { class: "absolute prdtbg" }, [
                            createVNode("span", null, [
                              createVNode("span", null, toDisplayString(product.namEe), 1)
                            ]),
                            createVNode("br")
                          ])
                        ]),
                        createVNode("div", { class: "prdimg3 w-20" }, [
                          createVNode("img", {
                            class: "w-full",
                            src: product.image
                          }, null, 8, ["src"]),
                          createVNode("span", { class: "absolute prdtbg" }, [
                            createVNode("span", null, [
                              createVNode("span", null, toDisplayString(product.namEe), 1)
                            ]),
                            createVNode("br")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "mt-28 text-right" }, [
                        createVNode("h3", { class: "text-base px-1 mr-2 font-bold font-sans" }, toDisplayString(product.name), 1),
                        createVNode("h4", { class: "text-xs px-1 mr-2 font-sans" }, toDisplayString(product.description), 1),
                        createVNode("p", { class: "text-gray-500 px-1 font-normal mr-1 mt-2 text-base line-through font-sans" }, toDisplayString(product.DiscountPrice), 1),
                        createVNode("div", { class: "flex jutify-between items-center" }, [
                          createVNode("p", { class: "text-base px-1 font-medium mr-1 text-red-700 cursor-auto" }, [
                            createTextVNode("ر.س "),
                            createVNode("span", { class: "font-sans" }, toDisplayString(product.price), 1)
                          ]),
                          product.economical == 1 ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-[8px] bg-[#e66862] py-1 px-2 text-white rounded-xl"
                          }, "الاكثر توفيراً")) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "crtbtnn flex" }, [
                        $data.adtProduct.id != product.id ? (openBlock(), createBlock("button", { key: 0 }, [
                          createVNode("div", { class: "flex-1 ml-3 mt-5" }, [
                            createVNode("span", { class: "befrcrt" }, [
                              createVNode("span", { class: "dtbtn" }, ".")
                            ])
                          ])
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          class: "abtnw"
                        }, [
                          createVNode("span", { class: "aftercrt" }, [
                            createVNode("span", { class: "atbtn" }, ".")
                          ])
                        ]))
                      ])
                    ])
                  ], 8, ["onClick"])
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($data.products, (product) => {
            return openBlock(), createBlock(_component_Slide, {
              key: product.id,
              class: "prbt"
            }, {
              default: withCtx(() => [
                createVNode("div", {
                  class: "cprbt font-dinar",
                  onClick: ($event) => $options.addToCart(product)
                }, [
                  createVNode("div", { class: "prdtgg" }, [
                    createVNode("div", { class: "mt-2" }, [
                      createVNode("div", { class: "prdimg1 w-20" }, [
                        createVNode("img", {
                          class: "w-full",
                          src: product.image
                        }, null, 8, ["src"]),
                        createVNode("span", { class: "absolute prdtbg" }, [
                          createVNode("span", null, [
                            createVNode("span", null, toDisplayString(product.namEe), 1)
                          ]),
                          createVNode("br")
                        ])
                      ]),
                      createVNode("div", { class: "prdimg2 w-20" }, [
                        createVNode("img", {
                          class: "w-full",
                          src: product.image
                        }, null, 8, ["src"]),
                        createVNode("span", { class: "absolute prdtbg" }, [
                          createVNode("span", null, [
                            createVNode("span", null, toDisplayString(product.namEe), 1)
                          ]),
                          createVNode("br")
                        ])
                      ]),
                      createVNode("div", { class: "prdimg3 w-20" }, [
                        createVNode("img", {
                          class: "w-full",
                          src: product.image
                        }, null, 8, ["src"]),
                        createVNode("span", { class: "absolute prdtbg" }, [
                          createVNode("span", null, [
                            createVNode("span", null, toDisplayString(product.namEe), 1)
                          ]),
                          createVNode("br")
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "mt-28 text-right" }, [
                      createVNode("h3", { class: "text-base px-1 mr-2 font-bold font-sans" }, toDisplayString(product.name), 1),
                      createVNode("h4", { class: "text-xs px-1 mr-2 font-sans" }, toDisplayString(product.description), 1),
                      createVNode("p", { class: "text-gray-500 px-1 font-normal mr-1 mt-2 text-base line-through font-sans" }, toDisplayString(product.DiscountPrice), 1),
                      createVNode("div", { class: "flex jutify-between items-center" }, [
                        createVNode("p", { class: "text-base px-1 font-medium mr-1 text-red-700 cursor-auto" }, [
                          createTextVNode("ر.س "),
                          createVNode("span", { class: "font-sans" }, toDisplayString(product.price), 1)
                        ]),
                        product.economical == 1 ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "text-[8px] bg-[#e66862] py-1 px-2 text-white rounded-xl"
                        }, "الاكثر توفيراً")) : createCommentVNode("", true)
                      ])
                    ]),
                    createVNode("div", { class: "crtbtnn flex" }, [
                      $data.adtProduct.id != product.id ? (openBlock(), createBlock("button", { key: 0 }, [
                        createVNode("div", { class: "flex-1 ml-3 mt-5" }, [
                          createVNode("span", { class: "befrcrt" }, [
                            createVNode("span", { class: "dtbtn" }, ".")
                          ])
                        ])
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "abtnw"
                      }, [
                        createVNode("span", { class: "aftercrt" }, [
                          createVNode("span", { class: "atbtn" }, ".")
                        ])
                      ]))
                    ])
                  ])
                ], 8, ["onClick"])
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div><div class="flex items-center justify-between mb-6"><div class="flex justify-between items-center" style="${ssrRenderStyle({ "width": "250px", "padding": "10px 25px", "border-radius": "5px", "color": "rgb(0,0,0)", "border": "1px solid #F2F2F2" })}"><span class="fnicn cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6"></path></svg></span> ${ssrInterpolate($data.quantity)} <span class="fnicn cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6"></path></svg></span></div><h3 class="text-base px-3 font-bold">الكمية</h3></div></div></section>`);
  _push(ssrRenderComponent(_component_PurchaseForm, { product: $data.adtProduct }, null, _parent));
  _push(ssrRenderComponent(_component_review, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-881a2bc0.js.map
