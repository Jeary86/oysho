<template>
    <div class="Seep1">
        <div class="seep-box show_seep">
            <div class="seep-txt1">
                <img src="../assets/page_txt1.png"/>
            </div>
            <div class="seep-txt2">
                <img src="../assets/page_txt2.png"/>
            </div>
            <div class="seep-txt3">
                <img src="../assets/page_txt3.png"/>
            </div>
            <div class="seep-txt4">
                <img src="../assets/page_txt4.png"/>
            </div>
            <div class="seep-txt5">
                <img src="../assets/page_txt5.png"/>
            </div>
            <div class="seep-down">
                <img src="../assets/page_down.png" />
            </div>
        </div>
        <div class="bg">
            <img src="../assets/page1_bg.jpg" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "Seep1",
        data(){
            return{

            }
        },
        mounted(){

        },
        methods:{

        }
    }
</script>

<style lang="less" scoped>
    .Seep1{
        width: 100%;height: 100%;position: relative;overflow: hidden;

        .seep-box{
            width:100%;height: 100%;position:absolute;z-index:88;

            .seep-txt1{
                width:546px;position:absolute;
                left:50%;margin-left:-546px/2;
                top:112px
            }
            .seep-txt2{
                width:326px;position:absolute;
                left:400px;top:255px;
            }
            .seep-txt3{
                width:213px;position:absolute;
                left:118px;
                top:525px
            }
            .seep-txt4{
                width:153px;position:absolute;
                left:118px;
                top:710px;
            }
            .seep-txt5{
                width:259px;position:absolute;
                left:118px;
                top:895px;
            }
            .seep-down{
                width:51px;position:absolute;
                left:50%;margin-left:-51px/2;
                bottom:50px;
                animation: seep_down infinite 1.5s linear;
            }

            @keyframes seep_down {
                0%{transform: translateY(-30px);opacity:0}
                50%{transform: translateY(0);opacity:1}
                100% {transform: translateY(30px);opacity:0}
            }
        }

        .show_seep{
            .seep-txt1{
                animation: seep-txt1 6s ease-in-out;
            }

            @keyframes seep-txt1 {
                0%,5%{transform: scale(1.5);opacity:0}
                12%{transform: scale(0.95);opacity:1}
                18%{transform: scale(1);opacity:1}
                100% {transform: scale(1);opacity:1}
            }

            .seep-txt2{
                animation: seep-txt2 6s ease-in-out;
            }

            @keyframes seep-txt2 {
                0%,10%{transform: translateX(20px);opacity:0}
                20%{transform: translateX(0);opacity:1}
                100% {transform: translateX(0);opacity:1}
            }

            .seep-txt3{
                animation: seep-txt3 6s ease-in-out;
            }

            @keyframes seep-txt3 {
                0%,10%{transform: translateX(-20px);opacity:0}
                20%{transform: translateX(0);opacity:1}
                100% {transform: translateX(0);opacity:1}
            }
            .seep-txt4{
                animation: seep-txt4 6s ease-in-out;
            }

            @keyframes seep-txt4 {
                0%,13%{transform: translateY(-20px);opacity:0}
                23%{transform: translateY(0);opacity:1}
                100% {transform: translateY(0);opacity:1}
            }
            .seep-txt5{
                animation: seep-txt5 6s ease-in-out;
            }

            @keyframes seep-txt5 {
                0%,17%{transform: translateY(20px);opacity:0}
                27%{transform: translateY(0);opacity:1}
                100% {transform: translateY(0);opacity:1}
            }
        }

        .bg{
            width: 100%;position: relative;z-index: 6;
        }
    }
</style>