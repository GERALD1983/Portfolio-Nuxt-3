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
          sousTitre4="Voici ce que je propose au Forfait :"
        />
      </ClientOnly>
    </div>
    <div class="flex-between lot-de-carte">
      <Carte
        class="box box1"
        srcImg="../assets/vue-nuxt-application.png"
        titre="Application
      Frontend"
        sousTitre1="Expertise de premier ordre, précis et professionnels."
        sousTitre2="Application Frontend sûre, fiable et de qualité."
        sousTitre3="Performance et objectifs, en maintenant votre budget."
        sousTitre4="Code de qualité maintenant l'approche innovante."
      />
      <Carte
        class="box box2"
        srcImg="../assets/backend-node-api-rest.png"
        titre="Backend Api sur Mesure"
        sousTitre1="Protection de Données Inébranlable : Sécurité totale
         des données clients."
        sousTitre2="Connectivité Transparente BDD : Fluidité,
         simplifiez vos opérations"
        sousTitre3="Développement Agile : Interconnexions fiables
         sur vos apps"
        sousTitre4="Des technologies de pointe : Au service de votre data."
      />

      <Carte
        class="box box3"
        srcImg="../assets/startup-application-node-vue-typescript.png"
        titre="Systéme Complet Start Up"
        sousTitre1="Du Concept au Succès Digital ! Concrétisons votre
         vision startup"
        sousTitre2="Solution pour Fondateur CEO CTO PO ou manager,
         robuste et évolutive."
        sousTitre3="Modèle de tarification flexible, basé sur votre
         aspect innovant"
        sousTitre4="Libérez vous des tracas techniques objectif
         croissance de l'entreprise."
      />
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
/* .box1 {
  margin-left: 0 !important;
}
.box3 {
  margin-right: 0 !important;
} */
/* .lot-de-carte {
  margin-left: 30px;
  margin-right: 30px;
} */
</style>
