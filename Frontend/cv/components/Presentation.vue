<template lang="">
  <div class="presentation-section">
    <h2 class="titre-presentation">
      {{ propsPresentation.debutTitre }}
      <span class="color-titre-presentation">
        {{ propsPresentation.finTitre }}</span
      >
    </h2>
    <div class="sous-titre-presentation">
      <p>
        {{ propsPresentation.sousTitre1 }}
      </p>

      <p>{{ propsPresentation.sousTitre2 }}</p>

      <p>
        {{ propsPresentation.sousTitre3 }}
      </p>
      <p>
        {{ propsPresentation.sousTitre4 }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Presentation {
  debutTitre: string;
  finTitre: string;
  sousTitre1?: string;
  sousTitre2?: string;
  sousTitre3?: string;
  sousTitre4?: string;
}

const propsPresentation = defineProps<Presentation>();
</script>
<style scoped>
.presentation-section {
  margin-left: 5%;
  margin-right: 5%;
}
.titre-presentation {
  font-weight: 700;
  font-size: 3em;
  margin-bottom: 30px;
}
.color-titre-presentation {
  background: linear-gradient(120deg, #00dc82 0%, #36e4da 100%);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sous-titre-presentation {
  color: rgba(101, 108, 133, 0.8);
  font-size: 20px;
  margin-bottom: 50px;
}
/* responsive */

@media screen and (max-width: 1300px) {
  .titre-presentation {
    text-align: center;
  }
  .sous-titre-presentation {
    text-align: center;
  }
}
</style>
