<template>
  <div class="flex lg:max-w-[50vw] justify-between ">
    <a :href="`https://www.klerk.ru${secondChild.url}`" target="_blank">
        <div class="text-[18px] font-bold">{{ secondChild.title }} {{ secondChild.count }}</div>
    </a>
    <input
    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    type="checkbox" name="" id="" @click="addToTheCount(inp,secondChild.count)" v-model="inp" >
  </div>
</template>

<script  setup>
import { storeToRefs,useCountStore } from '#imports';
const pinia=useCountStore()
const {count}=storeToRefs(pinia)
defineProps(['secondChild'])
const inp=ref(false)
function addToTheCount(showing,number){
    if(showing==false){
    count.value+=number}
    else if(showing==true){
        count.value-=number
    }

}
</script>

<style>

</style>