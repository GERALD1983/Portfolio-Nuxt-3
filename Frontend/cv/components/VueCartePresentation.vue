<template lang="">
  <div>
    <div>
      <ClientOnly>
        <Presentation
          debutTitre="Bénéficiez de"
          finTitre="+10 Années
      d'Expériences"
          sousTitre1=" Vous vous demandez si cette expérience peut
      vous apportez de la valeur !"
          sousTitre2="Que ce qui fait la différence à un autre développeur ?"
          sousTitre3="Une Expérience c'est avant tout une stack, une spécialité, avec mes
        objectifs sont clairs ! Focalisés votre business !"
          sousTitre4="3 Types d'offres à disposition : "
        />
      </ClientOnly>
    </div>
    <div class="flex-around lot-de-carte">
      <Carte
        class="box"
        srcImg="../assets/dev-wordpress-prestashop.png"
        titre="Création Site Wordpress Prestashop (Selon Dispo)"
        sousTitre1="Un site vitrine pour votre entreprise."
        sousTitre2="Besoin de visibilité pour une société,
         un e-commerce pour concrétisé !"
        sousTitre3="Etudions votre projet, concentrons nous sur les résultats."
      />
      <Carte
        class="box"
        srcImg="../assets/developpeur-vue-nuxt-typescript.jpg"
        titre="Projet Clés en Main de A à Z (Forfait sur Mesure)"
        sousTitre1="Vous avez des valeurs, des objectifs."
        sousTitre2="Vous êtes une Start Up en croissance,
        vos besoins sont spécifiques à votre entreprise !"
        sousTitre3="J'ai les méthodes pour votre projet,
        une app scalable respectant votre budget."
      />
      <Carte
        class="box"
        srcImg="../assets/developpeur-vue-node.jpg"
        titre="Mes Services en Régie (Cours ou Long terme)"
        sousTitre1="Vous cherchez des consultants !"
        sousTitre2="Vous êtes un grand groupe,
        vous avez des besoins de migration, d'amélioration, d'innovations !"
        sousTitre3="Collaborons ensemble, je vous offre mes services à disposition."
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
  cursor: pointer;
  -webkit-animation: bg-spin 3s linear infinite;
  animation: bg-spin 3s linear infinite;

  --border-size: 6px;
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
