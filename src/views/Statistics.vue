<template>
        <Layout>
            <Tab class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
                <ol v-if="groupedList.length > 0">
                    <li v-for="(group,index) in groupedList" :key="index">
                        <h3 class="title">{{beautify(group.title)}} <span>￥{{group.total}}</span></h3>
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
                <div v-else class="noResult">
                    目前没有相关记录
                </div>
        </Layout>
</template>
<style scoped lang="scss">
    .noResult{
        padding:16px;
        text-align:center;
    }
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

    ::v-deep {
        .type-tab-item{
            background: #c4c4c4;
            &.selected{
                background: white;
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
    import dayjs from 'dayjs';
    import clone from '@/lib/clone'


    @Component({
        components:{Tab}
    })
    export default class Statistics extends Vue {
        tagString(tags:Tag[]){
            return tags.length === 0?'无':
            tags.map(t => t.name).join('，')
        }
        beautify(string:string){
           const day = dayjs(string);
           const now = dayjs();
           if(day.isSame(now,'day')){
                return '今天'
           }else if(day.isSame(now.subtract(1,'day'),'day')){
                return '昨天'
           }else if(day.isSame(now.subtract(2,'day'),'day')){
                return '前天'
           }else if(day.isSame(now,'year')){
                return day.format('MM月D日')
           }else{
                return day.format('YYYY年MM月D日');
           }
        }
        get recordList(){
            return this.$store.state.recordList;
        }

        get groupedList(){
            const {recordList} = this;
            const newList = clone(recordList)
                .filter((r:any)=>r.type === this.type)
                .sort((a:any,b:any)=>dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
            if (newList.length === 0) {return [];}
            type Result = {title:string,total?:number,items:RecordItem[]}[]
            const result:Result = [{title:dayjs(recordList[0].createdAt).format('YYYY-MM-DD'),items:[newList[0]]}];
            for(let i=1;i<newList.length;i++){
                const current = newList[i];
                const last = result[result.length-1];
                if(dayjs(last.title).isSame(dayjs(current.createdAt),'day')){
                    last.items.push(current)
                }else{
                    result.push({title:dayjs(current.createdAt).format('YYYY-MM-DD'),items:[current]})
                }
            }
            result.map(group =>{
                group.total = group.items.reduce((sum,item) => sum + item.amount,0);
            })
            return result;
        }
        beforeCreate(){
            this.$store.commit('fetchRecords');
        }
        type = '-';
        recordTypeList = recordTypeList;
    }
</script>

<style lang="scss" scoped>

</style>