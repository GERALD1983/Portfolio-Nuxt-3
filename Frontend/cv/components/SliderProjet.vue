<template>
  <div class="flex-around">
    <div class="sliders">
      <div class="slides flex-around">
        <div class="slide"><img src="../assets/RESTO370.jpg" alt="" /></div>
        <div class="slide"><img src="../assets/RESTO370.jpg" alt="" /></div>
        <div class="slide"><img src="../assets/RESTO370.jpg" alt="" /></div>
        <div class="slide"><img src="../assets/RESTO370.jpg" alt="" /></div>
        <div class="slide"><img src="../assets/RESTO370.jpg" alt="" /></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style>
.sliders {
  width: 100%;
  margin: 30px;
  overflow: hidden;
}
.slides {
  width: calc(370px * 5);
  animation: defile 20s infinite linear;
  animation-play-state: running;
}
.slides:hover {
  animation-play-state: paused;
}
.slide {
  margin: 20px;
  float: left;
}
@keyframes defile {
  0% {
    transform: translate(62%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
