<template>
    <div>
        <ul class="types">
            <li :class="type === '-' && 'selected'"
                @click="selectType('-')">支出</li>
            <li :class="type === '+' && 'selected'"
                @click="selectType('+')">收入</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class Types extends Vue {
        type = '-'; // '-'表示支出  '+'表示表示收入
        
        selectType(type:string){
            if (type !== '-' && type !== '+') {
                throw new Error('type is unknown')
            }
            this.type = type
        }

        mounted(){
        }
    }
    // export default {
    //     name:'Types',
    //     props:['xxx'],
    //     data(){
    //         return{
    //             type:'-' // '-'表示支出  '+'表示表示收入
    //         }
    //     },
    //     mounted(){
    //         console.log("xxx=>",this.xxx);
    //     },
    //     methods:{
    //         selectType(type){
    //             if (type !== '-' && type !== '+') {
    //                 throw new Error('type is unknown')
    //             }
    //             this.type = type
    //         }
    //     }
    // }
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