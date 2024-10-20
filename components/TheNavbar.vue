<template>
<nav class="flex items-center justify-center h-[64px] gap-[24px] ">
<NuxtLink class=" items-center justify-center flex h-[100%] text-[16px] text-[#666666]" v-for="nav in navigation" :to="nav.link" :key="nav.id">{{nav.label}}</NuxtLink>

</nav>
</template>

<script  setup>
const navigation=ref([
    {id:1,link:"/html",label:"Рассылки"},
    {id:2,link:'/html/social',label:"Соцсети"},
    {id:3,link:"/html/message",label:"Мессенджеры"}
])
</script>

<style scoped>
.router-link-exact-active{
    @apply text-[#5A8CF1] border-b-[2px] border-[#5A8CF1] font-medium translate-y-[1px]
}

</style>