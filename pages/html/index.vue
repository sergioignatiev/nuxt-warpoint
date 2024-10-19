<template>
 <section class="w-[1024px] bg-[#f5f5f8]  py-[48px] ">
  <div class="px-[48px]">
<h2 class="text-[24px] font-medium">Выберите рассылки, которые подходят именно вам</h2>

<form class="relative mt-[16px]">
<input class="p-[16px] w-full text-[#666666] rounded-l-[8px] rounded-r-[100px]" type="text" placeholder="Электронная почта">
<button class="absolute right-0 bg-[#316FEE] rounded-full text-white h-full px-[32px] hover:bg-[#3861ad]">Подписаться</button>
</form>

<div class="flex items-center gap-[8px] mt-[18px]">
<div class="relative  w-[32px] h-[16px]">
<div class="w-full h-full rounded-full bg-[blue]"></div>
<button @click="switcher=!switcher" :class="{switcherRight:switcher}" class="absolute  top-0 bg-white rounded-full text-white  w-[16px] h-[16px] "></button>
</div>
<p class="text-[14px]">Подписаться на все рассылки</p>
</div>
</div>

<div class="mt-[32px] px-[24px]">
  <TheCard/>
</div>

</section>
</template>

<script  setup>
const switcher=ref(true)

</script>

<style scoped>
.switcherLeft{
  @apply left-[2px]
}
.switcherRight{
  @apply right-[2px]
}

</style>