<template>
  <div class="flex-column-center">
    <div class="content-all-section-objectif">
      <section>
        <ClientOnly>
          <Presentation
            debutTitre="Une seule mission"
            finTitre="pour vos objectifs"
            sousTitre1="Proposé des méthodes pour des projets d'app Web."
            sousTitre2="Elaboré des solutions pour des MVP clés en mains"
            sousTitre3="Optimisé la collaboration pour vos refontes"
            sousTitre4="Mes services en Régie ou sur le Long Terme : "
          />
        </ClientOnly>
      </section>
      <section class="content-objectif">
        <div>
          <ObjectifCarte
            srcIcone="material-symbols-light:rocket-launch-outline-rounded"
            titre="Déploiement Rapide"
            sousTitre1="Efficace et agile en production"
            sousTitre2="Examen rapide des résultats"
            sousTitre3="Innovation fluidité en Build / Run"
            sousTitre4="Vite précis et fiable"
          />
        </div>
        <div>
          <ObjectifCarte
            srcIcone="material-symbols-light:trophy-rounded"
            titre="Performance Accrue"
            sousTitre1="Performance inégalée garantie"
            sousTitre2="Accélération du chargement"
            sousTitre3="Puissance de gestion des flux"
            sousTitre4="Code éxecuté en temps record"
          />
        </div>
        <div>
          <ObjectifCarte
            srcIcone="material-symbols-light:settings-input-component-outline-sharp"
            titre="Composants Réutilisables"
            sousTitre1="Découplé de son contexte"
            sousTitre2="Indépendant du service"
            sousTitre3="Composant réutilisable"
            sousTitre4="Intéractions en temps rééls"
          />
        </div>
        <div>
          <ObjectifCarte
            srcIcone="material-symbols-light:battery-status-good-rounded"
            titre="Optimisation Ressources"
            sousTitre1="Suppression du code inutile"
            sousTitre2="Gestion de dépendances"
            sousTitre3="Mise à jour des ressources"
            sousTitre4="Correction des vulnérabilités"
          />
        </div>
        <div>
          <ObjectifCarte
            srcIcone="material-symbols-light:stacks-outline-rounded"
            titre="Clean Architecture"
            sousTitre1="Maintenabilité plus sereine"
            sousTitre2="Réduire le couplage composants"
            sousTitre3="Méthode structuré et ordonnée"
            sousTitre4="Principe SOLID MVC..."
          />
        </div>
        <div>
          <ObjectifCarte
            srcIcone="material-symbols-light:mobile-friendly-sharp"
            titre="Responsive design"
            sousTitre1="App réactive tout types de format"
            sousTitre2="Transition automatique support"
            sousTitre3="Adaptation agencer des élements"
            sousTitre4="Optimisation et ergonomie"
          />
        </div>
        <div>
          <ObjectifCarte
            srcIcone="material-symbols-light:shield-lock-outline-rounded"
            titre="Données Sécurisés"
            sousTitre1="Chiffrement des données"
            sousTitre2="Cryptographie et Hachage"
            sousTitre3="Transmission critique sécurisé"
            sousTitre4="Test et contrôle de sécurité "
          />
        </div>
        <div>
          <ObjectifCarte
            srcIcone="material-symbols-light:deployed-code-update-rounded"
            titre="Code Clean"
            sousTitre1="Principe KISS and DRY"
            sousTitre2="Refactoring Pattern qualité"
            sousTitre3="Test unitaire feature"
            sousTitre4="Bonnes Pratiques lisibilité"
          />
        </div>
      </section>
    </div>
  </div>
</template>
<script setup></script>
<style>
.content-all-section-objectif {
  width: 100%;
}
.content-objectif {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
