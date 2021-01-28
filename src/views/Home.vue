<template>
  <div id="scene" class="Home">
    <Fondo/>
    <div data-depth="0.8" class="Header">
      <h3 class="Header-text">Portfolio - 2020</h3>
      <h1 class="Header-text">DIEGO ALBA</h1>
    </div>
    <!-- <div class="circular-text">
      <span id="rotated">Get in touch • Get in touch • Get in touch • Get in touch • Get in touch •</span>
    </div> --> 
    <a href="mailto:diegoalba15@icloud.com"><img class="circular" src="@/assets/circle.png" alt=""></a>
  </div>
</template>

<script>
/**************************************
                IMPORTS
**************************************/
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import CircleType from "circletype";
import Fondo from '@/components/Fondo.vue'
/**************************************
                SCRIPTS
**************************************/
export default {
  name: "Home",
  components: {
    Fondo,
  },
  computed: {
    ...mapGetters([])
  },
  methods: {
    ...mapActions(["HideMenu"])
  },
  mounted() {
    gsap.to(".menu", { x: -500, opacity: 0, duration: 0.2 }).then(() => {
      this.HideMenu();
    });
    gsap.to(".circular", {
      rotation: 360,
      repeat: -1,
      duration: 15,
      ease: Linear.easeNone
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
};
</script>

<style lang='scss' scoped>
/**************************************
                STYLES
**************************************/
.Home {
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  .Header {
    h1 {
      font-size: 10rem;
      @include respond(phone){
        font-size: 7rem;
      }
    }
    h3 {
      font-size: 3rem;
      font-weight: 100;
      @include respond(phone){
        font-size: 3rem;
      }
    }
    height: min-content;
    width: max-content;
    display: block;
    text-align: center;
    color: white;
    //text-transform: uppercase;
    &-text {
      position: relative;
      &::after {
        display: block;
        content: "";
        width: 100%;
        //height: 100%;
        background: black;
        position: absolute;
        bottom: 0%;
        left: 0;
        transform-origin: top;
        animation: reveal 3s;
      }
    }
  }
  .circular-text {
    color: transparent;
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(-0%, -50%);
    font-size: 2rem;
    font-weight: bolder;
    -webkit-text-stroke-color: white;
    -webkit-text-stroke-width: 1px;
    @include respond(phone){
      display: none;
    }
  }
  img{
    position: absolute;
    height: 35rem;
    top: 50%;
    left: -10%;
    transform: translate(0%, -50%);
    @include respond(phone){
      display: none;
    }
  }
  a{
    cursor: pointer;
  }
}

@keyframes reveal{
  0%{
    height: 100%;
    transform: translateY(0);
  }
  100%{
    height: 0%;
    transform: translateY(100%);
  }
}
</style>