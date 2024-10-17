<template>
  <div>
    <TheChild :swi="definer" />
    <button @click="definer=!definer">SWITCH</button>
    <NuxtPage/>
  </div>
</template>

<script  setup>
const definer=ref(false)
</script>

<style>

</style>