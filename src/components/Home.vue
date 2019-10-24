<template>
    <div class="home">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <Seep1 />
                </div>
                <div class="swiper-slide">
                    <EndMask />
                    <Seep2 />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Seep1 from "./Seep1";
    import HeaderRoll from "./HeaderRoll";
    import EndMask from "./EndMask";
    export default {
        name: 'home',
        data(){
          return{
              mySwiper : null,
          }
        },
        mounted() {
            this.loaderSwiper()
        },
        methods : {
            loaderSwiper(){
                this.mySwiper = new window.Swiper(".swiper-container", {
                    direction: 'vertical',
                    speed: 500,
                    height: window.innerHeight,
                });
            }
        },
        components: {EndMask, HeaderRoll, Seep1}
    }
</script>

<style lang="less" scoped>
    .home{
        width: 100%;height: 100%;position: absolute;overflow: hidden;
        /*animation: show_home 0.5s ease-out;opacity:1;*/
    }
    /*@keyframes show_home{*/
        /*0%{opacity: 0}*/
        /*100%{opacity: 1}*/
    /*}*/
</style>
