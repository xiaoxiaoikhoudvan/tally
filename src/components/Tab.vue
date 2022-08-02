<template>
        <ul class="tabs" :class="{[classPrefix+'-tabs']:classPrefix}">
            <li v-for="item in dataSource" :key="item.value" class="tabs-item" 
                :class="liClass(item)"
                @click="select(item)">{{item.text}}
            </li>
        </ul>
</template>

<script lang="ts">
import Vue from "vue";
import {Component,Prop} from "vue-property-decorator";

type DataSourceItem = {text:string,value:string}

@Component
export default class Tabs extends Vue {
    @Prop({required:true,type:Array}) 
    dataSource!:DataSourceItem[]
    @Prop(String) 
    readonly value!:string;
    @Prop(String) 
    classPrefix?:string;

    liClass(item:DataSourceItem){
        return{
            [this.classPrefix+'-tab-item']:this.classPrefix,
            selected:item.value === this.value
        };
    }

    select(item:DataSourceItem){
        this.$emit('update:value',item.value)
    }
}
</script>

<style lang="scss" scoped>
    .tabs{
        background: #c4c4c4;
        display: flex;
        text-align: center;
        font-size: 24px;
        &-item {
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