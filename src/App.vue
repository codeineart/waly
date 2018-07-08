<template>
  <div>
    <transition name="fade-loading">
      <div class="loading" v-if="loading">
        <img :src="logo">
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import logo from 'static/img/logo-mpm-color.png';

export default {
  name: 'app',
  data: () => ({
    loading: false,
    logo: logo,
  }),
  created() {
    if (!localStorage.getItem('user-token')) {
      this.$router.push('/');
    }
  },
};
</script>

<style lang="scss">
.loading {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 15;
  background-color: #fff;
  img {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    animation-name: loadingLogo;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease;
  }
}

@keyframes loadingLogo {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.8);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-loading-enter-active,
.fade-loading-leave-active {
  transition: opacity 0.3s ease;
}
.fade-loading-enter {
  opacity: 1;
}
.fade-loading-leave-to {
  opacity: 0;
}

@import '@/assets/style.scss';

*[absolute] {
  position: absolute;
}

*[relative] {
  position: relative;
}

*[boxify] {
  height: 250px;
  width: 250px;
}

.boxify {
  height: 250px;
  // height: 100%;
  width: 250px;
  &--color {
    background-color: magenta;
  }
}

.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

/**********************************************************
 *                  LAYOUT BORDER-DEBUG                   *
 **********************************************************/
div {
  // border: red solid 1px;
}
.helper {
  position: fixed;
  bottom: 0px;
  right: 0px;
  background-color: #1c212e;
  padding: 10px 50px;
  color: white;
  z-index: 1000;
}

.img-responsive {
  width: 100%;
  height: auto;
}

//******************************
// INFORMATION SECTION CLASSES *
//*****************************

.contenido {
  overflow: hidden;
  background-color: rgba(128, 128, 128, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-header {
  width: 100%;
  height: 400px;
  background-image: url('/static/img/bg/struct_org.jpg');
  background-size: cover;
  background-position: center;
  margin-top: 90px;
}

.spacer--180 {
  height: 180px;
}

.spacer--25 {
  height: 25px;
}

.bisel {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  left: 0;
  top: 0;
}
.label {
  background-color: rgba(220, 100, 37, 0.7);
}

.big-tittle {
  color: white;
  font-size: 88px;
  font-weight: 400;
  padding: 40px;
  line-height: 80px;
  position: relative;
  right: 15%;
  top: 15%;
}

.content-block {
  margin-top: 8rem;
  margin-right: 14rem;
  margin-left: 14rem;
}

.intro-title {
  font-size: 32px;
  font-weight: 400;
  color: $gray-color;
  position: relative;
  &::before {
    content: '';
    width: 400px;
    height: 4px;
    background: $orange-color;
    position: absolute;
    bottom: -4px;
  }
}

.intro-text {
  margin-top: 25px;
  // margin-left: 130px;
  // margin-right: 130px;
  margin-left: 10%;
  margin-right: 10%;
  font-size: 19px;
  font-weight: 400;
  &.block {
    margin-left: 3%;
    margin-right: 3%;
  }
}

.element-circle {
  border: solid 2p;
  height: 275px;
  width: 275px;
  background-color: $gray-color;
  border-radius: 50%;
  display: inline-block;
  align-self: center;
  display: block;
  margin: 0 auto;
  // Texto
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gerencia-title {
  text-align: center;
  font-weight: 500;
  font-size: 22px;
  line-height: 100%;
  margin: 4% 4%;
  color: $gray-color;
  &--sub {
    @extend .gerencia-title;
    font-weight: 300;
    align-self: baseline;
  }
}

//******************************
//    UGLY CLASS OVERRIDES xd  *
//******************************

.icon.material-icons.input-group__append-icon {
  color: white !important;
}

.application .theme--light.icon,
.theme--light .icon,
.application .theme--light.input-group input,
.application .theme--light.input-group textarea,
.theme--light .input-group input,
.theme--light .input-group textarea {
  color: white;
}
// input:focus {
//   color: red !important;
// }

.gerencias__ {
  .btn.btn--icon.theme--dark {
    height: 100%;
  }
  .carousel__left,
  .carousel__right {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
  }
}

.picker__body {
  overflow: visible;
}
</style>
