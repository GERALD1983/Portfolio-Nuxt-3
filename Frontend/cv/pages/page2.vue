<template>
  <div>
    je suis la page 2
    <NuxtWelcome />
    <AppAlert />
  </div>
</template>
<script setup lang="ts">
let manger: string | number = "st";
manger = 2;
console.log(manger);
</script>
<style>
body {
  background-color: antiquewhite;
}
</style>
