<template>
    <div class="h-screen items-center flex w-full justify-center">
        <div class="w-full text-center">
            <div class="flex items-center justify-center  font-dinar">
            <div class="flex flex-col items-center">
                <span><img class="sm:w-[60px] sm:h-[60px] w-[40px] h-[40px] mb-2" src="../assets/img/circle-check.png" alt=""></span>
                <h1 class="text-4xl font-bold">شكرا لك</h1>
                <h3 class="text-3xl">تم استقبال طلبك بنجاح</h3>
                <p class="mt-6">سنقوم بتأكيد طلبك عبر الواتس اب</p>
                <span class="font-sens text-xs text-[#b7c33b] sm:mb-20 mb-32 mt-1">{{ route.query.phone }}</span>
            </div>
        </div>
         <a href="whatsapp://send?text=لاتفوتك عروض صفوة الجوف المميزة https%3A%2F%2Fscales.agency%2F" data-action="share/whatsapp/share" class="sm:inline-flex btnclr flex justify-center mx-3 items-center px-4 sm:py-3 py-4 text-white rounded-lg focus:outline-none focus:ring">
                
                    <span class="sm:text-sm text-xl  font-medium">
                       مشاركة العرض مع صديق
                    </span>
                </a>
        </div>
    </div>
</template>
<script setup>
const route = useRoute();
</script>



