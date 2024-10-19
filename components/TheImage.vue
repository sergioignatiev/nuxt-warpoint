<template>
 
 <article class=" h-[40px] w-[40px] sm:h-[80px] sm:w-[80px] absolute right-[16px] top-[24px] sm:right-[24px]">
        <div v-if="frame"  :class="`div absolute h-full w-full border-[2px] border-[#60e080]  ${rotate}`"></div>
        <div v-else :class="`div absolute h-[18px] w-[18px] sm:h-[36.4px] sm:w-[36.4px] right-[-5px] sm:right-[-10px] top-[2px] sm:top-[3px] rotate-[140deg] border-[2px] border-[#60e080]  `"></div>
    <img class="bg-white " :src="image" alt="screpka">
    </article>

</template>

<script  setup>

defineProps(['image','rotate','frame'])

</script>

<style>

</style>