<template>
  <div class="px-5">
 <div v-for="b in data" :key="b.id">
<h1 class="text-[30px] font-extrabold"><a target="blanc" :href="`https://www.klerk.ru${b.url}`">{{ b.title }}</a></h1>

<section v-for="child in b.children">
<h1 class="text-[20px] font-bold"><a target="blanc" :href="`https://www.klerk.ru${child.url}`">{{ child.title }}</a></h1>
<p>{{ child.count }}</p>

</section>
 </div>
  </div>
</template>

<script  setup>
const {data}= await useFetch('https://www.klerk.ru/yindex.php/v3/event/rubrics')
</script>

<style>

</style>