<template lang="">
  <div id="carte">
    <div class="flex-center fond-image">
      <img :src="propsCarte.srcImg" width="300px" alt="" loading="lazy" />
    </div>
    <div>
      <h3 class="titre-carte">{{ propsCarte.titre }}</h3>
      <div class="sous-titre-carte">
        <clientOnly>
          <div class="flex-start">
            <div>
              <Icon
                name="emojione-v1:left-check-mark"
                size="15px"
                class="detail-icon-carte"
              />
            </div>
            <p>
              {{ propsCarte.sousTitre1 }}
            </p>
          </div>
          <div class="flex-start">
            <div>
              <Icon
                name="emojione-v1:left-check-mark"
                size="15px"
                class="detail-icon-carte"
              />
            </div>
            <p>
              {{ propsCarte.sousTitre2 }}
            </p>
          </div>
          <div class="flex-start">
            <div>
              <Icon
                name="emojione-v1:left-check-mark"
                size="15px"
                class="detail-icon-carte"
              />
            </div>
            <p>
              {{ propsCarte.sousTitre3 }}
            </p>
          </div>
          <div v-if="propsCarte.sousTitre4" class="flex-start">
            <div>
              <Icon
                name="emojione-v1:left-check-mark"
                size="15px"
                class="detail-icon-carte"
              />
            </div>
            <p>
              {{ propsCarte.sousTitre4 }}
            </p>
          </div>
        </clientOnly>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const propsCarte = defineProps<{
  srcImg: string;
  titre?: string;
  sousTitre1?: string;
  sousTitre2?: string;
  sousTitre3?: string;
  sousTitre4?: string;
}>();
</script>
<style>
#carte {
  display: flex;
  flex-direction: column;
  width: 302px;
  height: 550px;
  padding: 20px;
  margin: 25px;
  /* border-radius: 1em;
  border: 1px solid #e2e5ec; */
}
.fond-image {
  width: 100%;
  height: 150px;
  background-color: #f0f0f085;
  border: 1px solid #f0f0f085;
  border-radius: 5px;
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
.detail-icon-carte {
  margin-top: 1em;
  margin-right: 0.5em;
}
.sous-titre-carte {
  --tw-text-opacity: 1;
  color: #71717a;
  color: rgb(113 113 122 / var(--tw-text-opacity));
}
</style>
