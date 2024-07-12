<template>
  <div class="top mouth md:px-9 py-9" v-show="year">
  <h2 class="text-[#00A3FF] text-center text-[48px] font-semibold">{{ label }}</h2>
  <h1 class="text-[80px] font-bold" v-show="ruble">{{ rub/rub*mainNumberYear }} RUB</h1>
  <h1 class="text-[80px] font-bold" v-show="tenge">{{Math.floor( kzt/rub*mainNumberYear) }} CZT</h1>
  <h1 class="text-[80px] font-bold" v-show="yuan">{{Math.floor( cny/rub*mainNumberYear) }} CNY</h1>
  
<p>Год</p>
<div v-show="advanced==false">
<p class="text-red-500 font-semibold" v-show="tenge"> * Выгодно: скидка {{ Math.floor( kzt/rub*mainNumber*2) }} KZT</p>
<p class="text-red-500 font-semibold" v-show="yuan">  * Выгодно: скидка {{ Math.floor( cny/rub*mainNumber*2) }} CNY</p>
<p class="text-red-500 font-semibold" v-show="ruble"> * Выгодно: скидка {{ Math.floor(rub/rub*mainNumber*2) }} RUB</p>
</div>
<div class="" v-show="advanced">
  <p class="text-red-500 font-semibold" v-show="tenge">* Выгодно: скидка {{ Math.floor( kzt/rub*mainNumber*2)+Math.floor(kzt/rub*100) }} KZT</p>
  <p class="text-red-500 font-semibold" v-show="yuan"> * Выгодно: скидка {{ Math.floor( cny/rub*mainNumber*2)+Math.floor(cny/rub*100) }} CNY</p>
  <p class="text-red-500 font-semibold" v-show="ruble">* Выгодно: скидка {{ Math.floor(rub/rub*mainNumber*2)+100 }} RUB</p>
</div> 
</div>

</template>

<script setup>
defineProps({rub:Number,
    kzt:Number,
    cny:Number,
    rub:Number,
    mainNumber:Number,
    mainNumberYear:Number,
    label:String,
    advanced:Boolean,
    tenge:Boolean,
    yuan:Boolean,
    ruble:Boolean,
    year:Boolean
})
</script>

<style>

</style>