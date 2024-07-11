<template>
  <div class="h-[700px] md:w-[600px] w-[100%] mt-4  rounded-md border-black border-[1px]
  text-center flex flex-col justify-between
  ">

  <div class="top mouth md:px-9 py-9" v-show="mouth">
  <h2 class="text-[#00A3FF] text-center text-[48px] font-semibold">{{ label }}</h2>
  <h1 class="text-[80px] font-bold" v-show="ruble">{{ rub/rub*mainNumber }} RUB</h1>
  <h1 class="text-[80px] font-bold" v-show="tenge">{{Math.floor( kzt/rub*mainNumber) }} CZT</h1>
  <h1 class="text-[80px] font-bold" v-show="yuan">{{Math.floor( cny/rub*mainNumber) }} CNY</h1>
<p>Месяц</p>
</div>

<div class="top mouth md:px-9 py-9" v-show="year">
  <h2 class="text-[#00A3FF] text-center text-[48px] font-semibold">{{ label }}</h2>
  <h1 class="text-[80px] font-bold" v-show="ruble">{{ rub/rub*mainNumberYear }} RUB</h1>
  <h1 class="text-[80px] font-bold" v-show="tenge">{{Math.floor( kzt/rub*mainNumberYear) }} CZT</h1>
  <h1 class="text-[80px] font-bold" v-show="yuan">{{Math.floor( cny/rub*mainNumberYear) }} CNY</h1>
  
<p>Год</p>
<div v-show="advanced==false">
<p class="text-red-500" v-show="tenge">Скидка {{ Math.floor( kzt/rub*mainNumber*2) }} KZT</p>
<p class="text-red-500" v-show="yuan">Скидка {{ Math.floor( cny/rub*mainNumber*2) }} CNY</p>
<p class="text-red-500" v-show="ruble">Скидка {{ Math.floor(rub/rub*mainNumber*2) }} RUB</p>
</div>
<div class="" v-show="advanced">
  <p class="text-red-500" v-show="tenge">Скидка : {{ Math.floor( kzt/rub*mainNumber*2)+Math.floor(kzt/rub*100) }} KZT</p>
  <p class="text-red-500" v-show="yuan">Скидка : {{ Math.floor( cny/rub*mainNumber*2)+Math.floor(cny/rub*100) }} CNY</p>
  <p class="text-red-500" v-show="ruble">Скидка : {{ Math.floor(rub/rub*mainNumber*2)+100 }} RUB</p>
</div> 
</div>

<div class="bottom bg-[#9ce6ff] h-[50%]">
<div class="flex items-between pt-10 justify-between px-10">
<TheCountry
flag="https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg"
country="RUB"
@click="switchCurrencyRu"
/>
<TheCountry
flag="https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg"
country="CNY"
@click="switchCurrencyCh"
/>
<TheCountry
flag="https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg"
country="KTN"
@click="switchCurrencyKz"
/>
</div>
<div class="py-14 flex justify-center gap-6">
<UButton color="blue" @click="switchMouth">Месяц</UButton>
<UButton color="blue" variant="outline" size="lg" @click="switchYear">Год</UButton>
</div>
</div>

  </div>
</template>

<script setup>

defineProps({rub:Number,
    kzt:Number,
    cny:Number,
    mainNumber:Number,
    mainNumberYear:Number,
    label:String,
    advanced:Boolean
    
})
const ruble=ref(true)
const tenge=ref(false)
const yuan=ref(false)
function switchCurrencyKz(){
    tenge.value=true
    ruble.value=false
    yuan.value=false  
}
function switchCurrencyCh(){
    tenge.value=false
    ruble.value=false
    yuan.value=true 
}
function switchCurrencyRu(){
    tenge.value=false
    ruble.value=true
    yuan.value=false 
}

const period=ref('Месяц')
const mouth=ref(true)
const year=ref(false)

function switchMouth(){
    mouth.value=true
    year.value=false
}
function switchYear(){
    mouth.value=false
   year.value=true
}
</script>

<style>

</style>