<template>
  <div class="px-5">

    <div v-for="b in data" :key="b.id">
<h1 class="text-[30px] font-extrabold"><a target="blanc" :href="`https://www.klerk.ru${b.url}`">{{ b.id }} {{ b.title }}</a></h1>
<TheChild v-for="c in b.children" 
:title="c.title"
:url="c.url"
:count="c.count"
:key="c.id"/>

 </div>
  </div>
</template>

<script  setup>
const {data}= await useFetch('https://www.klerk.ru/yindex.php/v3/event/rubrics')

</script>

<style>

</style>