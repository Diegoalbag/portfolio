<template>
    <div class="Anima">
        <div class="Anima-Header">
            <div class="Anima-Header__Img">
                <img class="Laptop" src="@/assets/Macbookwomz1.png">
                <img class="iPhone" src="@/assets/iPhonewomz.png" alt="">
            </div>
            
            <div class="Anima-Header__Text">
                <h1>womnz</h1>
                <h3>Shopify Store concept</h3>
                <h4>personal project</h4>
                <a class="visitbtn" href="https://womz-4732c.firebaseapp.com" target="_blank">visit website</a>
            </div>
        </div>
        <div class="Anima-Body">
            <div class="Anima-Body__Info">
                <div class="roles">
                    <h2>Roles</h2>
                    <p>web design</p>
                    <p>developement</p>
                </div>
                <div class="typo">
                    <h2>typography</h2>
                    <p>jost regular</p>
                </div>
                <div class="colors">
                    <h2>Colors</h2>
                    <div class="color color1"></div>
                    <div class="color color2"></div>
                    <div class="color color3"></div>
                </div>
            </div>
            <div class="Anima-Body__Img">
                <img class="Laptop2" src="@/assets/Macbookwomz2.png" alt="">
                <img class="iPad" src="@/assets/iPadwomz.png" alt="">
                <a class="visitbtn" href="https://womz-4732c.firebaseapp.com" target="_blank">visit website</a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
/**************************************
                STYLES
**************************************/
.Anima{
    height: max-content;
    width: 100%;
    background-color: #141414;
    font-family: 'jost', sans-serif;
    &-Header{
        height: max-content;
        width: 100%;
        &__Img{
            position: relative;
            height: min-content;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 10rem 0 0 0;
            .Laptop{
                height: 50vw;
                position: relative;
                top: 0%;
                left: 0%;
            }
            .iPhone{
                height: 30vw;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate( 90%, -50%);
            }    
        }
        &__Text{
            width: 100%;
            height: min-content;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transform: translate(0, -30%);
            h1{
                color: white;
                font-size: 9vw;
                font-weight: 500;
                text-transform: uppercase;
                white-space: nowrap;
            }
            h3{
                font-size: 3vw;
                color: white;
                font-weight: 300;
                text-transform: capitalize;
            }
            h4{
                font-size: 2vw;
                color: white;
                font-weight: 200;
                text-transform: capitalize;
            }
            .visitbtn{
                background-color: #fff;
                color: black;
                font-size: 2vw;
                margin: 5rem 0;
                padding: 2rem 5rem;
                text-decoration: none;
                text-transform: capitalize;
                border-radius: 100px;
                @include respond(phone){
                    padding: 2rem 5rem;
                    font-size: 3vw;
                    margin: 4rem 0;
                }
            }
        }
    }
    &-Body{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        &__Info{
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            @include respond(phone){
                flex-direction: column; 
            }
            .roles{
                color: white;
                text-transform: capitalize;
                margin: 0 6rem;
                @include respond(phone){
                    margin: 0;
                }
                h2{
                    font-size: 3vw;
                    font-weight: 500;
                    @include respond(phone){
                    font-size: 6vw;
                    }
                }
                p{
                    font-size: 3vw;
                    font-weight: 300;
                    @include respond(phone){
                        font-size: 5vw;
                    }
                }
            }
            .typo{
                color: white;
                text-transform: capitalize;
                margin: 0 6rem;
                @include respond(phone){
                    margin: 5rem 0;
                }
                h2{
                    font-size: 3vw;
                    font-weight: 500;
                    @include respond(phone){
                    font-size: 6vw;
                    }
                }
                p{
                    font-size: 3vw;
                    font-weight: 300;
                    @include respond(phone){
                        font-size: 5vw;
                    }
                }
            }
            .colors{
                color: white;
                text-transform: capitalize;
                margin: 0 6rem;
                @include respond(phone){
                    margin: 5rem 0;
                }
                h2{
                    font-size: 3vw;
                    font-weight: 500;
                    @include respond(phone){
                    font-size: 6vw;
                    }
                }
                .color{
                    width: 100px;
                    height: 100px;
                    background-color: white;
                    border-radius: 100px;
                    margin: 10px 0;
                    @include respond(phone){
                        width: 80px;
                        height: 80px;
                    }
                    &1{
                        margin: 0 0 10px 0;
                        background-color: #c32418;
                    }
                    &2{
                        background-color: #EFEFF0;
                    }
                    &3{
                        background-color: #272727;
                    }
                }
            }
        }
        &__Img{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .Laptop2{
                height: 70vw;
                margin: 10rem 0;
            }
            .iPad{
                width: 60vw;
                margin: 0rem 0;
                transform: translate( 5%, -20%);
            }
            .visitbtn{
                max-width: 30vw;
                background-color: #fff;
                color: black;
                font-size: 2vw;
                margin: 5rem 0;
                padding: 2rem 5rem;
                text-decoration: none;
                text-transform: capitalize;
                text-align: center;
                border-radius: 100px;
                transform: translateY(-400%);
                @include respond(phone){
                    padding: 2rem 5rem;
                    font-size: 3vw;
                    transform: translateY(-200%);
                    //margin: 4rem 0;
                }
            }
        }
    }
}
</style>