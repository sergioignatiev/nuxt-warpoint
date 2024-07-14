<template>
  
  <div class="top mouth md:px-9 py-9 " v-show="mouth">
  <h2 class="text-[#00A3FF] text-center text-[48px] font-semibold">{{ label }}</h2>
 
  <h1 class="text-[80px] font-bold duration-1000 " v-show="ruble">{{ rub/rub*mainNumber }} RUB</h1>
 
  <h1 class="text-[80px] font-bold duration-1000" v-show="tenge">{{Math.floor( kzt/rub*mainNumber) }} CZT</h1>
 
  <h1 class="text-[80px] font-bold duration-1000" v-show="yuan">{{Math.floor( cny/rub*mainNumber) }} CNY</h1>
  
  <p>Месяц</p>
</div>

</template>

<script  setup>
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
    mouth:Boolean
})
</script>

<style>

</style>