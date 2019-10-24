<template>
    <div class="Layout">
        <HeaderRoll />
        <MaskComponent v-if="showMask.name" />
        <transition name="fade">
            <!--mode="out-in"-->
            <Loading v-if="loaderName === 'loading'"  />
            <Home v-if="loaderName === 'home'" />
        </transition>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "Layout",
        computed: {
            ...mapGetters(['loaderName','imagesUrl','showMask']),
        },
        watch : {
            loaderName(val){
                // console.log(val)
            },
            imagesUrl(val){
                // console.log(val)
            }
        },
        mounted(){

        }
    }
</script>

<style lang="less" scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.8s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>