<template>
  <div class="fond-footer">
    <section class="flex-around haut-footer">
      <aside class="flex-around">
        <div class="categories flex-column-start">
          <h5 class="titre-categories">Contact</h5>

          <a href=""
            >Nuxters
            <span> <Icon name="uil:github" size="15px" color="grey" /></span
          ></a>
          <a href="">Nuxters</a>
          <a href="">Nuxters</a>
          <a href="">Nuxters</a>
        </div>
        <div class="categories flex-column-start">
          <h5 class="titre-categories">Contact</h5>
          <a href="">Nuxters</a>
          <a href="">Nuxters</a>
          <a href="">Nuxters</a>
          <a href="">Nuxters</a>
        </div>
        <div class="categories flex-column-start">
          <h5 class="titre-categories">Contact</h5>
          <a href="">Nuxters</a>
          <a href="">Nuxters</a>
          <a href="">Nuxters</a>
          <a href="">Nuxters</a>
        </div>
      </aside>
      <div>
        <div class="adress flex-column-start">
          <h4 id="boxK" class="titre-categories">
            <b-icon icon="house-door-fill"></b-icon> Adresse :
          </h4>
          <p id="boxJ">Ferron Gérald GF Tech 3 rue de la gare REDANGE 57390</p>

          <p id="boxG">
            <b-icon class="mr-2" icon="telephone-plus"></b-icon>
            Bureau : (+33) 09 70 44 46 21
            <br />
            <b-icon class="mr-2" icon="mailbox"></b-icon> Mail:
            ferron-gerald@outlook.fr
          </p>
        </div>
      </div>
    </section>
    <section class="bas-footer"></section>
  </div>
</template>
<script></script>
<style>
.fond-footer {
  margin-top: 120px;
  border-top: 1px solid rgb(213, 213, 213);
  border-bottom: 1px solid rgb(213, 213, 213);
  width: 100%;
}
.haut-footer {
  margin-left: 120px;
  margin-right: 120px;
  height: 192px;
  padding-top: 48px;
  padding-bottom: 48px;
  padding-right: 32px;
  padding-left: 32px;
}
.categories {
  width: 245px;
  height: 192px;
}
.categories > h5 {
  margin-top: 0px;
  margin-bottom: 8px;
  /* font-size: small; */
}
.categories > a {
  text-decoration: none;
  color: #525865;
  margin-top: 16px;
  font-size: smaller;
}
.titre-categories {
  color: #0f172a;
}
.adress {
  width: 384px;
  height: 192px;
  color: #0f172a;
}
.adress > h4 {
  margin-top: 0;
  margin-bottom: 0;
}
.adress > p {
  color: #6d7c92;
  margin-top: 0;
}

.bas-footer {
  border-top: 1px solid rgb(213, 213, 213);
  border-bottom: 1px solid rgb(213, 213, 213);
  height: 32px;
  padding-top: 24px;
  padding-bottom: 24px;
  padding-right: 32px;
  padding-left: 32px;
}
</style>

<!-- <template>
  <div id="footer" class="ancreForm bg-white">
    <div class="backFooter foot mobileFootHeight">
      <div>
        <h3
          id="contact"
          class="aos-item text-light pt-5 pb-3"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          Contact
        </h3>
      </div>

      <div class="mb-5 mt-3 d-flex justify-content-center">
        <div id="logosReseaux" class="larg50 d-flex justify-content-between">
          <div class="aos-item" data-aos="fade-down" data-aos-duration="2000">
            <b-icon
              @click="clickFacebook"
              class="lienSouris"
              data-aos="fade-down"
              data-aos-duration="2000"
              icon="facebook"
              font-scale="2"
            ></b-icon>
          </div>

          <div class="aos-item" data-aos="fade-down" data-aos-duration="2000">
            <b-icon
              @click="clickGit"
              class="lienSouris"
              data-aos="fade-down"
              data-aos-duration="2000"
              icon="github"
              font-scale="2"
            ></b-icon>
          </div>

          <div class="aos-item" data-aos="fade-down" data-aos-duration="2000">
            <b-icon
              @click="clickLinkedIn"
              class="lienSouris"
              data-aos="fade-down"
              data-aos-duration="2000"
              icon="linkedin"
              font-scale="2"
            ></b-icon>
          </div>

          <div class="aos-item" data-aos="fade-down" data-aos-duration="2000">
            <b-icon
              @click="clickTwitter"
              class="lienSouris"
              icon="twitter"
              font-scale="2"
            ></b-icon>
          </div>
        </div>
      </div>
      <div class="mobileFoot d-flex justify-content-around">
        <div
          class="aos-item margBlocAdresseMobile d-flex flex-column justify-content-center text-light"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <h5 id="boxK"><b-icon icon="house-door-fill"></b-icon> Adresse :</h5>
          <p id="boxJ">3 rue de la gare</p>
          <p id="boxI">REDANGE 57390</p>
          <p id="boxH">
            <b-icon class="mr-2" icon="telephone-plus"></b-icon>
            Bureau : (+33) 09 70 44 46 21
          </p>

          <p id="boxG">
            <b-icon class="mr-2" icon="mailbox"></b-icon> Mail:
            ferron-gerald@outlook.fr
          </p>
        </div>
        <div class="mobileLarg100 larg50">
          <Formulaire />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Formulaire from "./Form.vue";
export default {
  name: "foot",
  components: {
    Formulaire,
  },
  data() {
    return {
      urlGitHub: "https://github.com/GERALD1983",
      urlLinkedIn: "https://www.linkedin.com/in/gerald-ferron/",
      urlFacebook: "https://fr-fr.facebook.com/",
      urlTwitter: "https://twitter.com/?lang=fr",
    };
  },

  mounted() {},
  methods: {
    clickGit() {
      window.open(`${this.urlGitHub}`);
    },
    clickLinkedIn() {
      window.open(`${this.urlLinkedIn}`);
    },
    clickFacebook() {
      window.open(`${this.urlFacebook}`);
    },
    clickTwitter() {
      window.open(`${this.urlTwitter}`);
    },
  },
};
</script>

<style>
.boxG {
  animation: 1s linear boxG;
}
@keyframes boxG {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
  }
}
.boxH {
  animation: 1s linear boxH;
}
@keyframes boxH {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
  }
}
.boxI {
  animation: 1s linear boxI;
}
@keyframes boxI {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
  }
}
.boxJ {
  animation: 1s linear boxJ;
}
@keyframes boxJ {
  0% {
    opacity: 0;
    transform: translateX(80%);
  }
  100% {
    opacity: 1;
  }
}
.boxK {
  animation: 1s linear boxK;
}
@keyframes boxK {
  0% {
    opacity: 0;
    transform: translateX(-80%);
  }
  100% {
    opacity: 1;
  }
}
</style> -->
