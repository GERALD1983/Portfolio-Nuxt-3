<template>
  <div class="border-logo-name flex-name">
    <div class="container">
      <div class="cube font-cube-logo">
        <div class="face front flex-name">JS</div>
        <div class="face back flex-name">CSS</div>
        <div class="face right flex-name">HTML</div>
        <div class="face left flex-name">NODE</div>
        <div class="face top flex-name">VUE</div>
        <div class="face bottom flex-name">NUXT</div>
      </div>
    </div>
    <div class="name-society">
      <h3>GF Tech</h3>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.name-society {
  margin-left: 40px;
  color: rgb(23, 23, 23);
  font-weight: bolder;
}
.border-logo-name {
  border-radius: 0.5em;
}
.flex-name {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bolder;
}
.font-cube-logo {
  font-size: 8px;
}

.container {
  width: 25px;
  height: 25px;
  perspective: 100px;
  margin: 0px 0px 0px 30px;
}

.cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: spin 5s infinite linear;
}

.face {
  position: absolute;
  width: 25px;
  height: 25px;
  border: 1px solid rgb(212, 212, 212);
}

.top {
  background: #00dc82;
  transform: rotateX(90deg) translateZ(20px);
  animation: wheelHueColor 5s infinite linear;
}
.bottom {
  background: #00dc82;

  transform: rotateX(-90deg) translateZ(20px);
  animation: wheelHueColor 5s infinite linear;
}

.right {
  background: #00dc82;

  transform: rotateY(90deg) translateZ(20px);
  animation: wheelHueColor 5s infinite linear;
}
.left {
  background: #00dc82;

  transform: rotateY(-90deg) translateZ(20px);
  animation: wheelHueColor 5s infinite linear;
}

.front {
  background: #00dc82;

  transform: rotateX(0deg) translateZ(20px);
  animation: wheelHueColor 5s infinite linear;
}
.back {
  background: #00dc82;

  transform: rotateX(-180deg) translateZ(20px);
  animation: wheelHueColor 5s infinite linear;
}

@keyframes spin {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
@keyframes wheelHueColor {
  from,
  to {
    background-color: #00dc82;
  }
  10% {
    background-color: hsl(108, 65%, 35%);
  }
  20% {
    background-color: hsl(144, 75%, 35%);
  }
  30% {
    background-color: #00dc82;
  }
  40% {
    background-color: hsl(108, 65%, 35%);
  }
  50% {
    background-color: hsl(144, 75%, 35%);
  }
  60% {
    background-color: #00dc82;
  }
  70% {
    background-color: hsl(176, 60%, 45%);
  }
  80% {
    background-color: #00dc82;
  }
  90% {
    background-color: hsl(108, 65%, 35%);
  }
}
</style>
