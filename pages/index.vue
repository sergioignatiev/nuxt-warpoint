<template>
  <div class="px-20">
    <div class="flex justify-between items-center">
    <h1 class="text-[50px] font-extrabold">TOTAL COUNT : {{ count }}</h1>
    <svg @click='showhide=!showhide' xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="6 9 12 15 18 9"/>
</svg>

  </div>
  <div v-show="showhide" class="">
<TheChild v-for="c in data" :child="c" :key="c.id"/>
   </div>
  </div>
</template>

<script  setup>
const {data}= await useFetch('https://www.klerk.ru/yindex.php/v3/event/rubrics')
import { storeToRefs,useCountStore } from '#imports';
const pinia=useCountStore()
const {count}=storeToRefs(pinia)
const showhide=ref(true)
</script>

<style>

</style>