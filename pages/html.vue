<template>
  <div >

    <div class="flex items-center justify-center pt-[48px] pb-[28px] ">
 <img class="w-[76px]" src="/public/klerk.png" alt="clerk">
 </div>

 <div class="flex justify-center text-[#999999] text-[13px] font-normal gap-[8px] ">
  <p class="bottom-underline">Главная</p> &#8594 <p class="bottom-underline">Рассылки</p> &#8594 <p class="bottom-underline">Хлебные крошки</p>
 </div>
  <h1 class=" text-center text-[32px] sm:text-[56px] font-medium">Подписки «Клерка»</h1>
 
  <TheNavbar/>
  <div class="flex justify-center">
  <NuxtPage/>
  </div>
  <div class="flex justify-center py-[48px] ">
  <img class=w-[194px] src="/public/smile.png" alt="smile">
  </div>
  </div>
</template>

<script  setup>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
*{
    font-family: "Roboto", sans-serif;
}
.bottom-underline{
  @apply border-b-[1px] border-[#e6edff] 
}
</style>