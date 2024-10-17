<template>
  <div class="px-5">
<div class="text-3xl font-extrabold">{{ total }}</div>
    <div v-for="b in data" :key="b.id">
<h1 class="text-[30px] font-extrabold"><a target="blanc" :href="`https://www.klerk.ru${b.url}`">{{ b.id }} {{ b.title }}</a></h1>

<section v-for="child in b.children">
<h1 class="text-[20px] font-bold"><a target="blanc" :href="`https://www.klerk.ru${child.url}`"><span>{{ child.id }}</span> {{ child.title }}</a></h1>
<div class=""><input type="checkbox" @click="addToTotal(child.count)">{{ child.count }}</div>

</section>
 </div>
  </div>
</template>

<script  setup>
const {data}= await useFetch('https://www.klerk.ru/yindex.php/v3/event/rubrics')
const total=ref(0)
function addToTotal(x){
  total.value+=x
}
</script>

<style>

</style>