<template lang="">
  <div>
    <div>
      <ClientOnly>
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
      </ClientOnly>
    </div>
    <div class="flex-around lot-de-carte">
      <Carte
        srcImg="../assets/1710299.svg"
        titre="Scratcher"
        sousTitre1="Vous vous demandez si cette expérience peut vous apportez de la valeur !"
        sousTitre2="une expérience utilisateur fluide, et une
          gestion efficace des données."
        sousTitre3="Créé pour l'efficacité, afin que vous
          puissiez vous concentrer sur la création."
      />
      <Carte
        srcImg="../assets/2128601.svg"
        titre="Skiller"
        sousTitre1="Vous vous demandez si cette expérience peut vous apportez de la valeur !"
        sousTitre2="une expérience utilisateur fluide, et une
          gestion efficace des données."
        sousTitre3="Créé pour l'efficacité, afin que vous
          puissiez vous concentrer sur la création."
      />

      <Carte
        srcImg="../assets/1710299.svg"
        titre="Puncher"
        sousTitre1="Vous vous demandez si cette expérience peut vous apportez de la valeur !"
        sousTitre2="une expérience utilisateur fluide, et une
          gestion efficace des données."
        sousTitre3="Créé pour l'efficacité, afin que vous
          puissiez vous concentrer sur la création."
      />
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
