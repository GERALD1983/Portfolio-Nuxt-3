<template lang="">
  <div id="carte">
    <div class="flex-center">
      <img src="../assets/1710299.svg" width="270px" alt="" />
    </div>
    <div>
      <h3 class="titre-carte">{{ propsCarte.titre }}</h3>
      <p class="sous-titre-carte">
        Construit avec une architecture solide, une conception réactive, des
        performances optimisées, une expérience utilisateur fluide, et une
        gestion efficace des données. Créé pour l'efficacité, afin que vous
        puissiez vous concentrer sur la création.
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
interface ContenuCarte {
  titre: string;
  sousTitre1?: string;
  sousTitre2?: string;
  sousTitre3?: string;
}

const propsCarte = defineProps<ContenuCarte>();
</script>
<style>
#carte {
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 30%;
  padding: 20px;
  border-radius: 1em;
  border: 1px solid #e5e7eb;
}
.color-img-carte {
  color: linear-gradient(120deg, #00dc82 0%, #36e4da 100%);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #cbe8ff;
}
.titre-carte {
  --tw-text-opacity: 1;
  color: #18181b;
  color: rgb(24 24 27 / var(--tw-text-opacity));
  padding-top: 20px;
  padding-bottom: 20px;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.sous-titre-carte {
  --tw-text-opacity: 1;
  color: #71717a;
  color: rgb(113 113 122 / var(--tw-text-opacity));
}
</style>
