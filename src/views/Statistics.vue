<template>
        <Layout>
            <Tab class-prefix="type" :data-source="typeList" :value.sync="type"/>
            <Tab class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
            <div>
                type:{{type}}
                type:{{interval}}
            </div>
        </Layout>
</template>

<style scoped lang="scss">
    ::v-deep .type-tab-item{
        background: white;
        &.selected{
            background: #c4c4c4;
            &::after{
                display: none;
            }
        }
    }
</style>

<script lang="ts">
    import Types from '@/components/Money/Types.vue';
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tab from '@/components/Tab.vue';

    @Component({
        components:{Types,Tab}
    })
    export default class Statistics extends Vue {
        type = '-';
        interval = 'day';
        intervalList = [
            {text:'按天',value:'day'},
            {text:'按周',value:'week'},
            {text:'按月',value:'month'},
        ];
        typeList = [
            {text:'支出',value:'-'},
            {text:'收入',value:'+'}
        ]
    }
</script>

<style lang="scss" scoped>

</style>