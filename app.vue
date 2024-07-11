<template>
  <div class="p-2">
  <UButton class="my-3 text-[40px] uppercase" color="white" block>Тарифы</UButton>
  <div class="flex flex-wrap gap-2 items-between justify-center p-2">
    <TheCard
    
    :rub="data.eur.rub"
    :kzt="data.eur.kzt"
    :cny="data.eur.cny"
    main-number="100"
    label="Стандартный"
    period="месяц"
    :main-number-year="1000"
 
    />
    <TheCard
    
    :rub="data.eur.rub"
    :kzt="data.eur.kzt"
    :cny="data.eur.cny"
    main-number="150"
    label="Продвинутый"
    period="месяц"
    :main-number-year="1400"
    advanced="true"
    />
  </div>
  </div>
</template>
<script setup>

const {data}=await useFetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json')

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
*{
  font-family: Inter,  sans-serif;
}
</style>
