<template>
  <div :class="{active:currency}" class="w-[150px] border-[2px] px-4 py-2 bg-[#03aaff] border-white rounded-lg">
    <img :src="flag" :alt="country">
    <p class="text-white ">{{ country }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps(['flag','country','currency'])
</script>

<style>
.active{
transform: scale(120%);
background-color: blue;
}
</style>