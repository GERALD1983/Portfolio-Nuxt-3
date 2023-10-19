<template>
  <div class="relative flex-around">
    <div class="sliders">
      <div class="slides flex-around">
        <div class="slide"><img src="../assets/RESTO370.jpg" alt="" /></div>
        <div class="slide"><img src="../assets/RESTO370.jpg" alt="" /></div>
        <div class="slide"><img src="../assets/RESTO370.jpg" alt="" /></div>
        <div class="slide"><img src="../assets/RESTO370.jpg" alt="" /></div>
        <div class="slide"><img src="../assets/RESTO370.jpg" alt="" /></div>
        <div class="slide"><img src="../assets/RESTO370.jpg" alt="" /></div>
        <div class="slide"><img src="../assets/RESTO370.jpg" alt="" /></div>
        <div class="slide"><img src="../assets/RESTO370.jpg" alt="" /></div>
        <div class="slide"><img src="../assets/RESTO370.jpg" alt="" /></div>
        <div class="slide"><img src="../assets/RESTO370.jpg" alt="" /></div>
      </div>
    </div>
    <div class="absolute-left"></div>
    <div class="absolute-right"></div>
  </div>
</template>
<script setup lang="ts"></script>
<style>
/* html {
  background-color: gray;
} */
.relative {
  margin: 10%;
  position: relative;
}
.absolute-left {
  position: absolute;
  top: 0;
  left: 0;

  /* test

  background: linear-gradient(
    to right,
    #ffffff 50%,
    #fffefe 50%,
    #ffffff09 100%,
    #ffffff 100%
  ); */
  background: linear-gradient(
    to right,
    #ffffff 10%,
    #ffffff 25%,
    #ffffff00 100%,
    #ffffff 100%
  );
  width: 200px;
  height: 100%;
}
.absolute-right {
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(
    to left,
    #ffffff 10%,
    #ffffff 25%,
    #ffffff00 100%,
    #ffffff 100%
  );
  width: 200px;
  height: 100%;
}
.sliders {
  /* width: calc(2 * 370px * 5); */
  /* width: 100%; */
  width: calc(370px * 5);

  overflow: hidden;
}

.slides {
  --slider-inner-width: 1500px;
  /* width: calc(2 * 370px * 5); */
  /* width: calc(30% * 5); */
  width: calc(370px * 5);
  animation: scroll 20s infinite linear;
  animation-play-state: running;
}
.slides:hover {
  animation-play-state: paused;
}
.slide {
  margin-right: 20px;
  margin-left: 20px;
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
@keyframes scroll {
  0% {
    transform: translateX(-5%);
  }
  100% {
    transform: translateX(calc((0px - var(--slider-inner-width)) - 6%));
  }
}
</style>
