<template lang="">
  <div class="experience">
    <div>
      <ClientOnly>
        <Presentation
          debutTitre="Développons ensemble"
          finTitre="une application de qualité"
          sousTitre1="Comment ? en maîtrisant le code source.
Mieux encore,"
          sousTitre2="en réduisants le code inutile, en optimisant le SEO et le référencements"
          sousTitre3=" et en factorisants les codes pour une lecture plus simple et une collaboration élaborée"
          sousTitre4="Ce que je vous propose au Forfait :"
        />
      </ClientOnly>
    </div>
    <div class="flex-around lot-de-carte">
      <Carte
        class="box"
        srcImg="../assets/1710299.svg"
        titre="Application Frontend"
        sousTitre1="Vous vous demandez si cette expérience peut vous apportez de la valeur !"
        sousTitre2="une expérience utilisateur fluide, et une
          gestion efficace des données."
        sousTitre3="Créé pour l'efficacité, afin que vous
          puissiez vous concentrer sur la création."
      />
      <Carte
        class="box"
        srcImg="../assets/2128601.svg"
        titre="Backend Api sur Mesure"
        sousTitre1="Vous vous demandez si cette expérience peut vous apportez de la valeur !"
        sousTitre2="une expérience utilisateur fluide, et une
          gestion efficace des données."
        sousTitre3="Créé pour l'efficacité, afin que vous
          puissiez vous concentrer sur la création."
      />

      <Carte
        class="box"
        srcImg="../assets/1710299.svg"
        titre="Systéme Complet Start Up"
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
/* .lot-de-carte {
  margin-left: 30px;
  margin-right: 30px;
} */
</style>
