<template>
  <div class="flexName">
    <div class="container">
      <div class="cube fontCubeLogo">
        <div class="face front flexName">JS</div>
        <div class="face back flexName">CSS</div>
        <div class="face right flexName">HTML</div>
        <div class="face left flexName">NODE</div>
        <div class="face top flexName">VUE</div>
        <div class="face bottom flexName">NUXT</div>
      </div>
    </div>
    <div class="name-society">
      <h2>GF</h2>

      <h4>Tech</h4>
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
  color: black;
}
.flexName {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bolder;
}
.fontCubeLogo {
  font-size: 12px;
}

.container {
  width: 35px;
  height: 35px;
  perspective: 300px;
  margin: 0px 0px 0px 20px;
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
  width: 35px;
  height: 35px;
  border: 1px solid grey;
}

.top {
  background: #00dc82;
  transform: rotateX(90deg) translateZ(25px);
  animation: wheelHueColor 5s infinite linear;
}
.bottom {
  background: #00dc82;

  transform: rotateX(-90deg) translateZ(25px);
  animation: wheelHueColor 5s infinite linear;
}

.right {
  background: #00dc82;

  transform: rotateY(90deg) translateZ(25px);
  animation: wheelHueColor 5s infinite linear;
}
.left {
  background: #00dc82;

  transform: rotateY(-90deg) translateZ(25px);
  animation: wheelHueColor 5s infinite linear;
}

.front {
  background: #00dc82;

  transform: rotateX(0deg) translateZ(25px);
  animation: wheelHueColor 5s infinite linear;
}
.back {
  background: #00dc82;

  transform: rotateX(-180deg) translateZ(25px);
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
    background-color: hsl(180, 75%, 35%);
  }
  40% {
    background-color: hsl(108, 65%, 35%);
  }
  50% {
    background-color: hsl(144, 75%, 35%);
  }
  60% {
    background-color: hsl(180, 75%, 35%);
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
