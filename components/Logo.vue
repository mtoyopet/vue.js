<template>
  <div class="VueToNuxtLogo">
    <div class="Triangle Triangle--two" />
    <div class="Triangle Triangle--one" />
    <div class="Triangle Triangle--three" />
    <div class="Triangle Triangle--four" />
  </div>
</template>

<style>
.VueToNuxtLogo {
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  transform: rotateX(180deg);
  position: relative;
  overflow: hidden;
  height: 380px;
  width: 500px;
}

.Triangle {
  position: absolute;
  top: 5;
  left: 1;
  width: 0;
  height: 0;
}

.Triangle--one {
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 180px solid #a6b841;
}

.Triangle--two {
  top: 30px;
  left: 35px;
  animation: goleft 0.5s linear forwards 3.5s;
  border-left: 87.5px solid transparent;
  border-right: 87.5px solid transparent;
  border-bottom: 150px solid #3b8070;
}

.Triangle--three {
  top: 60px;
  left: 35px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 105px solid transparent;
  border-right: 105px solid transparent;
  border-bottom: 120px solid #1265bd;
}

.Triangle--four {
  top: 120px;
  left: 100px;
  animation: godown 0.5s linear forwards 3s;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-bottom: 60px solid #fff;
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}
</style>
