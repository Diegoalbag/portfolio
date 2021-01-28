<template>
    <div class="About">
        <div class="About-Header">
            <h1>web developer <br/> <span>&amp designer</span> </h1>
            <p>Hi, my name is Diego Alba, I’m a Junior Front-end
            Developer and Designer currently working as a 
            full-time freelancer and open to working for a
            Company.
            <br/><br/>
            I find passion designing and creating intuitive 
            And interactive Web apps and pages. I incline 
            towards modern and minimalistic design on my 
            projects.</p>
        </div>
        <div class="About-Mid">
            <ul>
                <li>Skills</li>
                <li>Vue JS</li>
                <li>Sass/Scss</li>
                <li>Javascript</li>
                <li>Photoshop</li>
                <li>Adobe XD</li>
                <li>Illustrator</li>
            </ul>
            <div class="About-Mid_img">
                <img src="@/assets/aboutmac.png" alt=""> 
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
        name: "About",
        computed: {
            ...mapGetters([])
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

<style lang='scss' scoped>
/**************************************
                STYLES
**************************************/
.About{
    height: min-content;
    width: 100vw;
    background-color: black;
    color: white;
    &-Header{
        display: flex;
        flex-direction: column;
        height: 100vh;
        @include respond(phone){
            height: min-content;
        }
        h1{
            text-transform: uppercase;
            font-size: 7vw;
            line-height: 5vw;
            width: max-content;
            padding: 30rem 10rem 0 10rem;
            span{
                color: transparent;
                -webkit-text-stroke-color: white;
                -webkit-text-stroke-width: 1px;
            }
        }
        p{
            display: block;
            line-height: 4rem;
            font-size: 1.5vw;
            width: 100vw;
            padding: 30rem 20rem 40rem 30rem;
            text-align: justify;
            @include respond(phone){
                line-height: 4rem;
                font-size: 3.5vw;
                padding: 20rem 10rem;
            }
        }    
    }
    &-Mid{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 100vh;
        justify-items: center;
        align-items: center;
        @include respond(phone){
            grid-template-columns: 1fr;
            height: min-content;

        }
        ul{
            font-size: 2.5vw;
            list-style: none;
            @include respond(phone){
                font-size: 5vw;
            }
            :nth-child(1){
                color: #595959;
            }
            margin: 5rem 0;
        }
        &_img{
            margin: 10rem 0;
            img{
                height: 40rem;
            }     
        }
           
    }
    
    
}
</style>