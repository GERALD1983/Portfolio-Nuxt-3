<template>
  <div>
    <div id="back-page" class="back-slide backSlideSize mobileBackSlideSize">
      <div>
        <h1 class="titre-principale">
          Développeur Vue.js Nuxt.js en Frontend
          <br />Développeur Node.js Express en Backend
        </h1>
        <h2 class="titre-second">
          Contruisons ensemble votre application de demain
          <br />Développons en collobaorations votre startup innovantes
          <br />
          Avec des Frameworks puissants et Modernes
        </h2>
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
          class="mobileEffacePhotoMoiG img-profil ombre"
          src="../assets/profil-gerald.png"
          alt="photo profil développeur web"
        />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "maPage",
  data() {
    return {
      messages: [
        "Développeur Web",
        "Spécialisé en JavaScript",
        "Développeur Frontend Vue.js",
        "Développeur Backend Node.js",
        "Intégrateur Prestashop",
        "Webmaster optimisation Seo",
        "Développeur Fullstack Js",
      ],
      currentNumber: 0,
      timer: null,
    };
  },
  created() {},

  methods: {
    afficherMasquer() {
      let remplaceDialPhoto = document.getElementById("remplace-dialogue");
      let dialPhoto = document.getElementById("dial-photo");
      let dialogue1 = document.getElementById("dialogue1");
      let dialogue2 = document.getElementById("dialogue2");
      let dialogue3 = document.getElementById("dialogue3");

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
      } else {
        remplaceDialPhoto.style.display = "block";
        dialPhoto.style.display = "none";
      }
    },
  },
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

.back-slide {
  background-repeat: no-repeat;
  background-position: right;
  background-image: url("../assets/gradient-banniere-desktop.svg");
  animation: opacBack1 1s ease-in-out;
}

.ombre:hover {
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
    width: 25ch;
  }
}
@keyframes typing2 {
  0% {
    width: 0ch;
  }
  100% {
    width: 32ch;
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
