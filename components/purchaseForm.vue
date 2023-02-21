<template>
   <section class="text-end px-3">


    
        <div  class="swiper-container swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-rtl swiper-backface-hidden mb-14 truncate"  >                 

        <div class="container mt-3">
            <a class="w-full block text-center dc-btn border rounded-lg font-dinar" href="#first-section">اطلبه الآن</a>
        </div>

            <WhatsappForm/>



        <div id="first-section" class="container" style="border-bottom: 1px solid #F2F2F2;margin-top: 25px;margin-bottom: 15px;" ></div>
           <main  id="second-section">
            <div class="container text-center" >
                <div class=" border-solid border-2  border-slate-100 rounded-lg  px-2 pb-3" >
                    <h1 class=" text-2xl text-center font-medium mb-4 mt-3 font-dinar"><span><span>اطلبه الآن
                    </span></span></h1>
                    <form v-if="!message" @submit.prevent="purchase" class="text-end">
                        <div  class="mb-2  selt-frm">
                            <input v-model="name" :class="!!errors.name && 'error_border'" class="font-dinar pr-3 w-full border rounded-lg pl-8 py-3.5 text-end" type="text" placeholder="الاسم" style="background: #f2f2f2;border-style: none;" />
                        </div>
                        <!--Error-->
                        <p v-if="!!errors.name" class="text_yellow text-right p-2 font-dinar">{{ errors.name[0] }}</p>

                        <div class="mb-2 relative border rounded-lg selt-frm">
                            <input v-model="phone" maxlength="8" pattern="\d*" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" :class="!!errors.phone_number && 'error_border'" class=" pr-3 border rounded-lg w-full pl-8 form-control py-3.5" type="number" placeholder="5xx xxx xxx" style="background: #f2f2f2;border-style: none;padding-left: 83px;direction: ltr;">
                            <div class="flex items-center gap-x-1 absolute top-1/2 left-3 transform -translate-y-1/2"><span>+966</span><img src="https://cdn.countryflags.com/thumbs/saudi-arabia/flag-400.png" class="w-5 -mt-[0.5px]"/></div>
                        </div>
                        <!--Error-->
                        <p v-if="!!errors.phone_number" class="text_yellow text-right p-2">{{ errors.phone_number[0] }}</p>
                        <div  class="mb-2 selt-frm" >
                            <!-- <input v-model="address" :class="!!errors.address && 'error_border'" class=" pr-3 border rounded-lg w-full pl-8 py-3.5 text-end" type="text" placeholder="مدينة" style="background: #f2f2f2;border-style: none;"> -->
                            <select style="direction: rtl; border-left: 12px;" v-model="address" :class="!!errors.address && 'error_border'" required  class="bg-[#F2F2F2] px-2 border rounded-lg w-full py-3.5 select_arrow font-dinar">
                                <option value="">اختر مدينة</option>
                                <option v-for="city in cityes" :key="city" :value="city">{{ city }}</option>
                            </select>
                        </div>
                        <!--Error-->
                        <p v-if="!!errors.address" class="text_yellow text-right p-2">{{ errors.address[0] }}</p>
                        <div  class="mb-2   selt-frm  font-dinar" >
                            <input v-model="Staddress"  :class="!!errors.Staddress && 'error_border'" class=" pr-3 border rounded-lg w-full pl-8 py-3.5 text-end" type="text" placeholder="العنوان (الحي، الشارع)" style="background: #f2f2f2;border-style: none;">
                        </div>
                    <!--Error-->
                    <p v-if="!!errors.Staddress" class="text_yellow text-right p-2 font-dinar">{{ errors.Staddress[0] }}</p>
                       <div class="frm-s flex justify-between selt-frm-txt mt-4">
                            <span>
                                <span class="vertical-align: inherit;">
                                    <span class="vertical-align: inherit;">
                                        x{{ product.quantity }}
                                    </span>
                                </span>
                            </span>
                            <span class="font-dinar">
                              {{ product.name }}

                            </span>
                        </div>
                      <div class="flex justify-between selt-frm-txt mt-3"><span><span class="vertical-align: inherit;"><span class="vertical-align: inherit;"> {{ product.price * product.quantity }} <span class="font-dinar">ر.س</span></span></span></span><span><span class="vertical-align: inherit;"><span class="font-dinar">السعر شامل الضريبة</span></span></span></div>
                        <div class="flex justify-between selt-frm-txt mt-3 font-dinar"><span><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">مجاني</span></span></span><span><span class="vertical-align: inherit;"><span class="vertical-align: inherit;">الشحن السريع</span></span></span></div>
                        <div class="selt-frm-txt-d "></div>
                        <div class="flex justify-between selt-frm-txt mt-3"><span style="font-weight: bold;"><span style="vertical-align: inherit;"><span style="vertical-align: inherit;">{{ product.price * product.quantity }} <span class="font-dinar ">ر.س</span>
                        </span></span></span><span class="font-weight: bold;"><span class="vertical-align: inherit;"><span class="font-dinar font-bold">الاجمالي </span></span></span></div>
                        <div class="mt-4 px-2"><button type="submit" class="dc-btn font-dinar">شراء</button></div>
                        
                    </form>
                </div>
            </div>
        </main>
    </div>
     
   
    </section>
    <section class="flex justify-start"> 
        <div class="w-24 ml-6 mt-12"><img src="~/assets/img/Logo.png"></div> 
    </section>

    <section class="flex justify-end"> 
        <div class="w-full max-w-sm mbimg140"><img src="~/assets/img/olivia-optimize.webp"></div> 
    </section>
    

    <section class="text-end px-3 frmbtm  mt-(-48) pt-48 font-dinar">
        <div class="container px-1  " style="padding-bottom: 38px;" >
            <h2 style="color: #343434;" class="text-4xl px-2 flex justify-end mb-3 mt-5"><span ><span >لماذا صفوة الجوف؟
            </span></span></h2>
            <p class="flex justify-end px-2" style="color: #343434;"><span ><span >لأننا نقدم منتج فاخر وعضوي ١٠٠٪ يعتني بجودة غذائكم وصحتكم..</span></span>
              </p>
            <div >
                <h2 style="font-size: 30px;color: #343434;" class="mb-3 px-2 flex justify-end mt-4"><span ><span >&nbsp; جودة المحاصيل
                </span></span><font-awesome-icon icon="fa-solid fa-check" class="fnaicn"/></h2>
                <p class="flex justify-end px-2" style="font-size: 16px;color: #343434;"><span ><span >في مزرعتنا أكثر من ٨٠٠,٠٠٠ شجرة زيتون ُتنتج أفضل محصول سنوياً، ومع ذلك نقوم بجرد المحصول لاستبعاد حبات الزيتون المعيبة لضمان أفضل زيت وقت العصر.</span></span>
                  </p>
            </div>
            <div >
                <h2 style="font-size: 30px;color: #343434;" class="mb-3 px-2 flex justify-end mt-3"><span ><span >&nbsp; حموضة أقل
                </span></span><font-awesome-icon icon="fa-solid fa-check" class="fnaicn"/></h2>
                <p class="flex justify-end px-2" style="font-size: 16px;color: #343434;"><span ><span >زيت صفوة الجوف إضافة شهية لأطباقك تنقل نكهتها لمرحلة مختلفة من اللذة، بفضل طعمه الممتاز الخالي من المرارة.</span></span>
                  </p>
            </div>
            <div >
                <h2 style="font-size: 30px;color: #343434;" class="mb-3 px-2 flex justify-end mt-3"><span ><span >&nbsp; طعم مميز
                </span></span><font-awesome-icon icon="fa-solid fa-check" class="fnaicn"/></h2>
                <p class="flex justify-end px-2" style="font-size: 16px;color: #343434;"><span ><span >زيت صفوة الجوف إضافة شهية لأطباقك تنقل نكهتها لمرحلة مختلفة من اللذة، بفضل طعمه الممتاز الخالي من المرارة.</span></span>
                  </p>
            </div>
            <a class="dc-btn mt-3 block w-full text-center" href="#first-section">اطلبه الآن</a>
        </div>
    </section>


