<template>
 <section>
    <a :href="`https://www.klerk.ru${url}`" target="blanc"><h2 class="text-[20px] font-bold">{{ title }}</h2></a>
   <div>{{ count }}</div>



</section>
</template>

<script setup>
defineProps(['url','title','count'])
</script>

<style>

</style>