<template>
    <div id="app">
        <FlipEquipment @screen="screenChange" />
        <Layout v-if="isScreen" />
    </div>
</template>

<script>
    import Loading from "./components/Loading";
    import Layout from "./views/Layout";

    export default {
        name: 'app',
        data(){
          return{
              isScreen : true,
              share : ''
          }
        },
        mounted(){

        },
        methods:{
            screenChange(e){
                this.isScreen = e
            }
        },
        components: {Layout, Loading},
    }
</script>

<style scoped lang="less">
    #app {
        width: 100%;
        height: 100%;
        position: absolute;
        overflow:hidden;
        color: #2c3e50;
    }
</style>
