<template>
  <div :class="{active:currency}" class="duration-500 w-[150px] border-[2px] px-4 py-2 bg-[#03aaff] border-white rounded-lg">
    <img :src="flag" :alt="country">
    <p class="text-white ">{{ country }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps(['flag','country','currency'])
</script>

<style>
.active{
transform: scale(115%);
background-color: blue;
}
</style>