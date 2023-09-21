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
:root {
  --border-radius-outer: 1em;
  --border-radius-inner: var(--border-radius-outer);
}
.lot-de-carte {
  margin-left: 30px;
  margin-right: 30px;
}
/* html {
  height: 100%;
  background: #223;
  display: grid;
  place-items: center;
} */

.box {
  /* --border-size: 3px;
  --border-angle: 0turn;
  border-radius: 10px;
  width: 60vmin;
  height: 50vmin;
  background-image: conic-gradient(
      from var(--border-angle),
      #213,
      #112 50%,
      #213
    ),
    conic-gradient(from var(--border-angle), transparent 20%, #08f, #f03);
  background-size: calc(100% - (var(--border-size) * 2))
      calc(100% - (var(--border-size) * 2)),
    cover;
  background-position: center center;
  background-repeat: no-repeat;
}
@-webkit-keyframes bg-spin {
  to {
    --border-angle: 1turn;
  }
}
@keyframes bg-spin {
  to {
    --border-angle: 1turn;
  } */
  border-radius: var(--border-radius-outer);
}
.box:hover {
  -webkit-animation: bg-spin 3s linear infinite;
  animation: bg-spin 3s linear infinite;
  --border-size: 1px;
  --border-angle: 0turn;
  border: 1px solid rgba(255, 255, 255, 0) !important;

  /* width: 60vmin;
  height: 50vmin; */
  background-image: conic-gradient(
      from var(--border-angle),
      rgb(255, 255, 255),
      rgb(255, 255, 255) 50%,
      rgb(255, 255, 255)
    ),
    conic-gradient(
      from var(--border-angle),
      transparent 3%,
      #0afcf058,
      #00ffc315
    );
  background-size: calc(100% - (var(--border-size) * 2) - 7px)
      calc(100% - (var(--border-size) * 2) - 7px),
    cover;

  background-position: center center;
  background-repeat: no-repeat;
}
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
  border-radius: 1em;
  syntax: "<angle>";
  inherits: true;
  initial-value: 0turn;
}
</style>
