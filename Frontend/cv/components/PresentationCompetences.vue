<template>
  <div>
    <div class="flex-center">
      <h2 class="titre-competences">
        Quelle Expertise
        <span class="color-titre-competences">
          peut être apporté à votre projet ?</span
        >
      </h2>
    </div>
    <div class="flex-center">
      <h3 class="sous-titre-competences">
        Mes compétences sont diverses et variés, une force de proposition pour
        vos idées, objectifs et performances.
      </h3>
    </div>
    <section>
      <CompetenceCarte />
    </section>
  </div>
</template>
<script setup lang="ts"></script>
<style>
.titre-competences {
  font-weight: 700;
  font-size: 3em;
  margin-top: 200px;
  margin-bottom: 30px;
  /* margin-left: 50px; */
}
.color-titre-competences {
  background: linear-gradient(120deg, #00dc82 0%, #36e4da 100%);
  background-clip: border-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sous-titre-competences {
  /* margin-left: 50px; */
  color: rgba(101, 108, 133, 0.8);
  font-size: 20px;
  margin-bottom: 50px;
}
</style>