</template>


<script>

import axios from 'axios';
export default {
    name: "ToggleDiv",
    data: function () {
        return {
            isShow: false,
            name: '',
            phone: '',
            address: '',
            Staddress: '',
            message: '',
            errors: {},
            cityes: [
                'الرياض',
                'جدة',
                'مكة المكرمة',
                'المدينة المنورة',
                'الأحساء', 'الدمام',
                'الخبر',
                'القطيف',
                'الطائف',
                'بريدة',
                'عنيزة',
                'أبها',
                'خميس مشيط',
                'جازان',
                'تبوك',
                'نجران',
                'سكاكا',
                'حائل',
                'الباحة',
                'عرعر',
            ]
        };
    },

   


    props: ['msg', 'product'],
    methods: {
      async  purchase() {
            try {
                const response = await axios.post('https://safwat-backend.scales.agency/api/order', {
                    name: this.name,
                    phone_number: this.phone,
                    address: this.address,
                    Staddress: this.Staddress,
                    selectedProduct: this.product,
                })
                    let phone = this.phone;
                    this.name = '',
                    this.phone = '',
                        this.address = '',
                        this.Staddress = '',
                        this.message = response.data.message
                    return navigateTo('/message?phone='+ phone +'');
            } catch (er) {
                this.errors = er.response.data.errors
            }
        }
    }
};

</script>



<style>


</style>