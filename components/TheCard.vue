<template>
  <div class=" w-[476px] relative h-[244px] rounded-[16px] bg-white p-[24px] ">

    <div class="w-[324px] flex flex-col justify-between h-full">

        <div class="">
<p class="text-[#999999] text-[13px]">{{ header }}</p>
<h2 class="text-[20px] font-medium">{{ title }}</h2>
</div>

<p class="text-[14px] text-[#666666]">{{description}}</p>

<div class="">
<div class="flex items-center gap-[8px]"><img src="/public/check.png" alt="check"><p :class="{strong:strong}" class="text-[14px]">{{ checkone }}</p></div>
<div class="flex items-center gap-[8px]"><img src="/public/check.png" alt="check"><p class="text-[14px]">{{checktwo}}</p></div>
</div>   

<div class=" flex items-center gap-[8px]">
<div :class="{back:sw}" class="relative h-[24px] w-[48px] bg-[#eeeeee] rounded-full border-[2px] border-[#60e080]">
    <div @click="sw=!sw" :class="{toRight:sw}" class="absolute h-[21px] w-[21px] bg-white rounded-full"></div>
</div>
<p class="text-[14px]">Уже получает {{ receivers }} человек</p>
</div>


</div>

<TheImage
:image="image"
:frame='frame'
:rotate="rotate"
/>


  </div>
</template>

<script  setup>

defineProps(['strong','image','frame','rotate',
    'header','title','description','checkone','checktwo','receivers'
])
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