<template>
  <div id="projects" class="Projects">
    <pictures/>
    <anima/>
    <womz/>
    <artesano/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import womz from '@/components/womz.vue'
import anima from '@/components/anima.vue'
import artesano from '@/components/artesano.vue'
import pictures from '@/components/pictures.vue'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'Projects',
  components: {
    womz,
    anima,
    artesano,
    pictures,
  },
  methods: {
    ...mapActions(['HideMenu'])
  },
  mounted () {
    gsap.to(".menu", {x: -500, opacity: 0, duration: .2}).then(() => {
      this.HideMenu(); 
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
}
</script>

<style lang="scss" scoped>
.Projects{
  height: min-content;
  width: 100vw;
  background-color: black;
}
</style>
