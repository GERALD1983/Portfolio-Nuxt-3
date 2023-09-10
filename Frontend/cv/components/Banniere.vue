<template>
  <div>
    <div id="back-page" class="back-slide">
      <img
        class="back-img"
        src="../assets/gradient-banniere-desktop.svg"
        alt="photo profil développeur web"
      />
      <div>
        <button id="bouton-version">🔥 Dev version typescript</button>
        <h1 class="titre-principale">
          Développeur Vue.js Nuxt.js en Frontend
          <br />Développeur Node.js Express en Backend
        </h1>
        <h2 class="titre-second">
          Contruisons ensemble votre application de demain
          <br />Développons en colloboration votre startup innovantes
          <br />
          Avec des Frameworks puissants et Modernes
        </h2>
        <div>
          <button class="bouton-savoir">En savoir plus</button>
          <button id="bouton-version-bottom">
            <span class="fleche-bouton">► </span
            ><span class="call-passe">: hover </span
            ><span class="texte-call-passe"> move to the picture</span>
          </button>
        </div>
      </div>
      <section class="parent-dial-img-profil">
        <div id="dial-photo" class="afficher-dialogue">
          <h2 class="dialogue-font">
            <div id="dialogue1">
              <span>Bonjour ! Je suis Gérald , </span>
            </div>
            <div id="dialogue2">
              <span> Développeur Vue.js et Node.js ! </span>
            </div>

            <div id="dialogue3">
              <span> Bienvenue à vous ! </span>
            </div>
          </h2>
        </div>
        <div id="remplace-dialogue"></div>
        <img
          @mouseenter="afficherMasquer()"
          @mouseleave="afficherMasquer()"
          width="200px"
          height="200px"
          class="img-profil ombre"
          src="../assets/profil-gerald.png"
          alt="photo profil développeur web"
        />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const afficherMasquer = () => {
  let remplaceDialPhoto = document.getElementById(
    "remplace-dialogue",
  ) as HTMLElement;
  let dialPhoto = document.getElementById("dial-photo") as HTMLElement;
  let dialogue1 = document.getElementById("dialogue1") as HTMLElement;
  let dialogue2 = document.getElementById("dialogue2") as HTMLElement;
  let dialogue3 = document.getElementById("dialogue3") as HTMLElement;

  if (dialPhoto.style.display == "none" || dialPhoto.style.display == "") {
    dialPhoto.style.display = "block";
    remplaceDialPhoto.style.display = "none";
    dialogue2.style.display = "none";
    dialogue3.style.display = "none";
    dialogue1.classList.add("dialogue1");

    setTimeout(() => {
      dialogue1.classList.remove("dialogue1");
      dialogue2.style.display = "block";
      dialogue2.classList.add("dialogue2");
    }, 5000);
    setTimeout(() => {
      dialogue1.classList.remove("dialogue1");
      dialogue2.classList.remove("dialogue2");
      dialogue3.style.display = "block";
      dialogue3.classList.add("dialogue3");
    }, 10000);
    console.log(dialogue1.innerText);
    console.log(dialogue2.innerText);
    console.log(dialogue3.innerText);
  } else {
    remplaceDialPhoto.style.display = "block";
    dialPhoto.style.display = "none";
  }
};
</script>

<style scoped>
#back-page {
  width: 100%;
  height: 720px;
  justify-content: space-around;
  align-items: center;
  display: flex;
}
.titre-principale {
  width: 600px;
  font-weight: 900;
  font-size: 40px;
}
.titre-second {
  font-size: 20px;
  padding-bottom: 20px;
}
#bouton-version {
  padding-left: 10px;
  padding-right: 10px;
  height: 27px;
  border-radius: 7px;
  background: #ededed;
  color: rgb(111, 111, 111);
  cursor: pointer;
}
#bouton-version:hover {
  background: #dbdbdb;
  color: rgb(83, 82, 82);
}

.bouton-savoir {
  height: 45px;
  width: 120px;
  background-color: black;
  border: solid 3px rgb(8, 216, 119);
  border-radius: 13px;
  color: white;
  margin-bottom: 50px;
}
#bouton-version-bottom {
  margin-left: 20px;
  padding-right: 20px;
  height: 35px;
  width: 220px;
  border-radius: 7px;
  background: #ededed;
  color: rgb(111, 111, 111);
  cursor: pointer;
}
#bouton-version-bottom:hover {
  background: #dbdbdb;
  color: rgb(83, 82, 82);
}
.fleche-bouton {
  color: rgb(8, 216, 119);
}

.call-passe {
  color: #b469c1;
}
.texte-call-passe {
  color: #51a9dd;
}

.parent-dial-img-profil {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.img-profil {
  border-radius: 50%;
  margin-bottom: 200px;
}
#remplace-dialogue {
  display: block;
  height: 150px;
  width: 400px;
}
.afficher-dialogue {
  display: none;
  height: 150px;
  width: 400px;
}

.dialogue-font {
  font-weight: 900;
  font-size: 20px;
  color: grey;
  /*
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    */
  font-family: "Times New Roman", Times, serif Tahoma, Geneva, Verdana,
    sans-serif;
}
.dialogue1 {
  animation: typing1 3s steps(23, end) forwards, blink 1s infinite;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid white;
  width: 24ch;
}
.dialogue2 {
  animation: typing2 3s steps(23, end) forwards, blink2 1s infinite;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid white;
  width: 32ch;
}
.dialogue3 {
  animation: typing3 2s steps(23, end) forwards, blink3 1s infinite;
  overflow: hidden;
  white-space: nowrap;
  border-right: 3px solid white;
  width: 16ch;
}
.back-img {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
}

/* .back-slide {
  background-repeat: no-repeat;
  background-position: right;
  background-image: url("../assets/gradient-banniere-desktop.svg");
  animation: opacBack1 1s ease-in-out;
} */

.ombre:hover {
  cursor: pointer;
  box-shadow: 0 0 0 0 rgb(23, 255, 236);
  animation: pulse 1.3s infinite;
}
@keyframes opacBack1 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes pulse {
  to {
    box-shadow: 0 0 0 18px rgba(0, 0, 0, 0.01);
  }
}
@keyframes typing1 {
  0% {
    width: 0ch;
  }
  100% {
    width: 21ch;
  }
}
@keyframes typing2 {
  0% {
    width: 0ch;
  }
  100% {
    width: 26ch;
  }
}
@keyframes typing3 {
  0% {
    width: 0ch;
  }
  100% {
    width: 16ch;
  }
}
@keyframes blink {
  0%,
  100% {
    border-right: 3px solid transparent;
  }
  50% {
    border-right: 3px solid white;
  }
}
@keyframes blink2 {
  0%,
  100% {
    border-right: 3px solid transparent;
  }
  50% {
    border-right: 3px solid white;
  }
}
@keyframes blink3 {
  0%,
  100% {
    border-right: 3px solid transparent;
  }
  50% {
    border-right: 3px solid white;
  }
}
</style>
