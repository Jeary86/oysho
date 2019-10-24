<template>
    <div class="header-roll">
        <div class="header-list show_move">
            <div class="pic">
                <img src="../assets/text-animation.png" />
            </div>
        </div>

        <div class="header-list hide_move">
            <div class="pic">
                <img src="../assets/text-animation.png" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderRoll"
    }
</script>

<style lang="less" scoped>
.header-roll{
    width:100%;position:absolute;z-index:9999;top:35px;

    .header-list{
        width:100%;position:relative;
        .pic{
            width:667px;position:absolute;
            margin-left:(750px - 667px)/2;
        }
    }
    .show_move{
        animation: 5s show_move infinite linear;
    }
    @keyframes show_move {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }
    .hide_move{
        animation: 5s hide_move infinite linear;
    }
    @keyframes hide_move {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(0%);
        }
    }
}
</style>