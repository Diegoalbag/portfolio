<template>
    <div class="Fondo">
        <h1 id="text1" class="diego">diego alba</h1>
        <h1 id="text2" class="web">web developer</h1>
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
        computed: {
            ...mapGetters([])
        },
        methods: {
            ...mapActions([])
        },
        mounted () {
            gsap.from("#text1", {
                y: -70,
                duration: .5,
                ease: Linear.easeNone,
                delay: 1
            });
            gsap.from("#text2", {
                y: 130,
                duration: .5,
                ease: Linear.easeNone,
                delay: 1
            });
        },
    }
</script>

<style lang='scss' scoped>
/**************************************
                STYLES
**************************************/
.Fondo{
    height: 100vh;
    width: 100vw;
    position: fixed;
    color: white;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @include respond(phone){
        display: none;
    }
    .diego{
        text-transform: uppercase;
        text-size-adjust: none;
        font-size: 20rem;
        line-height: 18rem;
        white-space: nowrap;
        text-align: center;
        transform: translateY(-50%);
        @include respond(phone){
            transform: translateY(0%);
        }
    }
    .web{
        text-transform: uppercase;
        text-size-adjust: none;
        font-size: 15rem;
        line-height: 12rem;
        white-space: nowrap;
        text-align: center;
        transform: translateY(50%);
        @include respond(phone){
            transform: translateY(0%);
        }
    }
}
</style>