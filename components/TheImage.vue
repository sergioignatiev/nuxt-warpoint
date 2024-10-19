<template>
 
 <article class="  h-[80px] w-[80px] absolute top-[24px] right-[24px]">
        <div v-if="frame"  :class="`div absolute h-full w-full border-[2px] border-[#60e080]  ${rotate}`"></div>
        <div v-else :class="`div absolute h-[36.4px] w-[36.4px] right-[-10px] top-[3px] rotate-[140deg] border-[2px] border-[#60e080]  `"></div>
    <img class="bg-white " :src="image" alt="screpka">
    </article>

</template>

<script  setup>

defineProps(['image','rotate','frame'])

</script>

<style>

</style>