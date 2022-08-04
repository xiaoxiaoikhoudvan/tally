<template>
        <Layout>
            <Tab class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
            <Tab class-prefix="interval" :data-source="intervalList" 
                :value.sync="interval"/>
            <div>
                type:{{type}}
                type:{{interval}}
            </div>
                <ol>
                    <li v-for="(group,index) in result" :key="index">
                        <h3 class="title">{{group.title}}</h3>
                        <ol>
                            <li v-for="item in group.items" :key="item.id"
                                class="record"
                            >
                               <span>{{tagString(item.tags)}}</span>
                               <span class="notes">{{item.notes}}</span>
                               <span>￥{{item.amount}}</span>
                            </li>
                        </ol>
                    </li>
                </ol>
        </Layout>
</template>
<style scoped lang="scss">
    %item{
        padding: 8px 16px;
        line-height: 24px;
        display: flex;
        justify-content: space-between;
        align-content: center;
    }
    .title{
        @extend %item;
    }
    .record{
        background: white;
        @extend %item;
    }
    .notes{
        margin-right: auto;
        margin-left: 16px;
        color: #999;
    }
</style>

<style scoped lang="scss">
    ::v-deep {
        .type-tab-item{
            background: white;
            &.selected{
                background: #c4c4c4;
                &::after{
                    display: none;
                }
            }
        }
        .interval-tab-item{
            height: 48px;
        }
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
        tagString(tags:Tag[]){
            return tags.length === 0?'无':tags.join(',')
        }
        get recordList(){
            return this.$store.state.recordList;
        }

        get result(){
            const {recordList} = this;
            type HashTableValue = { title:string,items:RecordList[]}
            const hashTable: { [key:string] : HashTableValue } = {};
            for(let i=0; i<recordList.length;i++){
               const [date,time] =  recordList[i].createdAt!.split('T');
               hashTable[date] = hashTable[date] || {title:date,items:[]};
               hashTable[date].items.push(recordList[i]);
            }
            return hashTable;
        }
        beforeCreate(){
            this.$store.commit('fetchRecords');
        }
        type = '-';
        interval = 'day';
        intervalList = intervalList;
        recordTypeList = recordTypeList;
    }
</script>

<style lang="scss" scoped>

</style>