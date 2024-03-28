<template>
  <div>
    <div class="flex-center">
      <h2 class="titre-competences">
        Des Solutions
        <span class="color-titre-competences"> à apporté à vos projets ?</span>
      </h2>
    </div>
    <div class="flex-center">
      <h3 class="sous-titre-competences">
        De la flexibilité à la complexité, du valorisant au performant ceux qui
        m'ont fait confiance, améliorent leur entreprise.
      </h3>
    </div>

    <div class="relative flex-around">
      <div class="sliders">
        <div class="slides flex-around">
          <div class="slide">
            <img
              src="../assets/site-amenagement-jardin.jpg"
              alt="site amenagement jardin"
            />
          </div>
          <div class="slide">
            <img
              src="../assets/site-vente-trotinette-scooter.jpg"
              alt="site vente trotinette scooter"
            />
          </div>
          <div class="slide">
            <img
              src="../assets/audio370.jpg"
              alt="site audioprothésiste et audioprothése"
            />
          </div>
          <div class="slide">
            <img
              src="../assets/site-amenagement-objet-design.jpg"
              alt="site amenagement objet design"
            />
          </div>
          <div class="slide">
            <img
              src="../assets/site-blockchain-cryptomonnaie.jpg"
              alt="site informations blockchain cryptomonnaie"
            />
          </div>
          <div class="slide">
            <img
              src="../assets/opticien370.jpg"
              alt="site e-commerce opticien"
            />
          </div>
          <div class="slide">
            <img
              src="../assets/site-saas-app.jpg"
              alt="site saas application web"
            />
          </div>
          <div class="slide">
            <img
              src="../assets/site-gaming-developpement-jeux.jpg"
              alt="site de gaming site de développement de jeux"
            />
          </div>
          <div class="slide">
            <img
              src="../assets/site-vente-chaussure.jpg"
              alt="site ecommerce chaussure"
            />
          </div>
          <div class="slide">
            <img
              src="../assets/CHOUETTE370.jpg"
              alt="agence web site web sur mesure"
            />
          </div>
          <div class="slide">
            <img
              src="../assets/site-location-limousine-luxe.jpg"
              alt="site web de location de voiture de luxe limousine"
            />
          </div>
          <div class="slide">
            <img
              src="../assets/GROUPOMANIA370.jpg"
              alt="site reseau social pour entreprise"
            />
          </div>
          <div class="slide">
            <img
              src="../assets/site-nettoyage-vehicule.jpg"
              alt="site web netoyyage véhicule"
            />
          </div>
          <div class="slide">
            <img
              src="../assets/site-statistique-business-suivi.jpg"
              alt="site crm de statistique et de suivi business entreprise"
            />
          </div>
          <div class="slide">
            <img
              src="../assets/site-transport-logistique.jpg"
              alt="site web de transport et logistique"
            />
          </div>
          <div class="slide">
            <img
              src="../assets/site-vente-immobillier.jpg"
              alt="site application de vente et location immobilier"
            />
          </div>
          <div class="slide">
            <img src="../assets/RESTO370.jpg" alt="" />
          </div>
          <div class="slide">
            <img
              src="../assets/site-vente-location-vehicule.jpg"
              alt="site vente et location de voiture"
            />
          </div>
        </div>
      </div>
      <div class="absolute-left"></div>
      <div class="absolute-right"></div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
/* html {
  background-color: gray;
} */
.relative {
  margin: 10%;
  position: relative;
}
.absolute-left {
  position: absolute;
  top: 0;
  left: 0;

  /* test

  background: linear-gradient(
    to right,
    #ffffff 50%,
    #fffefe 50%,
    #ffffff09 100%,
    #ffffff 100%
  ); */
  background: linear-gradient(
    to right,
    #ffffff 10%,
    #ffffff 25%,
    #ffffff00 100%,
    #ffffff 100%
  );
  width: 200px;
  height: 100%;
}
.absolute-right {
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(
    to left,
    #ffffff 10%,
    #ffffff 25%,
    #ffffff00 100%,
    #ffffff 100%
  );
  width: 200px;
  height: 100%;
}
.sliders {
  /* width: calc(2 * 370px * 5); */
  /* width: 100%; */

  /* width: calc(30% * 5); */

  width: calc(30% * 15);

  overflow: hidden;
}

.slides {
  --slider-inner-width: 1500px;
  /* width: calc(2 * 370px * 5); */
  /* width: calc(30% * 5); */

  /* width: calc(30% * 5); */

  width: calc(30% * 20);
  /* ecran au dessus de 1300 px
  animation: defile 50s infinite linear; */
  animation: defile 15s infinite linear;
  animation-play-state: running;
}
.slides:hover {
  animation-play-state: paused;
}
.slide {
  margin-right: 20px;
  margin-left: 20px;
  float: left;
}
.slide > img {
  /* border: 1px solid rgb(168, 168, 168); */
  border-radius: 2px;
}
@keyframes defile {
  0% {
    transform: translate(25%);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* RESPONSIVE */

@media screen and (max-width: 1450px) {
  .slides {
    width: calc(30% * 24);
    /* ecran au dessus de 1300 px
  animation: defile 50s infinite linear; */
    animation: defile 15s infinite linear;
  }
}

@media screen and (max-width: 1250px) {
  .slides {
    width: calc(30% * 27);
    /* ecran au dessus de 1300 px
  animation: defile 50s infinite linear; */
    animation: defile 15s infinite linear;
  }
}

@media screen and (max-width: 1140px) {
  .slides {
    width: calc(30% * 34);
    /* ecran au dessus de 1300 px
  animation: defile 50s infinite linear; */
    animation: defile 15s infinite linear;
  }
}
@media screen and (max-width: 950px) {
  .slides {
    width: calc(30% * 33);
    /* ecran au dessus de 1300 px
  animation: defile 50s infinite linear; */
    animation: defile 15s infinite linear;
  }
  .slide > img {
    width: 296px;
    height: 296px;
  }
}
</style>
