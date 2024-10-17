<template>
  <div class="px-20">
    <h1 class="text-[50px] font-extrabold">COUNT : {{ count }}</h1>
<TheChild v-for="c in data" :child="c" :key="c.id"/>
   
  </div>
</template>

<script  setup>
const {data}= await useFetch('https://www.klerk.ru/yindex.php/v3/event/rubrics')
import { storeToRefs,useCountStore } from '#imports';
const pinia=useCountStore()
const {count}=storeToRefs(pinia)
</script>

<style>

</style>