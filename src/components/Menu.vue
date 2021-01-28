<template>
    <div v-if="isMenu" class="menu">
        <div class="Menu">
            <div class="Menu-list">
                <router-link id="Home" @click="ShowHideMenu()" to="/">Home</router-link>
                <router-link @click="ShowHideMenu()" to="/about">About</router-link>
                <router-link @click="ShowHideMenu()" to="/work">Projects</router-link>
                <!-- <router-link @click="ShowHideMenu()" to="/contact">Contact</router-link> -->
            </div>  
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
    computed: {
        ...mapGetters(['isMenu']),
    },
    methods: {
        ...mapActions(['ShowMenu', 'HideMenu']),
        ...mapMutations([]),
        ShowHideMenu() {
            if (this.isMenu === false){
                this.ShowMenu().then(() => {
                    gsap.from(".menu", {x: -500, duration: .3});
                });
            }
            else {
                gsap.to(".menu", {x: -500, opacity: 0, duration: .2}).then(() => {
                    this.HideMenu();
                });     
            }
        },
    },

}
</script>

<style lang='scss' scoped>
/**************************************
                STYLES
**************************************/
.menu{
    height: 100vh;
    width: 100vw;
    background-color: black;
    position: fixed;
    top: 0%;
    right: 0%;
    z-index: 6;
    box-shadow: 5px 0px 40px rgba($color: black, $alpha: 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    .Menu{
        height: min-content;
        width: max-content;
        display: flex;
        flex-direction: column;
        //align-items: center;
        //justify-content: center;
        //padding: 0 15rem;
        &-list{
            display: flex;
            flex-direction: column;
            //width: max-content;
            //height: min-content;
            a{
                width: min-content;
                font-size: 18rem;
                 @include respond(phone){
                    font-size: 8rem;
                }
                font-weight: bolder;
                line-height: 1.3;
                text-align: justify;
                color: transparent;
                -webkit-text-stroke-color: white;
                -webkit-text-stroke-width: 1px;
                text-decoration: none;
                transition: all .2s;
                position: relative;
                text-transform: uppercase;
                &:hover{
                    color: white;
                    &:after{
                        transition: all .5s;
                        transform: scaleX(0);
                    }
                }
                &:after{
                    display: block;
                    content: '';
                    width: 100%;
                    height: 1.5rem;
                    background: white;
                    position: absolute;
                    top: 40%;
                    left: 0;
                    transform-origin: left;
                }
                &:nth-child(1){
                    transform: translateX(-0%);
                    @include respond(phone){
                        transform: translateX(0%);
                    }
                }
                &:nth-child(2){
                    transform: translateX(50%);
                    @include respond(phone){
                        transform: translateX(0%);
                    }
                }
                &:nth-child(3){
                    transform: translateX(-10%);
                    @include respond(phone){
                        transform: translateX(0%);
                    }
                }
                &:nth-child(4){
                    transform: translateX(20%);
                    @include respond(phone){
                        transform: translateX(0%);
                    }
                }
            }

        }
        &-ContactInfo{
            font-size: 2.2rem;
            @include respond(phone){
                font-size: 3rem;
            }
            font-family: 'Poppins', sans-serif;
            font-weight: 200;
            color: white;
            margin: 5rem 0;
            .links{
                color: #F69331;
                &:hover{
                    cursor: pointer;
                    text-decoration: underline;
                }
            }
            p{
                line-height: 1.5;
            }
        }
        &-Social{
        font-size: 4rem;
        @include respond(phone){
            font-size: 8rem;
        }
        color: white;
        width: min-content;
        display: flex;
        //justify-content: space-between;
        align-items: center;
        i{
            &:hover{
                color: #F69331;
                cursor: pointer;
            }
        }
        .fa-facebook-f{
            font-size: 3rem;
            margin-left: 6rem;
             @include respond(phone){
                font-size: 6rem;
            }
        }
        }
    }   
    .router-link-exact-active{
        color: white !important;
        &:after{
            transition: all .5s;
            transform: scaleX(0);
        }
    }
}

</style>