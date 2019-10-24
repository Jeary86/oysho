<template>
    <div class="Seep2">

        <div class="page2_logo">
            <img src="../assets/logo.png" />
        </div>

        <div class="page2_txt_box">

            <div class="txt_name">
                <input type="name" v-model="inputName" @blur="changeCount()" placeholder="您 的 姓 名 ：" maxLength="8" class="input-control needsclick" />
            </div>
            <div class="txt_iphone">
                <input type="iphone" v-model="inputIphone" @blur="changeCount()" placeholder="联 系 电 话 ：" maxLength="11" class="input-control needsclick" />
            </div>
            <!--<div class="btn-up" @click="onClickChoose('AM')" :class="{'active-color' : isChoose=='AM' }">-->
                <!--<span>上午场</span>-->
                <!--<dd>10:00-11:30</dd>-->
            <!--</div>-->
            <!--<div class="btn-down" @click="onClickChoose('PM')" :class="{'active-color' : isChoose=='PM' }">-->
                <!--<span>下午场</span>-->
                <!--<dd>15:00-16:30</dd>-->
            <!--</div>-->

            <div class="text-choose" v-if="timeTextPic !=''">
                <!--<img src="../assets/pic_am.png" />-->
                <img :src="timeTextPic" />
            </div>

            <div class="input-check"><input type="checkbox" v-model="isCheck" @click="onInputCheck" /></div>
            <div class="btn-submit" @click="onClickSubmit">
                提交
            </div>
            <div class="btn-check-link" @click="btnClickCheck"></div>
        </div>
        <div class="bg">
            <img src="../assets/page2_bg.jpg" />
        </div>
        <Synthetic v-if="isCanvas" :textData="inputName" :timeData="inputTime" />
        <!--<Synthetic />-->
    </div>
</template>

<script>
    import Server from '../util/Server'
    import Synthetic from "./Synthetic";
    export default {
        name: "Seep2",
        components: {Synthetic},
        data(){
            return{
                isCanvas : false,
                isChoose : '',
                isCheck : false,
                inputName : '',
                inputTime : '',
                inputIphone : '',
                timeTextPic : ''
            }
        },
        mounted(){
            this.loaderTimeType()
            // this.onClickChoose('PM')
        },
        methods:{
            loaderTimeType(){
                Server.callApi('/api/user/initConfig')
                    .then(res => {
                        if (res.code == 0){
                            this.onClickChoose(res.data.time_type)
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            },
            onClickChoose(e){
                this.isChoose = e
                if (e == 'AM'){
                    this.inputTime = '11:00-12:30'
                    this.timeTextPic = require('../assets/pic_am.png')
                }else {
                    this.inputTime = '15:00-16:30'
                    this.timeTextPic = require('../assets/pic_pm.png')
                }
                if (process.env.NODE_ENV === "development") console.log(e,this.inputTime)
            },
            onInputCheck(){
                this.isCheck = !this.isCheck
            },
            inputChange(){
                console.log(this.inputName)
            },
            changeCount(){
                window.scroll(0,0)
            },
            btnClickCheck(){
                this.$store.dispatch('setShowMask',{name:true,maskId:'nav-clause'})
            },
            onClickSubmit(){
                let t = this;

                if (t.inputName == ''){
                    alert('请填写姓名')
                }else if (t.inputIphone == '' || t.inputIphone.length < 11){
                    alert('请填写正常的手机号码')
                }else if (!t.isCheck) {
                    alert('请阅读并接受条款')
                }else {

                    let data = {
                        name:t.inputName,
                        mobile:t.inputIphone,
                        time_type: t.isChoose
                    }

                    // Server.callApi('/api/user/submitUserInfo',data)
                    //     .then(res => {
                    //         if (res.code == 0){
                    //             console.log('提交成功')
                    //             t.isCanvas = true;
                    //             t.$store.dispatch('setShowMask',{name:true,maskId:'nav-pic'})
                    //             setTimeout(()=>{
                    //                 t.inputName = '';
                    //                 t.inputIphone = '';
                    //                 t.isChoose = '';
                    //                 t.inputTime = '';
                    //                 t.isCheck = false;
                    //                 t.isCanvas = false;
                    //             },500)
                    //         }
                    //     })
                    //     .catch(err => {
                    //         console.log(err)
                    //     })


                }


            }
        }
    }
</script>

<style lang="less" scoped>
    .Seep2{
        width: 100%;height: 100%;position: relative;overflow: hidden;

        .page2_logo{
            width:362px;position:absolute;z-index:99;left:50%;margin-left:-(362px/2);margin-top:120px;
        }
        .page2_txt_box{
            width: 653px;position: absolute;
            z-index: 88;
            left:50%;
            margin-left: -(654px / 2);
            margin-top: 406px;

            .txt_name{
                width: 600px;height: 72px;
                margin-left: 26px;
                //background-color: #75fb65;
            }

            .txt_iphone{
                width: 600px;height: 72px;
                margin-left: 26px;
                margin-top: 62px;
                //background-color: #75fb65;
            }
            .text-choose{
                width:295px;position:absolute;left:50%;margin-left:-(295px/2);margin-top:200px;
            }
            .btn-up,.btn-down{
                width:272px;
                position:absolute;
                background-color:rgba(255,255,255,0.6);
                left:(653px-272px)/2;
                margin-top:238px;
                text-align:center;
                padding:3px 0px;
                span{
                    letter-spacing:18px;padding-left:9px;
                }
                dd{
                    margin:0;
                }
            }
            .btn-up{
                margin-left:-170px;
            }
            .btn-down{
                margin-left:170px;
            }

            .active-color{
                background-color:#FFF;
            }
            .input-check{
                position:absolute;top:710px;left:120px;
            }
            .btn-check-link{
                position:absolute;top:710px;left:120px;width:120px;height:35px;left:388px;
            }
            .btn-submit{
                position:absolute;
                width:480px;height:80px;background-color:#FFF;text-align:center;
                line-height:80px;
                margin-top:388px;
                margin-left:(653px-480px)/2;
            }
        }
        .bg{
            width: 100%;position: relative;z-index: 6;
        }
    }
</style>