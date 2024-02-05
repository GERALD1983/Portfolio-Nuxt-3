<template>
  <div id="content-slides" class="relative flex-column-center">
    <section id="slide1" class="sliders">
      <div class="slides-gauche flex-around">
        <div>
          <img src="../assets/sql.png" alt="competence développeur sql logo" />
        </div>
        <div>
          <img
            src="../assets/postman.png"
            alt="competence développeur postman logo"
          />
        </div>
        <div>
          <img
            src="../assets/bootstrap.png"
            alt="competence développeur bootstrap logo"
          />
        </div>
        <div>
          <img
            src="../assets/cline.png"
            alt="competence développeur en ligne de commande logo"
          />
        </div>
        <div>
          <img src="../assets/css.png" alt="competence développeur css logo" />
        </div>
        <div>
          <img
            src="../assets/gimp.png"
            alt="competence développeur gimp logo"
          />
        </div>
        <div>
          <img src="../assets/git.png" alt="competence développeur git logo" />
        </div>
        <div>
          <img
            src="../assets/github.png"
            alt="competence développeur github logo"
          />
        </div>
        <div>
          <img
            src="../assets/html.png"
            alt="competence développeur html logo"
          />
        </div>
        <div>
          <img
            src="../assets/js.png"
            alt="competence développeur javascript logo"
          />
        </div>
      </div>
    </section>

    <section id="slide2" class="sliders">
      <div class="slides-droite flex-around">
        <div><img src="../assets/sql.png" alt="" /></div>
        <div><img src="../assets/sql.png" alt="" /></div>
        <div><img src="../assets/sql.png" alt="" /></div>
        <div><img src="../assets/sql.png" alt="" /></div>
        <div><img src="../assets/sql.png" alt="" /></div>
        <div>
          <img
            src="../assets/vscode.png"
            alt="competence développeur visual studio code logo"
          />
        </div>
        <div>
          <img
            src="../assets/json.png"
            alt="competence développeur json logo"
          />
        </div>
        <div>
          <img
            src="../assets/mongodb.png"
            alt="competence développeur mongodb logo"
          />
        </div>
        <div>
          <img
            src="../assets/node.png"
            alt="competence développeur Node Js logo"
          />
        </div>
        <div>
          <img src="../assets/npm.png" alt="competence développeur npm logo" />
        </div>
      </div>
    </section>
    <section id="slide3" class="sliders">
      <div class="slides-gauche flex-around">
        <div><img src="../assets/sql.png" alt="" /></div>
        <div><img src="../assets/sql.png" alt="" /></div>
        <div><img src="../assets/sql.png" alt="" /></div>
        <div><img src="../assets/sql.png" alt="" /></div>
        <div><img src="../assets/sql.png" alt="" /></div>
        <div><img src="../assets/sql.png" alt="" /></div>
        <div><img src="../assets/sql.png" alt="" /></div>
        <div><img src="../assets/sql.png" alt="" /></div>
        <div><img src="../assets/sql.png" alt="" /></div>
        <div><img src="../assets/sql.png" alt="" /></div>
      </div>
    </section>

    <div class="absolute-left"></div>
    <div class="absolute-right"></div>
  </div>
</template>
<script setup></script>
<style scoped>
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
