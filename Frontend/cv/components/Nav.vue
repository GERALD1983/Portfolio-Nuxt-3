<template>
  <div id="nav" class="nav-size flex-around">
    <div @click="toTop" class="ombre-nav">
      <Logo />
    </div>

    <div class="nav-projet flex-center">
      <div @click="toPropos" class="ombre-nav bordure-logo flex-center">
        <h5 class="color-grey-letter">A Propos</h5>
      </div>
      <div @click="toSkills" class="ombre-nav bordure-logo flex-center">
        <h5 class="color-grey-letter">Compétences</h5>
      </div>
      <div @click="toProject" class="ombre-nav bordure-logo flex-center">
        <h5 class="color-grey-letter">Projets</h5>
      </div>
      <div @click="toFoot" class="ombre-nav bordure-logo flex-center">
        <h5 class="color-grey-letter">Contact</h5>
      </div>
    </div>
    <div class="ombre-nav flex-center">
      <h5 class="color-grey-letter">git</h5>
      <h5 class="color-grey-letter">twit</h5>
      <h5 class="color-grey-letter">link</h5>
    </div>
  </div>
</template>

<script setup lang="ts">
import jump from "jump.js";
onMounted(() => {
  var navbar = document.getElementById("nav") as HTMLElement;
  var header = document.getElementById("backMaPage") as HTMLElement;
  var visible = navbar.offsetHeight;
  console.log(visible);
  window.addEventListener("scroll", () => {
    let scrollValue = window.scrollY;
    console.log(scrollValue);
    if (scrollValue > visible) {
      navbar.classList.add("nav-fixed");
    } else {
      navbar.classList.remove("nav-fixed");
    }
  });
});

function toTop() {
  // window.scrollTo(0, 400);
  jump("#backMaPage", {
    duration: 1000,
    callback: () => console.log("Saut terminé!"),
  });
}
const toPropos = () => {
  // window.scrollTo(0, 400);
  jump("#a-propos", {
    duration: 1000,
    callback: () => console.log("Saut terminé!"),
  });
};
const toSkills = () => {
  // window.scrollTo(0, 400);
  jump("#mes-skills", {
    duration: 1000,
    callback: () => console.log("Saut terminé!"),
  });
};
function toFoot() {
  // window.scrollTo(0, 400);
  jump(".ancreForm", {
    duration: 1000,
    callback: () => console.log("Saut terminé!"),
  });
}
const toProject = () => {
  // window.scrollTo(0, 400);
  jump("#titreProjet", {
    duration: 1000,
    callback: () => console.log("Saut terminé!"),
  });
};
</script>

<style>
/* .navNoOpac {
  opacity: 1 !important;
} */
.nav-fixed {
  position: fixed;
  z-index: 9;
  top: 0;
  opacity: 0.5;
}
.nav-size {
  height: 80px;
  /* background-color: white; */
  color: grey;
  width: 100%;
  /* border-bottom: 0.1px solid grey; */
}
.ombre-nav {
  cursor: pointer;
}
.ombre-nav:hover {
  /* box-shadow: 0 0 0 0 #748928ff; */
  box-shadow: 0 0 0 0 rgb(23, 255, 236);
  animation: pulse 1.3s infinite;
  /* background: #9e9d9d !important;
    color: white !important;*/
}
.nav-projet {
  width: 80%;
}
.bordure-logo {
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 0.5em;
  /* background-color: white; */
  color: grey;
  padding-left: 15px;
  padding-right: 15px;
  height: 35px;

  /*border: 1mm ridge#ffdea4;*/
}
.bordure-logo:hover {
  background-color: #f4f4f5;
  padding-left: 15px;
  padding-right: 15px;
  height: 35px;
  cursor: pointer;
  /* border: 0.1px solid #ffdea4; */
  /*border: 1mm ridge#ffdea4;*/
}
</style>
