<template>
    <div class="synthetic">
        <canvas id="myCanvas"></canvas>
    </div>
</template>

<script>
    const createjs = window.createjs
    export default {
        name: "Synthetic",
        props:{
            textData : String,
            timeData : String
        },
        data(){
            return{
                stage : null,
                canvas : null,
                pageWidth : 750,
                pageHeight : 1176,
            }
        },
        mounted(){
            this.loaderCanvas(this.textData,this.timeData)
            // this.loaderCanvas('11111','10:00-11:30')
        },
        methods:{
            loaderCanvas(txt,time){
                let t = this;
                t.canvas = document.getElementById("myCanvas");
                t.canvas.width = t.pageWidth;
                t.canvas.height = t.pageHeight;
                t.stage = new createjs.Stage(t.canvas);//游戏场景
                t.stage.enableMouseOver(10);
                createjs.Touch.enable(t.stage);//启动触摸
                createjs.Ticker.setFPS(60);
                createjs.Ticker.addEventListener('tick',t.handleTicker);//绑定舞台每一帧的逻辑发生函数
                t.stage.mouseMoveOutside = true;

                this.loaderComplete(txt,time)
            },
            loaderComplete(txt,time){
                let t = this;

                let imgUrl = global.loadQueue.getResult('box_bg');
                // let logoUrl = global.loadQueue.getResult('logo_box');

                // console.log(imgUrl,logoUrl)

                let bgImg = new createjs.Bitmap(imgUrl);
                // let logoImg = new createjs.Bitmap(logoUrl);


                let text = new createjs.Text("Hi " + txt, "bolder 45px Arial", "#221f21");

                let timeTxt = new createjs.Text(time, "bolder 42px Arial", "#221f21");

                bgImg.x = t.pageWidth/2;
                bgImg.y = t.pageHeight/2;
                // bgImg.scaleX = bgImg.scaleY = 1;
                bgImg.regX = bgImg.image.width/2;
                bgImg.regY = bgImg.image.height/2;


                // logoImg.x = t.pageWidth/2;
                // logoImg.y = t.pageHeight/2 + 260;
                // logoImg.regX = logoImg.image.width/2;
                // logoImg.regY = logoImg.image.height/2;
                // logoImg.scaleX = logoImg.scaleY = 0.6;

                text.textAlign = 'center';
                text.x = t.pageWidth/2;
                text.y = bgImg.image.height/2 - 475;


                timeTxt.textAlign = 'center';
                timeTxt.x = t.pageWidth/2;
                timeTxt.y = bgImg.image.height/2 -50;

                t.stage.addChild(bgImg);
                // t.stage.addChild(logoImg);
                t.stage.addChild(text);
                t.stage.addChild(timeTxt);

                setTimeout(()=>{
                    console.log(txt + "————————————————————")
                    let myCanvas = document.getElementById('myCanvas');
                    let imgData = myCanvas.toDataURL("image/png");

                    t.$store.dispatch('setImagesUrl',imgData);

                    t.stage.removeAllChildren()

                },100)
            },
            handleTicker(){
                this.stage.update(event);
            }
        }
    }
</script>

<style lang="less" scoped>
#myCanvas{
    width:100%;position:absolute;
    display:none;
}
</style>