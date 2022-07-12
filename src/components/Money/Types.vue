<template>
    <div>
        <ul class="types">
            <li class="selected">支出</li>
            <li>收入</li>
        </ul>
    </div>
</template>

<script lang="ts">
    export default {
        name:'Types'
    }
</script>

<style lang="scss" scoped>
    .types{
        background: #c4c4c4;
        display: flex;
        text-align: center;
        font-size: 24px;
        > li {
            width: 50%;
            height: 64px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            //表示当前被选中,用after是因为如果不用的话选中的时候由于border-bottom有高度，会导致
            //文字向上撑   
            &.selected::after{
                content: '';
                position: absolute;
                height: 4px;
                width: 100%;
                bottom: 0;
                left: 0;
                background: #333;
            }
        }
    }
</style>