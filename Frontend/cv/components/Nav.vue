<template>
  <div id="nav-invisible"></div>
  <div id="nav" class="nav-size flex-around">
    <div @click="toTop">
      <Logo class="logo-nav" />
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
    <div class="social-nav flex-around">
      <IconsLinkedin class="color-social" />
      <IconsPhoneicon class="color-social" />
      <IconsGiticon class="color-social" />
    </div>
  </div>
</template>

<script setup lang="ts">
import jump from "jump.js";
onMounted(() => {
  var navbar = document.getElementById("nav") as HTMLElement;
  var navInvisible = document.getElementById("nav-invisible") as HTMLElement;
  var header = document.getElementById("backMaPage") as HTMLElement;
  var visible = navbar.offsetHeight;
  console.log(visible);
  window.addEventListener("scroll", () => {
    let scrollValue = window.scrollY;
    console.log(scrollValue);
    if (scrollValue > visible) {
      navbar.classList.add("nav-fixed");
      navInvisible.classList.add("nav-ghost");
    } else if (scrollValue == 0) {
      navbar.classList.add("nav-ombre-inverse");
      navbar.classList.remove("nav-fixed");
      navInvisible.classList.remove("nav-ghost");
    } else {
      navbar.classList.remove("nav-ombre-inverse");
      navbar.classList.remove("nav-fixed");
      navInvisible.classList.remove("nav-ghost");
    }
  });
});

function toTop() {
  // window.scrollTo(0, 400);
  jump(".back-ma-page", {
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
.nav-ghost {
  height: 80px;
  /* background-color: white; */
  display: block;
  opacity: 1;
  width: 100%;
}
.nav-ombre-inverse {
  box-shadow: 0 0 0 0 rgb(23, 255, 236);
  animation-iteration-count: 1;
  animation-duration: 0.5s;
  animation-name: pulseinverse;
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
.logo-nav {
  cursor: pointer;
  margin-left: 50px;
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
.social-nav {
  width: 150px;
  margin-right: 50px;
}
.color-social {
  color: #3f3f46;
  cursor: pointer;
}
.color-social:hover {
  color: #767685;
}
@keyframes pulse {
  to {
    box-shadow: 0 0 0 15px rgba(0, 0, 0, 0.01);
  }
}
@keyframes pulseinverse {
  0% {
    transform: scale(0.97);
    box-shadow: 0 0 0 12px rgba(0, 0, 0, 0.01);
    border: -1px solid rgb(23, 255, 236);
  }
  100% {
    transform: scale(1);
  }
}
</style>
