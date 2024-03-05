<template>
  <div>
    <section class="flex-column-center">
      <div class="flex-column-center">
        <h2 class="titre-contact">CONTACT</h2>
        <h3 class="flex-column-center">
          <span class="titre-formulaire color-titre-formulaire"
            >PRENDRE RENDEZ VOUS</span
          >
          <span class="titre-trait-span"></span>
        </h3>
      </div>

      <form @submit="onSubmit" class="flex-column-center formulaire-contact">
        <section class="flex-around section1-formulaire">
          <div class="flex-column-start">
            <label for="email">Email <span class="etoile-label">*</span></label>
            <!-- v-bind="emailAttrs"  -->

            <span class="erreur-message">{{ errors.email }}</span>
            <input
              v-model="email"
              type="email"
              placeholder="Entrez votre adresse mail..."
            />

            <label for="text">Nom <span class="etoile-label">*</span></label>
            <input type="text" placeholder="Entrez votre nom..." />
            <label for="phone"
              >Téléphone <span class="etoile-label">*</span></label
            >
            <input type="phone" placeholder="Entrez votre numéro..." />
          </div>
          <div class="flex-column-start">
            <label for="message"
              >Message <span class="etoile-label">*</span></label
            >
            <input
              class="input-message"
              type="text-area"
              placeholder="Laissez votre message..."
              rows="5"
              wrap="soft"
              aria-required="true"
            />
          </div>
        </section>
        <section class="section2-formulaire flex-center">
          <div class="content-all-button flex-around">
            <button id="bouton-reset" type="reset">Reset</button>
            <button id="bouton-submit" type="submit">
              <span>
                <Icon
                  class="icon-plane"
                  name="ion:ios-paper-plane"
                  size="20px"
                  color="white"
                />
              </span>
              Get Contact
            </button>
          </div>
          <pre>{{ values }}</pre>
        </section>
      </form>
    </section>
  </div>
</template>
<script setup lang="ts">
import { useForm } from "vee-validate";

import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";
// Creates a form context
// This component now acts as a form
// Usually you will destruct the form context to get what you need

const validationSchema = toTypedSchema(
  zod.object({
    email: zod
      .string()
      .regex(
        new RegExp(
          /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        ),
        { message: "Email Type : marc@hotmail.fr" },
      )
      .email({ message: "Votre meilleur adresse .fr .com..." }),
  }),
);

const { values, errors, handleSubmit } = useForm({
  validationSchema,
});

// const [email, emailAttrs] = defineField("email");

const { value: email } = useField("email");

const onSubmit = handleSubmit((values) => {
  console.log(values.email);
});

// onMounted(() => {
//   const inputElement = document.querySelector(".input-message");

//   function moveCursorToBeginning() {
//     console.log(inputElement);
//     inputElement.setSelectionRange(5, 5);
//   }

