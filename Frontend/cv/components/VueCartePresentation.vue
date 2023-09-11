<template lang="">
  <div>
    <div>
      <Presentation />
    </div>
    <div class="flex-around lot-de-carte">
      <Carte />
      <Carte />
      <Carte />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style>
.lot-de-carte {
  margin-left: 30px;
  margin-right: 30px;
}
</style>
