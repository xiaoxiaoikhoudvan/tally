<template>
        <Layout class-prefix="layout">
            <div class="numberPad">
                <div class="output">100</div>
                <div class="buttons">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>+</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button> -</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>x</button>
                    <button class="ok"> =</button>
                    <button>.</button>
                    <button>0</button>
                    <button>%</button>
                    <button>÷</button>
                </div>
            </div>
            <div>
                <ul class="types">
                    <li class="selected">支出</li>
                    <li>收入</li>
                </ul>
            </div>
            <div>
                <label class="notes">
                    <span class="name">
                        备注
                    </span>
                    <input type="text" placeholder="请输入备注">
                </label>
            </div>
            <div class="tags">
                <div class="new">
                    <button>新增标签</button>
                </div>
                <ul class="current">
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                    <li>住</li>
                    <li>行</li>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                    <li>住</li>
                    <li>行</li>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                    <li>住</li>
                    <li>行</li>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                    <li>住</li>
                    <li>行</li>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                    <li>住</li>
                    <li>行</li>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                    <li>住</li>
                    <li>行</li>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                    <li>住</li>
                    <li>行</li>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                    <li>住</li>
                    <li>行</li>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ul>
            </div>
        </Layout>
</template>

<script lang="ts" scoped>
    export default {
        name:'Money',
    }
</script>

<style lang="scss">
    .layout-content{
        display: flex;
        flex-direction: column-reverse;
    }
</style>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .numberPad{
        .output{
            @extend %clearfix;
            @extend %innerShadow;
            font-size: 36px;
            font-family: Consolas,monospace;
            padding: 9px 16px;
            text-align: right;
        }
        .buttons{
            @extend %clearfix;
            > button {
                width: 20%;
                height: 64px;
                //用float 父元素要写clearfix
                float: left;
                background: transparent;
                border: none;
                &.ok{
                    height: 64*2px;
                    float: right;
                }
                //按键背景色
                $bg:#f2f2f2;
                &:nth-child(1){
                    background: $bg;
                }
                &:nth-child(2),&:nth-child(6){
                    background: darken($bg,4%);
                }
                &:nth-child(3),&:nth-child(7),&:nth-child(11){
                    background: darken($bg,4*2%);
                }
                &:nth-child(4),&:nth-child(8),&:nth-child(12),&:nth-child(16){
                    background: darken($bg,4*3%);
                }
                &:nth-child(5),&:nth-child(9),&:nth-child(13),&:nth-child(17),&:nth-child(21){
                    background: darken($bg,4*4%);
                }
                &:nth-child(10),&:nth-child(14),&:nth-child(18){
                    background: darken($bg,4*5%);
                }
                &:nth-child(19){
                    background: darken($bg,4*6%);
                }
                &:nth-child(15){
                    background: darken($bg,4*7%);
                }
            }
        }
    }
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
    .notes{
        font-size: 14px;
        background: #f5f5f5;
        display: block;
        padding-left: 16px;
        display: flex;
        align-items: center;
        .name{
            padding-right: 16px;
        }
        input{
            height: 64px;
            flex-grow: 1;
            background: transparent;
            border: none;
            padding-right: 16px;
        }
    }
    .tags {
        border: 1px solid green;
        font-size:14px;
        padding: 16px;
        flex-grow: 1;
        display: flex;
        flex-direction: column-reverse;
        > .current {
            display: flex;
            flex-wrap: wrap;
            > li{
                $h: 24px;
                background: #d9d9d9;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 20px;
                margin-right: 16px;
                margin-top: 4px;
            }
        }
        > .new {
            padding-top: 16px;
            button{
                //背景设置透明
                background: transparent;
                border: none;
                color: #999;
                //不给颜色 则下划线跟字体一样颜色
                border-bottom: 1px solid;
                padding: 0 4px;
            }
        }
    }
</style>
