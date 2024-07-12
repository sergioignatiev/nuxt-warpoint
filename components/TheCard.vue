<template>
   
  <div class="
  h-[700px] md:w-[600px] w-[100%]
   mt-4  rounded-md border-black border-[1px]
  text-center flex flex-col justify-between
  ">

  <TheMouth
  :kzt="kzt"
    :cny="cny"
    :rub="rub"
    :mainNumber="mainNumber"
    :mainNumberYear="mainNumberYear"
    :label="label"
    :advanced="advanced"
    :tenge='tenge'
    :yuan="yuan"
    :ruble="ruble"
    :mouth="mouth"
  
  />

<TheYear
    :kzt="kzt"
    :cny="cny"
    :rub="rub"
    :mainNumber="mainNumber"
    :mainNumberYear="mainNumberYear"
    :label="label"
    :advanced="advanced"
    :tenge='tenge'
    :yuan="yuan"
    :ruble="ruble"
    :year="year"

/>
<div class="bottom bg-[#9ce6ff] h-[50%]">
<div class="flex items-between pt-10 justify-between px-10">
  
<TheCountry
flag="https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg"
country="RUB"
@click="switchCurrencyRu"
:currency="ruble"
/>
<TheCountry
flag="https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg"
country="CNY"

@click="switchCurrencyCh"
:currency="yuan"
/>
<TheCountry
flag="https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg"
country="KTN"
@click="switchCurrencyKz"
:currency="tenge"
/>

</div>
<div class="py-14 flex justify-center gap-6">
<UButton variant="solid" color="blue" text="white"  :class="{activeButton:mouth}"   @click="switchMouth">Месяц</UButton>
<UButton variant="solid" color="blue" text="white"  :class="{activeButton:year}"  size="lg" @click="switchYear">Год</UButton>
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

<style >

.activeButton{
  background-color: blue;
  transform:scale(110%);
}

</style>