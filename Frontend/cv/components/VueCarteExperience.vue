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
        srcImg="../assets/vue-nuxt-application.png"
        titre="Application
      Frontend"
        sousTitre1="Une
      expertise de premier ordre, précis et professionnels."
        sousTitre2="Une
      application Frontend sûre et fiable, aux normes de qualité les plus
      strictes."
        sousTitre3="La performance dépassant vos objectifs
      commerciaux, en maintenant votre budget."
        sousTitre4="L'engagement d'un
      code qualité tout en maintenant l'approche innovante pour une meilleure
      expérience utilisateur."
      />
      <Carte
        class="box"
        srcImg="../assets/backend-node-api-rest.png"
        titre="Backend Api sur Mesure"
        sousTitre1="Protection de Données Inébranlable: J'assure la sécurité totale des données de vos clients, offrant une protection robuste
         contre les menaces potentielles pour votre tranquillité d'esprit."
        sousTitre2="Connectivité Transparente avec Votre BDD: Simplifiez vos opérations à
         votre base de données avec fluidité, grâce à des méthodes éprouvées."
        sousTitre3="Développement Agile : Transformez vos idées en réalité avec notre approche agile, en créant des interconnexions fiables
         pour vos applications et vos MVP grâce à mon expertise en API REST
          et backend."
      />

      <Carte
        class="box"
        srcImg="../assets/startup-application-node-vue-typescript.png"
        titre="Systéme Complet Start Up"
        sousTitre1="Du Concept au Succès Digital! Concrétisons votre vision de
         startup avec une expertise fullstack, vous libérant des
         tracas techniques concentrer sur la croissance de votre entreprise."
        sousTitre2="Un SaaS Tout-En-Un ! Vous êtes fondateur CEO CTO PO ou manager,
         concentrer sur la stratégie développons et gérons votre plateforme
         fullstack, offrant une solution robuste et évolutive pour votre entreprise."
        sousTitre3="Libérez Votre Entrepreneuriat, Sans Complications! Je gère
         l'aspect technique de votre startup avec un modèle de tarification flexible, permettant de se concentrer sur l'essentiel:
         l'innovation et la croissance."
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
