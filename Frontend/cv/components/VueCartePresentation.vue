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
        class="box"
        srcImg="../assets/1710299.svg"
        titre="Scratcher"
        sousTitre1="Peut vous apportez de la valeur !"
        sousTitre2="Expérience utilisateur fluide,
        gestion efficace des données."
        sousTitre3="Créé pour l'efficacité, concentrer sur la création."
      />
      <Carte
        class="box"
        srcImg="../assets/1710299.svg"
        titre="Scratcher"
        sousTitre1="Peut vous apportez de la valeur !"
        sousTitre2="Expérience utilisateur fluide,
        gestion efficace des données."
        sousTitre3="Créé pour l'efficacité, concentrer sur la création."
      />
      <Carte
        class="box"
        srcImg="../assets/1710299.svg"
        titre="Scratcher"
        sousTitre1="Peut vous apportez de la valeur !"
        sousTitre2="Expérience utilisateur fluide,
        gestion efficace des données."
        sousTitre3="Créé pour l'efficacité, concentrer sur la création."
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
/* html {
  height: 100%; */
/* background: #223; */
/* display: grid;
  place-items: center;
}
*/

.box {
  /* position: relative; */
  border: 1px solid rgb(221, 221, 221);
  /*  */

  border-radius: 15px;

  background: white;

  background-position: center center;
  background-repeat: no-repeat;

  /* border: 0px solid rgba(255, 255, 255, 0) !important; */
}

.box:hover {
  -webkit-animation: bg-spin 3s linear infinite;
  animation: bg-spin 3s linear infinite;

  --border-size: 2px;
  --border-angle: 0turn;

  border: 1px solid rgba(255, 255, 255, 0) !important;

  border-radius: 15px;

  width: 60vmin;
  height: 50vmin;

  background-image: conic-gradient(
      from var(--border-angle),
      rgb(255, 255, 255),
      rgb(255, 255, 255) 75%,
      rgb(255, 255, 255)
    ),
    conic-gradient(from var(--border-angle), transparent 3%, #0afcf0, #00ff7b);
  background-size: calc(99% - (var(--border-size) * 2))
      calc(99% - (var(--border-size) * 2)),
    cover;

  background-position: center center;
  background-repeat: no-repeat;
}

/************************/

@-webkit-keyframes bg-spin {
  to {
    --border-angle: 1turn;
  }
}
@keyframes bg-spin {
  to {
    --border-angle: 1turn;
  }
}

@property --border-angle {
  syntax: "<angle>";
  inherits: true;
  initial-value: 0turn;
}
</style>
