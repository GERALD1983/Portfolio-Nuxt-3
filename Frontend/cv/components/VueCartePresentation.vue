<template lang="">
  <div>
    <div>
      <Presentation
        debutTitre="Bénéficiez de"
        finTitre="5 Années
      d'Expériences"
        sousTitre1=" Vous vous demandez si cette expérience peut
      vous apportez de la valeur !"
        sousTitre2="Que ce qui fait la différence à un autre développeur ?"
        sousTitre3="Une Expérience c'est avant tout une stack, une spécialité, avec mes
        objectifs sont clairs ! Focalisés votre business !"
      />
    </div>
    <div class="flex-around lot-de-carte">
      <Carte titre="Scratcher" />
      <Carte titre="Skiller" />
      <Carte titre="Puncher" />
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
