<template>
 <section class="w-[1024px] bg-[#f5f5f8]  py-[48px] ">

  <div class="sm:px-[48px] px-[24px]">
<h2 class="text-[24px] font-medium">Выберите рассылки, которые подходят именно вам</h2>

<form class="relative mt-[16px]">
<input class="p-[16px] w-full text-[#666666] rounded-l-[8px] rounded-r-[100px]" type="text" placeholder="Электронная почта">

<button class="invisible sm:visible absolute right-0 bg-[#316FEE] rounded-full text-white h-full px-[32px] hover:bg-[#3861ad]">Подписаться</button>
<button class="visible sm:invisible absolute right-0  bg-[#316FEE] rounded-full text-white h-[56px] w-[56px]  hover:bg-[#3861ad]"><img class="translate-x-[23px]" src="/public/arrowhite.png" alt="arrow"></button>
</form>

<div class="flex items-center gap-[8px] mt-[18px]">
<div class="relative  w-[32px] h-[16px] outline outline-offset-0 outline-[#60e080] bg-[#dbdbdb] rounded-full">
<div class="w-full h-full rounded-full "></div>
<button @click="switcher=!switcher" :class="{switcherRight:switcher}" class="absolute  top-0 bg-white rounded-full text-white  w-[16px] h-[16px] "></button>
</div>
<p class="text-[14px]">Подписаться на все рассылки</p>
</div>
</div>

<div class="mt-[32px] px-[16px] sm:px-[24px] flex flex-wrap justify-center  gap-[24px]">
  <TheCard
  :strong=false
  image="s1.png"
  :frame=true
rotate="-rotate-[15deg]"
header="Перед рассветом"
title="Утренний бухгалтер"
description="Самые важные новости и события за день. Кратко, по делу, структурировано."
checkone="Новости для бухгалтеров, ИП и директора"
checktwo='Подборка статей за день'
receivers="59 342"
  />
  <TheCard
  :strong=false
  image="s2.png"
  :frame=true
rotate="rotate-[15deg]"
header="После заката"
title="Ночной бухгалтер"
description="Самая краткая газета о налогах и бухучете в мире — современная рассылка для чтения."
checkone="Анализ, оценка и только самое главное"
checktwo='Лучшие комменты юзеров в обзоре'
receivers="37 480"
  />
  <TheCard
  :strong=false
  image="scissors.png"
  :frame=true
rotate="rotate-[26.8deg]"
header="Раз в две недели"
title="Ножницы скидок"
description="Подборка самых выгодных и полезных спецпредложений от надежных компаний."
checkone="Акции и скидки от лидеров рынка"
checktwo='Те, кто подписался – экономят много денег '
receivers="92 118"
  />
  <TheCard
  :strong=true
  image="free.png"
  :frame=false
rotate="-rotate-[15deg]"
header="По мере появления анонсов"
title="Чемодан вебинаров"
description="Подборка с анонсами бесплатных вебинаров на самые топовые темы при участии экспертов."
checkone="Никогда не пришлем платные вебинары"
checktwo='Подборка топовых тем для вебинаров'
receivers="92 028"
  />

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
  @apply right-[0px]
}

</style>