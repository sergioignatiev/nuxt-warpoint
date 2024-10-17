<template>
  <div>
    
    <div class="flex items-center shadow-sm justify-between">
    <a :href="`https://www.klerk.ru${child.url}`" target="_blank">
    <h1 class="text-[30px] font-extrabold" >{{ child.title }}</h1></a>
    <p @click="showhide=!showhide" >ICON</p>
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

</style>