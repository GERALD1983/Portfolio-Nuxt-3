<template>
  <div id="content-slides" class="relative flex-column-center">
    <section id="slide1" class="sliders">
      <div class="slides-gauche flex-around">
        <div class="content-image-competence">
          <img src="../assets/sql.png" alt="competence développeur sql logo" />
        </div>
        <div class="content-image-competence">
          <img
            src="../assets/postman.png"
            alt="competence développeur postman logo"
          />
        </div>
        <div class="content-image-competence">
          <img
            src="../assets/bootstrap.png"
            alt="competence développeur bootstrap logo"
          />
        </div>
        <div class="content-image-competence">
          <img
            src="../assets/cline.png"
            alt="competence développeur en ligne de commande logo"
          />
        </div>
        <div class="content-image-competence">
          <img src="../assets/css.png" alt="competence développeur css logo" />
        </div>
        <div class="content-image-competence">
          <img
            src="../assets/chat-gpt-logo-competence.png"
            alt="competence développeur gimp logo"
          />
        </div>
        <div class="content-image-competence">
          <img src="../assets/git.png" alt="competence développeur git logo" />
        </div>
        <div class="content-image-competence">
          <img
            src="../assets/github.png"
            alt="competence développeur github logo"
          />
        </div>
        <div class="content-image-competence">
          <img
            src="../assets/html.png"
            alt="competence développeur html logo"
          />
        </div>
        <div class="content-image-competence">
          <img
            src="../assets/js.png"
            alt="competence développeur javascript logo"
          />
        </div>
      </div>
    </section>

    <section id="slide2" class="sliders">
      <div class="slides-droite flex-around">
        <div class="content-image-competence">
          <img
            src="../assets/ssl-logo-competence.jpg"
            alt="competence développeur ssl logo"
          />
        </div>
        <div class="content-image-competence">
          <img
            src="../assets/sequelize-logo-competence.jpg"
            alt="competence développeur sequelize logo"
          />
        </div>
        <div class="content-image-competence">
          <img
            src="../assets/gitlab-logo-competence.png"
            alt="competence développeur gitlab logo"
          />
        </div>
        <div class="content-image-competence">
          <img
            src="../assets/Cpanel-logo-competence.png"
            alt="competence développeur cpanel logo"
          />
        </div>
        <div class="content-image-competence">
          <img
            src="../assets/express.png"
            alt="competence développeur express js logo"
          />
        </div>
        <div class="content-image-competence">
          <img
            src="../assets/vscode.png"
            alt="competence développeur visual studio code logo"
          />
        </div>
        <div class="content-image-competence">
          <img
            src="../assets/json.png"
            alt="competence développeur json logo"
          />
        </div>
        <div class="content-image-competence">
          <img
            src="../assets/mongodb.png"
            alt="competence développeur mongodb logo"
          />
        </div>
        <div class="content-image-competence">
          <img
            src="../assets/node.png"
            alt="competence développeur Node Js logo"
          />
        </div>
        <div class="content-image-competence">
          <img src="../assets/npm.png" alt="competence développeur npm logo" />
        </div>
      </div>
    </section>
    <section id="slide3" class="sliders">
      <div class="slides-gauche flex-around">
        <div class="content-image-competence">
          <img
            src="../assets/vue-logo-competence.png"
            alt="competence développeur Vue Js logo"
          />
        </div>
        <div class="content-image-competence">
          <img
            src="../assets/nuxt-logo-competence.png"
            alt="competence développeur Nuxt Js logo"
          />
        </div>
        <div class="content-image-competence">
          <img
            src="../assets/typescript-logo-competence.png"
            alt="competence développeur typescript logo"
          />
        </div>
        <div class="content-image-competence">
          <img
            src="../assets/intellij-logo-competence.png"
            alt="competence développeur intellij logo"
          />
        </div>
        <div class="content-image-competence">
          <img
            src="../assets/java-logo-competence.png"
            alt="competence développeur java logo"
          />
        </div>
        <div class="content-image-competence">
          <img
            src="../assets/langage-c-logo-competence.png"
            alt="competence développeur langage c logo"
          />
        </div>
        <div class="content-image-competence">
          <img
            src="../assets/prestashop-logo-competence.jpg"
            alt="competence développeur prestashop logo"
          />
        </div>
        <div class="content-image-competence">
          <img
            src="../assets/wordpress-logo-competence.png"
            alt="competence développeur wordpress logo"
          />
        </div>
        <div class="content-image-competence">
          <img
            src="../assets/zapier-logo-competence.png"
            alt="competence développeur zapier logo"
          />
        </div>
        <div class="content-image-competence">
          <img
            src="../assets/jest-test-logo-competence.png"
            alt="competence développeur jest test unitaire logo"
          />
        </div>
      </div>
    </section>

    <div class="absolute-left"></div>
    <div class="absolute-right"></div>
  </div>
</template>
<script setup></script>
<style scoped>
.content-image-competence {
  width: 86px;
  height: 86px;
  background-color: #ffffff;
  border: 1px solid rgb(194, 194, 194);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.content-image-competence > img {
  width: 75px;
  height: 75px;
}
#slide1,
#slide2,
#slide3 {
  margin-top: 50px;
  width: 100%;
}

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
    #ffffff 5%,
    #ffffff00 100%,
    #ffffff 70%
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
    #ffffff 5%,
    #ffffff00 100%,
    #ffffff 70%
  );
  width: 200px;
  height: 100%;
}
.sliders {
  /* width: calc(2 * 370px * 5); */
  /* width: 100%; */
  width: calc(25% * 7);

  overflow: hidden;
}

.slides-gauche {
  --slider-inner-width: 1500px;
  /* width: calc(2 * 370px * 5); */
  /* width: calc(30% * 5); */
  width: calc(25% * 7);

  animation: defile-gauche 25s infinite linear;
  animation-play-state: running;
}
.slides-droite {
  --slider-inner-width: 1500px;
  /* width: calc(2 * 370px * 5); */
  /* width: calc(30% * 5); */
  width: calc(25% * 7);
  animation: defile-droite 25s infinite linear;
  animation-play-state: running;
}
.slides-gauche:hover {
  animation-play-state: paused;
}
.slides-droite:hover {
  animation-play-state: paused;
}
.slide {
  margin-right: 20px;
  margin-left: 20px;
  float: left;
}
@keyframes defile-gauche {
  0% {
    transform: translate(52%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes defile-droite {
  0% {
    transform: translate(-100%);
  }
  100% {
    transform: translateX(52%);
  }
}
@keyframes scroll {
  0% {
    transform: translateX(-5%);
  }
  100% {
    transform: translateX(calc((0px - var(--slider-inner-width)) - 6%));
  }
}
</style>
