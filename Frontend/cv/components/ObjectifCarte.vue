<template lang="">
  <div id="carte-objectif">
    <div class="flex-center fond-icon">
      <Icon :name="propsCarte.srcIcone" size="30px" color="grey" />
    </div>
    <div>
      <h3 class="titre-carte-objectif">{{ propsCarte.titre }}</h3>
      <div class="sous-titre-carte-objectif">
        <clientOnly>
          <p>
            {{ propsCarte.sousTitre1 }}
          </p>
          <p>
            {{ propsCarte.sousTitre2 }}
          </p>
          <p>
            {{ propsCarte.sousTitre3 }}
          </p>
          <p>
            {{ propsCarte.sousTitre4 }}
          </p>
        </clientOnly>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const propsCarte = defineProps<{
  srcIcone: string;
  titre?: string;
  sousTitre1?: string;
  sousTitre2?: string;
  sousTitre3?: string;
  sousTitre4?: string;
}>();
</script>
<style>
#carte-objectif {
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 240px;
  padding: 20px;
  border-radius: 1em;
  border: 1px solid #e2e5ec;
  margin: 20px;
}
#carte-objectif:hover {
  background: linear-gradient(120deg, #afffde5e 0%, #e0fffd3e 100%);
  border: 1px solid #04c26c !important;
  transform: scale(1.01);
  box-shadow: 8px 8px 12px #aaa;
  cursor: pointer;
}
.fond-icon {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 40px;
}
.color-img-icon {
  color: linear-gradient(120deg, #00dc82 0%, #36e4da 100%);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #cbe8ff;
}
.titre-carte-objectif {
  --tw-text-opacity: 1;
  color: #18181b;
  color: rgb(24 24 27 / var(--tw-text-opacity));

  font-weight: 700;
  font-size: 1rem;
  line-height: 1.75rem;
}
.sous-titre-carte-objectif {
  --tw-text-opacity: 1;
  color: #71717a;
  color: rgb(113 113 122 / var(--tw-text-opacity));
}
</style>
