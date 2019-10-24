<template>
    <div class="end-mask">
        <div class="end-pic">
            <div class="wx-pic">
                <img class="img_events" src="../assets/wx_pic.jpg" />
            </div>
            <div class="wb-pic">
                <img class="img_events" src="../assets/wb_pic.jpg" />
            </div>
            <img src="../assets/end_pic.png" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "EndMask"
    }
</script>

<style lang="less" scoped>
.end-mask{
    width:100%;height:100%;position:absolute;z-index:9999;
    background-color:rgba(255,255,255,0.1);

    .end-pic{
        width:539px;position:absolute;
        left:50%;margin-left:-(539px/2);
        margin-top:290px;

        .wx-pic,.wb-pic{
            width:147px;position:absolute;margin-top:580px;
        }
        .wx-pic{
            left:85px;
        }
        .wb-pic{
            right:85px;
        }
    }
}
</style>