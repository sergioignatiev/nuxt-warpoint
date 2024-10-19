<template>
  <div class=" w-[476px] relative h-[244px] rounded-[16px] bg-white p-[24px] ">

    <div class="w-[324px] flex flex-col justify-between h-full">

        <div class="">
<p class="text-[#999999] text-[13px]">Перед Рассветом</p>
<h2 class="text-[20px] font-medium">Утренний бухгалтер</h2>
</div>

<p class="text-[14px] text-[#666666]">Самые важные новости и события за день. Кратко, по делу, структурировано.</p>

<div class="">
<div class="flex items-center gap-[8px]"><img src="/public/check.png" alt="check"><p :class="{strong:strong}" class="text-[14px]">Новости для бухгалтеров, ИП и директора</p></div>
<div class="flex items-center gap-[8px]"><img src="/public/check.png" alt="check"><p class="text-[14px]">Новости для бухгалтеров, ИП и директора</p></div>
</div>   

<div class=" flex items-center">
<div :class="{back:sw}" class="relative h-[24px] w-[48px] bg-[#eeeeee] rounded-full border-[1px] border-[#60e080]">
    <div @click="sw=!sw" :class="{toRight:sw}" class="absolute h-[22px] w-[22px] bg-white rounded-full  "></div>
</div>

</div>


</div>


<article class="  h-[80px] w-[80px] absolute top-[24px] right-[24px]">
        <div  :class="`div absolute h-[36.4px] w-[36.4px] right-[-10px] top-[1px] rotate-[140deg] border-[1px] border-[#60e080]  `"></div>
    <img class="bg-white " src="/public/free.png" alt="screpka">
    </article>


  </div>
</template>

<script  setup>

const strong=ref(false)
const sw=ref(false)

</script>

<style scoped>
.strong{
    @apply font-medium
}
.toRight{
    @apply right-[0px]
}

.back{
    @apply bg-[blue]
}
</style>