//   inputElement.addEventListener("focus", moveCursorToBeginning);
// });
</script>
<style scoped>
.titre-trait-span {
  width: 30%;
  border-style: solid;
  border-width: 0px;
  border-bottom-width: 5px;
  border-image: linear-gradient(120deg, #00dc82 0%, #36e4da 100%) 1;
  margin-bottom: 100px;
}
.titre-contact {
  color: rgb(193, 193, 193);
  font-weight: 700;
  font-size: 2em;
  letter-spacing: 0.5ch;
  margin-top: 100px;
  margin-bottom: 30px;
}

.titre-formulaire {
  font-weight: 700;
  font-size: 3em;
  margin-bottom: 30px;
}
.color-titre-formulaire {
  background: linear-gradient(120deg, #00dc82 0%, #36e4da 100%);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.formulaire-contact {
  background-color: rgb(177, 177, 177);
  width: 80%;
}
.section1-formulaire {
  width: 100%;
  height: 100%;
}
.section1-formulaire > div {
  width: 50%;
  height: 100%;
}
.section2-formulaire {
  width: 75%;
  height: 100%;
}
label {
  margin-left: 5%;
  width: 90%;
  font-weight: 500;
}
.erreur-message {
  margin-left: 5%;
  height: 25px;
}
.etoile-label {
  color: red;
}
input {
  height: 40px;
  width: 90%;
  margin: 5%;
  border-radius: 3px;
  border: 1px solid rgb(196, 196, 196);
  padding-left: 10px;
}
.input-message {
  height: 290px;
  width: 80%;
  position: relative;
}
input::placeholder {
  color: rgb(196, 196, 196);
}
input:focus-visible {
  border: 1px solid transparent;
  outline: 1px solid rgb(47, 255, 127);
}
.input-message::placeholder {
  position: absolute;
  top: 12px;
}
.input-message:focus-visible {
  outline-offset: 0px;
}
.content-all-button {
  width: 80%;
}
#bouton-reset {
  width: 120px;
  height: 51px;
  border: 1px solid rgb(67, 255, 111);
  border-radius: 20px;
  background-color: #ededed;
  color: rgb(56, 56, 56);
  cursor: grabbing;
}
#bouton-reset:hover {
  border: 2px solid rgb(255, 0, 0);
  background-color: rgb(0, 0, 0);
  color: rgb(139, 139, 139);
  cursor: grabbing;
  transform: scale(0.95);
}
#bouton-submit {
  font-size: 17px;
  width: 250px;
  height: 50px;
  border: 3px solid rgb(67, 255, 111);
  border-radius: 20px;
  background-color: rgb(0, 0, 0);
  color: white;
  cursor: pointer;
}
#bouton-submit:hover {
  border: 3px solid rgb(67, 255, 111);
  background-color: rgb(0, 21, 5);
  color: rgb(0, 255, 166);
  cursor: pointer;
  transform: scale(1.05);
}
.icon-plane {
  margin-right: 5px;
  margin-bottom: 3px;
}
</style>

<!-- <template>
  <div>
    <b-form @submit.prevent="submit" @reset="onReset" v-if="show">
      <div class="text-white d-flex justify-content-around">
        <b-form-group
          class="aos-item largInput"
          data-aos="fade-down"
          data-aos-duration="2000"
          id="boxC"
          label="Email:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            type="email"
            placeholder="Entrer Email"
            required
            v-model.trim="$v.email.$model"
          ></b-form-input>
          <div
            class="error"
            v-if="!$v.email.required && submitStatus === 'ERROR'"
          >
            Champ requis
          </div>
          <div class="error" v-if="!$v.email.email">
            écrire un email valide ex: marty@hotmail.com
          </div>
          <div class="error" v-if="!$v.email.maxLength">
            .Max 70 nrbs. Merci!
          </div>
        </b-form-group>

        <b-form-group
          class="aos-item largInput"
          data-aos="fade-down"
          data-aos-duration="2000"
          id="boxE"
          label="Votre Nom:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            placeholder="Entrer Nom"
            required
            v-model.trim="$v.nom.$model"
          ></b-form-input>
          <div
            class="error"
            v-if="!$v.nom.required && submitStatus === 'ERROR'"
          >
            Champ requis
          </div>
          <div class="error" v-if="!$v.nom.strongNom">
            Ecrire un nom sans charactére spéciaux .Max 70 letrs. Merci!
          </div>
        </b-form-group>
      </div>
      <div class="text-white d-flex justify-content-around">
        <b-form-group
          class="aos-item largInput"
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-anchor="#boxC"
          id="boxD"
          label="Message:"
          label-for="input-4"
        >
          <b-form-textarea
            id="input-4"
            v-model.trim="$v.message.$model"
            type="text-area"
            placeholder="Entrer Message"
            required
          ></b-form-textarea>
          <div
            class="error"
            v-if="!$v.message.required && submitStatus === 'ERROR'"
          >
            Champ requis
          </div>
          <div class="error" v-if="!$v.message.strongMessage">
            Ecrire un message sans charactére spéciaux .Max 250 letrs. Merci!
          </div>
        </b-form-group>

        <b-form-group
          class="aos-item largInput"
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-anchor="#boxC"
          id="boxF"
          label="Votre Téléphone:"
          label-for="input-5"
        >
          <b-form-input
            id="input-5"
            v-model.trim="$v.phone.$model"
            placeholder="Entrer Numéro"
            required
          ></b-form-input>
          <div
            class="error"
            v-if="!$v.phone.required && submitStatus === 'ERROR'"
          >
            Champ requis
          </div>
          <div class="error" v-if="!$v.phone.numeric">
            Ecrire des chiffres sans espace sans charactére spéciaux Merci!
          </div>
          <div class="error" v-if="!$v.phone.maxLength">
            .Max 20 nrbs. Merci!
          </div>
        </b-form-group>
      </div>
      <div class="d-flex justify-content-around">
        <b-button
          id="res"
          class="lienSouris cursorNone bgFour btnReset aos-item"
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-anchor="#boxC"
          type="reset"
          >Reset</b-button
        >
        <b-button
          id="sub"
          class="lienSouris cursorNone aos-item text-secondary colorSubmit"
          data-aos="fade-down"
          data-aos-duration="2000"
          data-aos-anchor="#boxC"
          type="submit"
          :disabled="submitStatus === 'PENDING'"
          >Envoyer</b-button
        >
      </div>
      <div>
        <p class="typo__p" v-if="submitStatus === 'OK'">
          Merci pour votre envoi !
        </p>
        <p class="typo__p" v-if="submitStatus === 'ERROR'">
          Svp Entrez votre formulaire correctement.
        </p>
        <p class="typo__p" v-if="submitStatus === 'ERROR SERVEUR'">
          Erreur Serveur: Chemin Https doit être utilisée pour l'envoi OU
          Serveur HS !
        </p>
        <p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...</p>

        <br />
        <br />
      </div>
    </b-form>
    <b-card class="mt-3 displayNone" header="Form Data Result">
      <pre class="m-0">{{ email }} <br>
          {{ nom }} <br> {{ message }} <br> {{ phone }} </pre>
    </b-card>
  </div>
