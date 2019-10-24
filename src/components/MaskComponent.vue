<template>
    <div class="mask-component"  :class="{'mask_show' : isShow}">
        <div class="nav-pic" v-if="showMask.maskId == 'nav-pic'">
            <div class="btn_save">
                <img src="../assets/btn_n1.jpg" />
            </div>
            <div class="btn_link" @click="onClickLink">
                <img src="../assets/btn_n2.jpg" />
            </div>
            <div class="pic"><img class="img_events" :src="imagesUrl" /></div>
        </div>
        <PrivacyPolicy v-if="showMask.maskId == 'nav-clause'" @click.native="onClickCloseMask" />
        <div class="bg" @click="onClickCloseMask"></div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "MaskComponent",
        data(){
            return{
                isShow : false
            }
        },
        computed: {
            ...mapGetters(['imagesUrl','showMask']),
        },
        mounted(){
            setTimeout(()=>{
                this.isShow = this.showMask.name
            },100)
        },
        methods:{
            onClickCloseMask(){
                this.isShow = false
                setTimeout(()=>{
                    this.$store.dispatch('setShowMask',{name:false,maskId:''})
                },800)

            },
            onClickLink(){
                window.open('http://tbll000202.cn/ChU0N2');
            }
        },

    }
</script>

<style lang="less" scoped>
    .mask-component{
        width:100%;
        height:100%;
        position:absolute;
        overflow:hidden;
        z-index:999999;
        opacity:0;
        transition: opacity .8s;
        .nav-pic{
            width:539px;position:absolute;z-index:88;
            left:50%;margin-left:-(539px/2);top:285px;

            .btn_save,.btn_link{
                width:200px;height:64px;position:absolute;background-color:#FFF;top:745px;z-index:88;
            }
            .btn_save{
                left:25px;pointer-events:none;
            }
            .btn_link{
                right:25px;
            }

            .pic{
                width:100%;position:relative;z-index:66;
            }
        }

        .bg{
            width:100%;height:100%;position:relative;z-index:6;
            background-color:rgba(255,255,255,0.1);
        }
    }

    .mask_show{
        opacity:1;
    }

    .hide_mask{
        animation: hide_mask 1s ease-out;opacity:0;
    }
    @keyframes hide_mask{
        0%{opacity: 1}
        100%{opacity: 0}
    }

    .show_mask{
        animation: show_mask 1s ease-out;
    }

    @keyframes show_mask{
        0%{opacity: 0}
        100%{opacity: 1}
    }
</style>