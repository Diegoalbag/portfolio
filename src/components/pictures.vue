<template>
    <div class="pictures">
        <div  v-if="anima" class="pictures_anima">
            <img data-depth="0.6" class="mac" src="@/assets/Anima1.png" alt="">
        </div>
        <div id="scene"  v-if="womz" class="pictures_womz">
            <img data-depth="0.6" class="ipad" src="@/assets/Macbookwomz1.png" alt="">
            <img data-depth="0.6" class="iphone" src="@/assets/iPhonewomz.png" alt="">
        </div>
        <div  v-if="arte" class="pictures_artesano">
            <img data-depth="0.6" class="mac" src="@/assets/Macbook.png" alt="">
        </div>
    </div>
</template>

<script>
/**************************************
                IMPORTS
**************************************/
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
/**************************************
                SCRIPTS
**************************************/
    export default {
        data() {
            return {
                womz: false,
                arte: false,
                anima: false
            }
        },
        computed: {
            ...mapGetters([])
        },
        methods: {
            ...mapActions([]),
        },
        mounted () {
            ScrollTrigger.create({
                trigger: ".Anima",
                start: "top center",
                end: "bottom center",
                onToggle: self => {
                    console.log("anima. active?", self.isActive);
                    this.anima = !this.anima;
                },
            });
            ScrollTrigger.create({
                trigger: ".artesano",
                start: "top center",
                end: "bottom center",
                onToggle: self => {
                    console.log("artesano. active?", self.isActive);
                    this.arte = !this.arte;
                },
            });
            ScrollTrigger.create({
                trigger: ".Womz",
                start: "top center",
                end: "bottom center",
                onToggle: self => {
                    console.log("womz. active?", self.isActive);
                    this.womz = !this.womz;
                }
            });
            //var scene = document.getElementById('scene');
            //var parallaxInstance = new Parallax(scene);
        },
    }
</script>

<style lang='scss' scoped>
/**************************************
                STYLES
**************************************/
.pictures{
z-index: 1;
height: 100vh;
width: 100vw;
position: fixed;
top: 0%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
&_womz{
    width: 100%;
    height: 100%;
    display: flex;
    .ipad{
        height: 70rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        @include respond(phone){
            height: 50rem;
        }
    }
    .iphone{
        height: 40rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate( 100%,-70%);
        @include respond(phone){
            height: 30rem;
        }
    }
}
&_artesano{
    width: min-content;
    display: flex;
    .mac{
        height: 80rem;
        transform: rotate(0deg);
        @include respond(phone){
            height: 50rem;
        }
    }
}
&_anima{
    width: min-content;
    display: flex;
    .mac{
        height: 60rem;
        transform: rotate(0deg);
        @include respond(phone){
            height: 50rem;
        }
    }
}
}
</style>