</template>

<script>
import { required, email, maxLength, numeric } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  name: "formulaire",
  data() {
    return {
      email: "",
      nom: "",
      message: "",
      phone: "",

      client: [],
      show: true,
      submitStatus: null,
    };
  },
  validations: {
    email: { required, email, maxLength: maxLength(70) },
    nom: {
      required,
      strongNom(nom) {
        return (
          /^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._-\s]{0,60}$/.test(
            nom,
          ) && nom.length <= 70
        );
      },
    },
    message: {
      required,

      strongMessage(message) {
        return (
          // regex espace chiffre lettre seulement
          ///^[a-zA-Z0-9_ ]*$/.test(message) && // checks for a-z

          // regex accepte espace accent sans charactéeres spéciaux
          /^[a-zA-Z0-9'áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._-\s]{0,60}$/.test(
            message,
          ) && message.length <= 250
        );
      },
    },
    phone: { required, numeric, maxLength: maxLength(20) },
  },
  mounted() {},
  /*
    async created() {
      axios
        .get("")
        .then(response => ((this.client = response.data), console.log(response)))
        .catch(error => console.log(error));
    },
    */
  methods: {
    submit() {
      console.log("requete ver serveur!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
        console.log("A echouer informations non complete!");
      } else {
        // do your submit logic here
        console.log("En attente");
        this.submitStatus = "PENDING";

        axios
          .post(process.env.ROUTE, {
            email: this.email,
            nom: this.nom,
            message: this.message,
            phone: this.phone,
          })
          .then((response) => {
            (this.submitStatus = "OK"), console.log(response);
            this.$router.go("/Acceuil");
          })
          .catch(
            (error) => (
              (this.submitStatus = "ERROR SERVEUR"), console.log(error)
            ),
          );
      }
    },

    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.email, this.nom, this.message, this.phone));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.email = "";
      this.nom = "";
      this.message = "";
      this.phone = "";

      // Trick to reset/clear native browser form validation state
      /*
        this.show = false;
        this.$nextTick(() => {
          this.show = true;
        });
        */
    },
  },
};
</script>
<style>
.btnReset:hover {
  background-color: rgb(206, 46, 46) !important;
}
.boxC {
  animation: 1s linear boxC;
}
@keyframes boxC {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
  }
}
.boxD {
  animation: 1s linear boxD;
}
@keyframes boxD {
  0% {
    opacity: 0;
    transform: translateX(80%);
  }
  100% {
    opacity: 1;
  }
}
.boxE {
  animation: 1s linear boxE;
}
@keyframes boxE {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
  }
}
.boxF {
  animation: 1s linear boxF;
}
@keyframes boxF {
  0% {
    opacity: 0;
    transform: translateX(50%);
  }
  100% {
    opacity: 1;
  }
}
</style> -->
