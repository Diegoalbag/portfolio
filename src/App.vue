<template>
  <div id="app">
    <div class="cursor"></div>
    <div class="cursor-follower"></div>
    <div @click="ShowHideMenu()" class="Menu-icon">
      <i v-if="!isMenu" class="fas fa-bars"></i>
      <i v-else class="fas fa-times"></i>
    </div>
    <Menu/>
    <router-view/>
  </div>
</template>
<script>
import Menu from '@/components/Menu.vue'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  components: {
    Menu,
  },
  computed: {
      ...mapGetters(['isMenu'])
  },
  mounted () {
   
      const cursor = document.querySelector('.cursor');
      const cursorf = document.querySelector('.cursor-follower');

      const editCursor = e => {
            const { clientX: x, clientY: y } = e;
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
            gsap.to('.cursor-follower', {
              css: {
                left: (x - 20),
                top: (y - 20)
              } 
            });
      };

      window.addEventListener('mousemove', editCursor);
    
  },
  methods: {
      ...mapActions(['ShowMenu', 'HideMenu']),
      ...mapMutations([]),
      ShowHideMenu() {
          if (this.isMenu === false){
              this.ShowMenu().then(() => {
                  gsap.from(".menu", {x: 500, duration: .3});
              });
              
          }
          else {
              gsap.to(".menu", {x: 500, opacity: 0, duration: .2}).then(() => {
                  this.HideMenu(); 
              })
              
          }
      }
  },
}
</script>

<style lang="scss">
*,
*::before,
*::after{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
body{
  box-sizing: border-box;
  position: relative;
}
html{
  font-family: 'Monument Extended', sans-serif;
  font-size: 62.5%; // 10px/16px = 62.5% | 1rem = 10px
  text-size-adjust: none;
  scroll-behavior: smooth;
  cursor: none;

  @include respond(tab-land){
      font-size:  50%; // 8px/16px = 50% | 1rem = 8px
  }
  @include respond(tab-port){
      font-size:  37.5%; // 6px/16px = 37.5% | 1rem = 6px
  }
  @include respond(phone){
    font-size: 30%; // 5px/16px = 30% | 1rem = 5px
  }
  //overflow-x: hidden;
}
#app{
  overflow: hidden;
  .text{
    height: 100vh;
    width: 100vw;
    position: fixed;
    //color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    //animation: slide 20s linear infinite;
    h1{
      width: min-content;
      text-transform: uppercase;
      text-size-adjust: none;
      font-size: 20rem;
      line-height: 18rem;
      white-space: nowrap;
      color: transparent;
      -webkit-text-stroke-color: white;
      -webkit-text-stroke-width: 1px;
      opacity: .2;
    }
  }
  .Menu-icon{
    background-color: white;
    width: 60px;
    height: 60px;
    position: fixed;
    top: 5%;
    right: 5%;
    z-index: 7;
    border-radius: 100%;
    box-shadow: 0px 20px 40px rgba($color: black, $alpha: 0.5);
    transition: all 0.2s;
    &:hover{
        box-shadow: 0px 15px 20px rgba($color: black, $alpha: 0.5);
        transform: translateY(5px);
    }
    &:active{
        transform: translateY(8px);
        box-shadow: 0px 15px 10px rgba($color: black, $alpha: 0.5);
    }
    i{
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 2.5rem;
      @include respond(phone){
        font-size: 5rem;
      }
    }
  }
}
.cursor {
    position: fixed;
    background: white;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    z-index: 10;
    transition: 0.5s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
        0.2s cubic-bezier(0.75, -1.27, 0.3, 2.33) opacity;
    user-select: none;
    pointer-events: none;
    transform: scale(0.8);
    mix-blend-mode: difference;
    @include respond(phone){
      display: none;
    }
}

.cursor::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    //background-image: url("http://mirkozeppieri.emanuelepapale.com/wp-content/uploads/2018/07/project-hover-cursor.jpg");
    background-color: white;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
    opacity: 0;
    @include respond(phone){
    display: none;
    }
}

.cursor.active {
    opacity: 1;
    transform: scale3d(8, 8, 8);
    mix-blend-mode: normal;
    @include respond(phone){
    display: none;
    }
}

.cursor.active::before {
    opacity: 1;
     @include respond(phone){
      display: none;
    }
}

.cursor-follower {
    position: fixed;
    background: rgba(255, 255, 255, 0.3);
    width: 40px;
    height: 40px;
    border-radius: 100%;
    z-index: 10;
    transition: 0.6s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
        0.4s cubic-bezier(0.75, -1.27, 0.3, 2.33) opacity;
    user-select: none;
    pointer-events: none;
    transform: translate(4px, 4px);
    mix-blend-mode: difference;
     @include respond(phone){
      display: none;
    }
}

.cursor-follower.active {
    opacity: 0.3;
    transform: scale(0);
     @include respond(phone){
      display: none;
    }
}
@keyframes slide { 
    0% { left: 0; }
    100% { left: -100%; }
}
</style>
