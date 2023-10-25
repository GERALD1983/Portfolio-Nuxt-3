<template>
  <div class="back-ma-page">
    <Nav />
    <Banniere />
    <VueCartePresentation />

    <SliderProjet />

    <VueCarteExperience />

    <PresentationCompetences />

    <Objectif />

    <Footer />

    <!-- <NuxtWelcome /> -->

    <!-- <div id="titreProjet">salut</div>
    <div class="ancreForm">salut</div> -->
  </div>
</template>
<script setup lang="ts">
let manger = "st";
console.log(manger);
</script>
<style>
#backMaPage {
  margin-bottom: 400px;
  height: 500px;
  background-color: aqua;
}
#titreProjet {
  margin-bottom: 400px;
  height: 500px;
  background-color: red;
}
.ancreForm {
  margin-top: 400px;
  height: 500px;
  background-color: yellowgreen;
}
</style>
