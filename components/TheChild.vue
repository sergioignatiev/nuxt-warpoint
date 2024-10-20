<template>
  <div>
    
    <div class="flex items-center shadow-sm justify-between">
    <a :href="`https://www.klerk.ru${child.url}`" target="_blank">
    <h1 class="text-[30px] font-extrabold" >{{ child.title }}</h1></a>

    <div @click="showhide=!showhide" >
      <svg :class="{rotate:!showhide}" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="6 9 12 15 18 9"/>
</svg>

    </div>

    </div>
    <div class="py-3" v-show="showhide">
    <TheSecondChild :second-child="ch" v-for="ch in child.children" :key="ch.id"/>
  </div>
  
  </div>
</template>

<script  setup>


defineProps(['child'])
const showhide=ref(true)
</script>

<style scoped>
*{
font-family: Arial, Helvetica, sans-serif;
}
.rotate{
  @apply rotate-180

}
</style>