<template>
        <Layout>
            <Tab class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
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
    ::v-deep .interval-tab-item{
        height: 48px;
    }
</style>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tab from '@/components/Tab.vue';
    import intervalList from '@/contants/intervalList';
    import recordTypeList from '@/contants/recordTypeList';

    @Component({
        components:{Tab}
    })
    export default class Statistics extends Vue {
        type = '-';
        interval = 'day';
        intervalList = intervalList;
        recordTypeList = recordTypeList;
    }
</script>

<style lang="scss" scoped>

</style>