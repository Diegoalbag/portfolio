<template>
    <div class="Anima">
        <h1 @click="$router.push('anima')" class="hover">Anima</h1>
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
            ...mapActions([]),
            cursorover() {
                const cursor = document.querySelector('.cursor');
                const follower = document.querySelector('.cursor-follower');
                cursor.classList.toggle('active');
                follower.classList.toggle('active');
            },
        },
    }
</script>

<style lang='scss' scoped>
/**************************************
                STYLES
**************************************/
.Anima{
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 3;
    h1{
        color: #FFBF34;
        mix-blend-mode: difference;
        text-transform: uppercase;
        font-size: 20rem;
        font-weight: 100;
        transition: 0.2s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
        0.2s cubic-bezier(0.75, -1.27, 0.3, 2.33) opacity;
        &:hover{
            transform: scale(1.1);
        }
        @include respond(phone){
            font-size: 15rem;
        }
    }
}
</style>