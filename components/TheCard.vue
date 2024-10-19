<template>
  <div class=" sm:w-[476px] relative sm:h-[244px] h-[272px] rounded-[16px] bg-white py-[24px] sm:px-[24px] px-[16px] ">

    <div class="sm:w-[324px] flex flex-col justify-between h-full">

        <div >
<p class="text-[#999999] text-[13px]">{{ header }}</p>
<h2 class="text-[20px] font-medium">{{ title }}</h2>
</div>

<p class="text-[14px] text-[#666666]">{{description}}</p>

<div>
<div class="flex items-center gap-[8px]"><img src="/public/check.png" alt="check"><p :class="{strong:strong}" class="text-[14px]">{{ checkone }}</p></div>
<div class="flex items-center gap-[8px]"><img src="/public/check.png" alt="check"><p class="text-[14px]">{{checktwo}}</p></div>
</div>   

<div class=" flex items-center gap-[8px]">
<div :class="{back:sw}" class="relative h-[24px] w-[48px] bg-[#eeeeee] rounded-full outline outline-offset-0 outline-[#60e080]">
    <div @click="sw=!sw" :class="{toRight:sw}" class="absolute h-[22px] w-[22px] top-[1px] bg-white rounded-full"></div>
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